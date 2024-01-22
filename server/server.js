import express from 'express'
import ViteExpress from 'vite-express'
import prodCtrl from './controllers/productsCtrl.js'

const app = express()

app.use(express.json())

app.get('/api/stickers', prodCtrl.allStickers)
app.get('/api/packs', prodCtrl.allPacks)

app.post(`/api/cart/sticker/:id`, prodCtrl.addStickerToCart)



ViteExpress.listen(app, 3030, () => {console.log('cruising on port 3030')})
