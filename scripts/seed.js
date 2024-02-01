import { sequelize, Sticker, Pack, CartItem, User } from '../server/db/model.js'

const stickers = [
    {
        name: "Star Gaze",
        description: "a girl staring at the stars",
        tag: "Space, Anime",
        price: "4.00",
        image: "StarGaze.png",
        packId: 1
    },
    {
        name: "Star Girl",
        description: "space girl",
        tag: "Space, Anime",
        price: "4.00",
        image: "StarGirl.png",
        packId: 1
    },{
        name: "Space Bot",
        description: "retro space robot",
        tag: "Space, Comic, Artsy, Colorful",
        price: "4.00",
        image: "SpaceBot.png",
        packId: 1
    },
    {
        name: "Rocketship",
        description: "flying through the cosmos",
        tag: "Space, Colorful, Dreamy",
        price: "4.00",
        image: "RocketShip.png",
        packId: 1
    },
    {
        name: "Moon Walker",
        description: "retro pop art astronaut",
        tag: "Space, Retro, Comic",
        price: "4.00",
        image: "MoonWalker.png",
        packId: 1
    },
    {
        name: "Pizza Invader",
        description: "UFO abducting a pizza slice",
        tag: "Space, Artsy, E.T.",
        price: "4.00",
        image: "PizzaInvader.png",
        packId: 1
    },
    {
        name: "Moon Walker II",
        description: "retro pop art astronaut",
        tag: "Space, Retro, Comic",
        price: "4.00",
        image: "MoonWalker2.png",
        packId: 1
    },
    {
        name: "Celestia",
        description: "alien lady",
        tag: "Space, Unique, Colorful, E.T.",
        price: "4.00",
        image: "Celestia.png",
        packId: 1
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
        name: "Dreamy Cat",
        description: "cat sleeping on a cloud",
        tag: "Animal, Dreamy",
        price: "4.00",
        image: "DreamyCat.png",
        packId: 2
    },
    {
        name: "Comic Roadrunner",
        description: "Beep Beep",
        tag: "Comic, Animals, Colorful",
        price: "4.00",
        image: "ComicRoadrunner.png",
        packId: 2
    },
    {
        name: "Astro Dolphins",
        description: "space dolphins",
        tag: "Artsy, Dreamy, Animals",
        price: "4.00",
        image: "AstroDolphins.png",
        packId: 2
    },
    {
        name: "Scaredy Cat",
        description: "surprised tabby",
        tag: "Artsy, Unique, Animals",
        price: "4.00",
        image: "ScaredyCat.png",
        packId: 2
    },
    {
        name: "Hungry Giraffe",
        description: "giraffe eating ramen",
        tag: "Goofy, Animals",
        price: "4.00",
        image: "HungryGiraffe.png",
        packId: 2
    },
    {
        name: "RattleSnake",
        description: "snake in the desert",
        tag: "Comic, Colorful, Animals",
        price: "4.00",
        image: "Rattlesnake.png",
        packId: 2
    },
    {
        name: "Hungry Zebra",
        description: "zebra eating ramen",
        tag: "Goofy, Colorful, Animals",
        price: "4.00",
        image: "HungryZebra.png",
        packId: 2
    },
    {
        name: "Purp",
        description: "purple burning skeleton",
        tag: "Unique, Original",
        price: "4.00",
        image: "Purp.png",
        packId: 3
    },
    {
        name: "Ancient Dragon",
        description: "colorful dragon",
        tag: "Unique, Original, Colorful, Artsy",
        price: "4.00",
        image: "AncientDragon.png",
        packId: 3
    },
    {
        name: "Dream Catcher",
        description: "dream catcher sunset",
        tag: "Original, Dreamy",
        price: "4.00",
        image: "DreamCatcher.png",
        packId: 3
    },
    {
        name: "Cherry Bomb II",
        description: "explosive cherry",
        tag: "Original, Comic, Fruit",
        price: "4.00",
        image: "CherryBomb2.png",
        packId: 3
    },
    {
        name: "Bullet",
        description: "shiney bullet",
        tag: "Original",
        price: "4.00",
        image: "Bullet.png",
        packId: 3
    },
    {
        name: "Ace",
        description: "abstract playing card",
        tag: "Original, Abstract, Unique",
        price: "4.00",
        image: "Ace.png",
        packId: 3
    },
    {
        name: "Desert Tree",
        description: "comic tree",
        tag: "Original, Comic, Artsy",
        price: "4.00",
        image: "DesertTree.png",
        packId: 3
    },
    {
        name: "Neon Kitty",
        description: "neon cartoon cat",
        tag: "Original, Artsy, Unique, Animals",
        price: "4.00",
        image: "NeonKitty.png",
        packId: 3
    },
    {
        name: "Astro Cruise",
        description: "cruisin through the cosmos",
        tag: "E.T., Space",
        price: "4.00",
        image: "AstroCruise.png",
        packId: 4
    },
    {
        name: "Comic Alien",
        description: "pop art syle alien",
        tag: "Space, Comic, E.T.",
        price: "4.00",
        image: "ComicAlien.png",
        packId: 4
    },
    {
        name: "Mirror Alien",
        description: "alien in a rear view mirror",
        tag: "Space, Unique, E.T.",
        price: "4.00",
        image: "MirrorET.png",
        packId: 4
    },
    {
        name: "En La Playa",
        description: "UFO on the beach",
        tag: "Unique, E.T.",
        price: "4.00",
        image: "BeachUFO.png",
        packId: 4
    },
    {
        name: "Desert Alien",
        description: "alien in the desert",
        tag: "Unique, E.T.",
        price: "4.00",
        image: "DesertAlien.png",
        packId: 4
    },
    {
        name: "New World",
        description: "enjoying the view",
        tag: "Space, E.T.",
        price: "4.00",
        image: "NewWorld.png",
        packId: 4
    },
    {
        name: "Astro Cruise 2",
        description: "cruisin through the cosmos",
        tag: "Space, E.T.",
        price: "4.00",
        image: "AstroCruise2.png",
        packId: 4
    },
    {
        name: "The Watcher",
        description: "big eyed alien",
        tag: "Unique, Artsy, E.T.",
        price: "4.00",
        image: "TheWatcher.png",
        packId: 4
    },
    {
        name: "Wile",
        description: "coyote smoking cigar",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "Wile.png",
        packId: 5
    },
    {
        name: "The Twins",
        description: "armed and dangerous",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "Twins.png",
        packId: 5
    },
    {
        name: "George",
        description: "monkey hitting a pipe",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "George.png",
        packId: 5
    },
    {
        name: "Rich Pelican",
        description: "Pelican flying away with cash",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "RichPelican.png",
        packId: 5
    },
    {
        name: "Wile II",
        description: "coyote smoking cigar",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "Wile2.png",
        packId: 5
    },
    {
        name: "Thirsty Tabby",
        description: "orange tabby enjoying a cocktail",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "ThirstyTabby.png",
        packId: 5
    },
    {
        name: "Smokey Pup",
        description: "dog smoking",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "SmokeyPup.png",
        packId: 5
    },
    {
        name: "Thirsty Zebra",
        description: "zebra enjoying a cocktail",
        tag: "Unique, Goofy, Animals",
        price: "4.00",
        image: "ThirstyZebra.png",
        packId: 5
    },
    {
        name: "Lips",
        description: "b&w hand-drawn lips",
        tag: "Unique, Artsy, Original",
        price: "4.00",
        image: "Lips.png",
        packId: 6
    },
    {
        name: "Cherry Bomb V",
        description: "explosive cherry",
        tag: "Original, Comic, Fruit",
        price: "4.00",
        image: "CherryBomb5.png",
        packId: 6
    },
    {
        name: "Power Plug",
        description: "artistic rendition of a power plug",
        tag: "Original, Artsy, Abstract",
        price: "4.00",
        image: "PowerPlug.png",
        packId: 6
    },
    {
        name: "Lady Abstract",
        description: "line-drawn abstract woman",
        tag: "Original, Artsy, Abstract, Dreamy, Colorful",
        price: "4.00",
        image: "LadyAbstract.png",
        packId: 6
    },
    {
        name: "Library Blonde",
        description: "blonde girl around books",
        tag: "Original, Artsy, Abstract, Anime",
        price: "4.00",
        image: "LibraryBlonde.png",
        packId: 6
    },
    {
        name: "Lady Abstract II",
        description: "line-drawn abstract woman",
        tag: "Original, Artsy, Abstract, Dreamy, Colorful",
        price: "4.00",
        image: "LadyAbstract2.png",
        packId: 6
    },
    {
        name: "Eye Drip",
        description: "hand-drawn dramatic eye",
        tag: "Original, Artsy, Anime",
        price: "4.00",
        image: "EyeDrip.png",
        packId: 6
    },
    {
        name: "Astro Dolphins II",
        description: "space dolphins",
        tag: "Artsy, Dreamy, Animals",
        price: "4.00",
        image: "AstroDolphins2.png",
        packId: 6
    },
    {
        name: "Coyote",
        description: "coyote in the desert",
        tag: "Animals, Comic",
        price: "4.00",
        image: "Coyote.png",
        packId: 7
    },
    {
        name: "RattleSnake II",
        description: "snake in the desert",
        tag: "Comic, Colorful, Animals",
        price: "4.00",
        image: "Rattlesnake2.png",
        packId: 7
    },
    {
        name: "Javalina",
        description: "baby sonoran javalina",
        tag: "Animals, Comic",
        price: "4.00",
        image: "Javalina.png",
        packId: 7
    },
    {
        name: "Quail",
        description: "desert quail",
        tag: "Animals, Comic",
        price: "4.00",
        image: "DesertQuail.png",
        packId: 7
    },
    {
        name: "Coyote II",
        description: "coyote in the desert",
        tag: "Animals, Comic",
        price: "4.00",
        image: "Coyote2.png",
        packId: 7
    },
    {
        name: "Bobcat",
        description: "baby bobcat",
        tag: "Animals, Comic",
        price: "4.00",
        image: "Bobcat.png",
        packId: 7
    },
    {
        name: "Javalina II",
        description: "baby sonoran javalina",
        tag: "Animals, Comic",
        price: "4.00",
        image: "Javalina2.png",
        packId: 7
    },
    {
        name: "Comic Roadrunner II",
        description: "Beep Beep",
        tag: "Comic, Animals, Colorful",
        price: "4.00",
        image: "ComicRoadrunner2.png",
        packId: 7
    },
    {
        name: "Heart Balloons",
        description: "much love",
        tag: "Comic, Original, Dreamy",
        price: "4.00",
        image: "HeartBalloons.png",
        packId: 8
    },
    {
        name: "Flaming Moon",
        description: "moon on fire",
        tag: "Comic, Original, Dreamy, Unique",
        price: "4.00",
        image: "FlamingMoon.png",
        packId: 8
    },
    {
        name: "Cherry Bomb III",
        description: "explosive cherry",
        tag: "Original, Comic, Fruit",
        price: "4.00",
        image: "CherryBomb3.png",
        packId: 8
    },
    {
        name: "Hungry",
        description: "eat that up, its good for you",
        tag: "Original, Comic, Anime, Goofy",
        price: "4.00",
        image: "Hungry.png",
        packId: 8
    },
    {
        name: "Blossom Temple",
        description: "beautiful Japanese temple",
        tag: "Original, Comic, Dreamy",
        price: "4.00",
        image: "BlossomTemple.png",
        packId: 8
    },
    {
        name: "Lovely",
        description: "she's in love",
        tag: "Original, Comic, Anime, Dreamy",
        price: "4.00",
        image: "Lovely.png",
        packId: 8
    },
    {
        name: "Lady Boss",
        description: "lady sitting on a pile of cash",
        tag: "Original, Comic, Anime, Goofy, Unique",
        price: "4.00",
        image: "LadyBoss.png",
        packId: 8
    },
    {
        name: "Cherry Bomb IV",
        description: "explosive cherry",
        tag: "Original, Comic, Fruit",
        price: "4.00",
        image: "CherryBomb4.png",
        packId: 8
    },
    {
        name: "Arizona Sunset",
        description: "desert sunset",
        tag: "Colorful, Dreamy",
        price: "4.00",
        image: "ArizonaSunset.png",
        packId: 9
    },
    {
        name: "It's a Dry Heat!",
        description: "man sitting in the desert",
        tag: "Unique, Goofy",
        price: "4.00",
        image: "It'sADryHeat.png",
        packId: 9
    },
    {
        name: "Arizona Sunset II",
        description: "desert sunset",
        tag: "Dreamy, Colorful",
        price: "4.00",
        image: "ArizonaSunset2.png",
        packId: 9
    },
    {
        name: "Tucson Sunset",
        description: "sunset in Tucson",
        tag: "Dreamy, Colorful",
        price: "4.00",
        image: "TucsonSunset.png",
        packId: 9
    },
    {
        name: "Arizona Sunset III",
        description: "desert sunset",
        tag: "Dreamy, Colorful",
        price: "4.00",
        image: "ArizonaSunset3.png",
        packId: 9
    },
    {
        name: "Ocotillo Sunset",
        description: "ocotillo oil painting",
        tag: "Dreamy, Colorful, Artsy",
        price: "4.00",
        image: "OcotilloSunset.png",
        packId: 9
    },
    {
        name: "Arizona Sunset IV",
        description: "desert sunset",
        tag: "Dreamy, Colorful",
        price: "4.00",
        image: "ArizonaSunset4.png",
        packId: 9
    },
    {
        name: "Arizona Sunset V",
        description: "desert sunset",
        tag: "Dreamy, Colorful",
        price: "4.00",
        image: "ArizonaSunset5.png",
        packId: 9
    },
    {
        name: "The Plug",
        description: "retro style SP logo",
        tag: "Logo, Retro, Colorful, Artsy",
        price: "3.00",
        image: "ThePlug.png",
        packId: 10
    },
    {
        name: "SP OG Logo",
        description: "OG Sticker Plug logo",
        tag: "Logo, Retro, Colorful, Artsy",
        price: "3.00",
        image: "SPOGLogo.png",
        packId: 10
    },
    {
        name: "SP OG Logo II",
        description: "OG Sticker Plug logo",
        tag: "Logo, Retro, Colorful, Artsy",
        price: "3.00",
        image: "SPOGLogo2.png",
        packId: 10
    },
    {
        name: "SP Tategaki",
        description: "tategaki Sticker Plug logo",
        tag: "Logo, Unique, Colorful, Artsy",
        price: "3.00",
        image: "SPTategaki.png",
        packId: 10
    },
    {
        name: "SP Logo",
        description: "Sticker Plug Logo",
        tag: "Logo, Colorful, Artsy",
        price: "3.00",
        image: "SPLogo.png",
        packId: 10
    },
    
    
    

];

const pack = [
    {
        name: "Cosmos",
        description: "8 space themed stickers",
        price: "25.00",
        image: "Cosmos.png"
    
    },
    {
        name: "Animals",
        description: "8 animal themed stickers",
        price: "25.00",
        image: "Animals.png"

    },
    {
        name: "Originals I",
        description: "8 SP original stickers",
        price: "25.00",
        image: "Originals1.png"
    },
    {
        name: "Aliens",
        description: "8 alien themed stickers",
        price: "25.00",
        image: "Aliens.png"
    },
    {
        name: "Wild Animals",
        description: "8 stickers of animals up to no good",
        price: "25.00",
        image: "WildAnimals.png"
    },
    {
        name: "Originals II",
        description: "8 SP original stickers",
        price: "25.00",
        image: "Originals2.png"
    },
    {
        name: "Desert Animals",
        description: "8 stickers of desert animals",
        price: "25.00",
        image: "DesertAnimals.png"
    },
    {
        name: "Originals III",
        description: "8 SP original stickers",
        price: "25.00",
        image: "Originals3.png"
    },
    {
        name: "Arizona",
        description: "8 Arizona themed stickers",
        price: "25.00",
        image: "Arizona.png"
    },
    {
        name: "PLUG LIFE",
        description: "5 Sticker Plug stickers",
        price: "15.00",
        image: "PlugLife.png"
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




await sequelize.close()
