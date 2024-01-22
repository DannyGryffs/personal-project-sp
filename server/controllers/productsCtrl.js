import { Sticker, Pack} from '../db/model.js'

const cartArr = [

];

export default {
    allStickers: async (req, res) => {
        console.log('hit all stickers');
        let stickers = await Sticker.findAll()

        res.status(200).send(stickers)
    },
    allPacks: async (req, res) => {
        console.log('hit all packs')
        let packs = await Pack.findAll()

        res.status(200).send(packs)
    },
    addStickerToCart: async (req, res) => {
        let { qty } = req.query
        let { id } = req.params
    
        console.log("hit add sticker");

    
        // cartArr.push({

        // })
    
        res.status(200).send(cartArr)
    
     }


}