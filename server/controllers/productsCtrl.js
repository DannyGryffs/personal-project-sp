import { Sticker, Pack, CartItem, sequelize } from '../db/model.js'

const cartArr = [

];

export default {
    allStickers: async (req, res) => {
        // console.log('hit all stickers');
        let stickers = await Sticker.findAll()

        res.status(200).send(stickers)
    },
    allPacks: async (req, res) => {
        // console.log('hit all packs');
        let packs = await Pack.findAll({
            include: { 
                model: Sticker
            }
        })

        console.log(packs)

        res.status(200).send(packs)
    },
    addStickerToCart: async (req, res) => {
        let { qty } = req.query
        let { id } = req.params
        // let id = req.params.id

        // console.log(qty)
        // console.log(id)
    
        // console.log("hit add sticker");

    
        //Danny's task[]: insert a row into CartItem
    
        const sendToCart = await CartItem.create({
            userId: 1, // once users is implimented, the user id will come from user sessions
            quantity: qty,
            stickerId: id
        });

        res.status(200).send("Item Successfully added to cart")

            //how do i represent the data im trying to send?
            //can i send data from muliple tables at once like this?
            // is there some kind of outline i can follow?
     },

     addPackToCart: async (req, res) => {
        let { qty } = req.query
        let { id } = req.params
        // console.log("Hit Add Pack to cart")

        const sendToCart = await CartItem.create({
            userId: 1, // once users is implimented, the user id will come from user sessions
            quantity: qty,
            packId: id
        });


        res.sendStatus(200)
     },
     getCartItems: async (req, res) => {
        const id = 1;
        console.log("hit cart items")

        let cartI = await CartItem.findAll({
            attributes: ["quantity", "id"],
            where: {
                userId: id
            },
            include: [
                {
                    model: Sticker,
                    attributes: ["name", "image", "price"]
                },
                {model: Pack}
            ]
        });

        console.log(cartI);

        res.status(200).send(cartI)

    }
        // get all data from cartitems where the userId = 1

        // console.log(cartItemData)
        // inlcude stckers with the id that matches the stickerId

        // include packs with the id that matches the  packId

        // send data back to front end
        
        


}