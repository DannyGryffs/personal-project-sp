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
        
//////////////////////////////////////////////////////////

        let cartI = await CartItem.findAll({
            where: {
                stickerId: id,
                userId: 1
            },
        });

    
        
        if (cartI.length === 0) {
            
            const sendToCart = await CartItem.create({
                userId: 1, // once users is implimented, the user id will come from user sessions
                quantity: qty,
                stickerId: id
            });
            
        } else if (cartI.length > 0) {
             let matchingCartItem = cartI[0]

             matchingCartItem.quantity += 1
             await matchingCartItem.save()
        }

       // model instance

///////////////////////////////////////////////////////////
        // const sendToCart = await CartItem.create({
        //     userId: 1, // once users is implimented, the user id will come from user sessions
        //     quantity: qty,
        //     stickerId: id
        // });

        res.status(200).send("Item Successfully added to cart")

            //how do i represent the data im trying to send?
            //can i send data from muliple tables at once like this?
            // is there some kind of outline i can follow?
     },

     addPackToCart: async (req, res) => {
        let { qty } = req.query
        let { id } = req.params
        console.log('== Add To Packs Route ==');
        console.log(req.params);
        console.log(req.query);
        // console.log("Hit Add Pack to cart")

        try {
            // check if there is one of these items in the cart already
            const cartItem = await CartItem.findOne({
                where: {
                    packId: id,
                }
            })
            console.log(cartItem);
            // if there is, just increase the quantity
            if (cartItem) {
                cartItem.quantity++;
                await cartItem.save();
            // if there is not, add the item to the cart
            } else {
                await CartItem.create({
                    quantity: qty,
                    packId: id,
                    userId: 1,
                })
            }
            // send response
            res.status(200).send(cartItem);
        }catch(err) {
            console.log(err);
        }

        //////////////////////////////////////////////////////////////

        /*
        let cartI = await CartItem.findAll({
            where: {
                stickerId: id,
                userId: 1
            },
        });

        console.log('CartI');
        console.log(cartI);

    
        
        if (cartI.length === 0) {
            
            const sendToCart = await CartItem.create({
                userId: 1, // once users is implimented, the user id will come from user sessions
                quantity: qty,
                PackId: id
            });
            
        } else if (cartI.length > 0) {
             let matchingCartItem = cartI[0]

             matchingCartItem.quantity += 1
             await matchingCartItem.save()
        }

        /////////////////////////////////////////////////////////////////
        // const sendToCart = await CartItem.create({
        //     userId: 1, // once users is implimented, the user id will come from user sessions
        //     quantity: qty,
        //     packId: id
        // });


        //res.sendStatus(200)
        res.status(200).send(cartI);
        */
        
     },
     getCartItems: async (req, res) => {
        console.log('== get cart items route ==');
        const id = 1;
        console.log("hit cart items")


        let cartI = await CartItem.findAll({
            //attributes: ["quantity", "id"],
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