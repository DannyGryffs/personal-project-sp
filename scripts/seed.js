import { sequelize, Sticker, Pack, CartItem, User } from '../server/db/model.js'

const stickers = [
    {
        name: "Comic Alien",
        description: "pop art syle alien",
        tag: "space, comic",
        price: "4.00",
        image: "ComicAlien.png",
        packId: 1
    },
    {
        name: "Dreamy Cat",
        description: "cat sleeping on a cloud",
        tag: "animal, dreamy",
        price: "3.00",
        image: "DreamyCat.png",
        packId: 2
    },
    {
        name: "Artsy Pup",
        description: "line-drawn dog",
        tag: "artsy, animals",
        price: "4.00",
        image: "ArtsyPup.png",
        packId: 2
    },
    {
        name: "SP Logo",
        description: "colorful Sticker Plug logo",
        tag: "logo, colorful",
        price: "2.00",
        image: "icon.png",
        packId: null
    },

];

const pack = [
    {
        id: 1,
        name: "cosmos",
        description: "8 space themed stickers",
        price: "20.00"
    },
    {
        id: 2,
        name: "animals",
        description: "8 animal themed stickers",
        price: "20.00"
    },
]

let user = {
    email: 'danny@danny.com',
    password: 'abc123!',
    isAdmin: true
}

await sequelize.sync({force: true})

await Pack.bulkCreate(pack)
await Sticker.bulkCreate(stickers);
await User.create(user)




sequelize.close()
