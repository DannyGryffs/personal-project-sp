import { sequelize, Sticker, Pack, CartItem, User } from '../server/db/model.js'

const stickers = [
    {
        name: "Comic Alien",
        description: "pop art syle alien",
        tag: "Space, Comic",
        price: "4.00",
        image: "ComicAlien.png",
        packId: 1
    },
    {
        name: "Dreamy Cat",
        description: "cat sleeping on a cloud",
        tag: "Animal, Dreamy",
        price: "3.00",
        image: "DreamyCat.png",
        packId: 2
    },
    {
        name: "Artsy Pup",
        description: "line-drawn dog",
        tag: "Artsy, Animals",
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
    {
        name: "Cherry Bomb",
        description: "Explosive cherry v1",
        tag: "Artsy, Fruit",
        price: "3.00",
        image: "CherryBomb.png",
        packId: null
    },
    {
        name: "Hungry Zebra",
        description: "Hungry Zebra",
        tag: "Animal, Artsy, Colorful",
        price: "4.00",
        image: "RamenZebra.png",
        packId: null
    },

];

const pack = [
    {
        id: 1,
        name: "Cosmos",
        description: "8 space themed stickers",
        price: "20.00"
    },
    {
        id: 2,
        name: "Animals",
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
