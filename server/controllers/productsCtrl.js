import { Sticker, Pack, CartItem, sequelize } from '../db/model.js'

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
        let packs = await Pack.findAll({
            include: { 
                model: Sticker
            }
        })

        // const packsStickers = packs.map(async (eachPack) => {
        //     eachPack.stickers = await eachPack.getStickers()
        // }) 

        console.log(packs)

        res.status(200).send(packs)
    },
    addStickerToCart: async (req, res) => {
        let { qty } = req.query
        let { id } = req.params
        // let id = req.params.id

        console.log(qty)
        console.log(id)
    
        console.log("hit add sticker");

    
        //Danny's task[]: insert a row into CartItem
    
        const sendToCart = await CartItem.create({
            userId: 1, // once users is implimented, the user id will come from user sessions
            quantity: qty,
            stickerId: id
        });

        // let sendToCart = await sequelize.query(`
        //     INSERT INTO cart_items ("userId", quantity, "stickerId", "packId")
        //     VALUES (1, ${qty}, ${id}, null);
        // `)

        // console.log(sendToCart)

        // res.status(200).send(something) //sends status 200 and a body
        // res.sendStatus(200) //sends just a status 200
        // res.send(something) //sends a body and the default status aka 200



        // console.log({
        //     stickerId: Sticker.id,
        //     packId: Pack.id,
        //     howMany: CartItem.qty
        // })

        // res.status(200).send({
        //     stickerId: Sticker.id,
        //     packId: Pack.id,
        //     howMany: CartItem.qty
        // })

        res.status(200).send("Item Successfully added to cart")

            //how do i represent the data im trying to send?
            //can i send data from muliple tables at once like this?
            // is there some kind of outline i can follow?
     },

     addPackToCart: async (req, res) => {
        let { qty } = req.query
        let { id } = req.params
        console.log("Hit Add Pack to cart")

        const sendToCart = await CartItem.create({
            userId: 1, // once users is implimented, the user id will come from user sessions
            quantity: qty,
            packId: id
        });


        res.sendStatus(200)
     }



}