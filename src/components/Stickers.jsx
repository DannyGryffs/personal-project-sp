import { useState, useEffect } from 'react'
import axios from 'axios'

function Stickers() {

    const [stickersData, setStickersData] = useState([])

    useEffect(() => {
        axios.get('/api/stickers')
        .then((response) => {
            setStickersData(response.data)
        })
    }, [])


    const eachSticker = stickersData.map((sticker) => <Sticker
        sticker={sticker}
    />)


    console.log(stickersData);
    return (
        <div>
            <header>


            </header>
            
            { eachSticker }
            each sticker listed, 16 per page 4 pages
        </div>
    )
}

function Sticker(props) {
    const { sticker } = props

    const [quantity, setQuantity] = useState(1)

    // function takes in sticker id
    // axios request to save the id in the cart arr in the controller
    // alert user that the sticker was added to the cart
async function moveStickers(id) {
    const res = await axios.post(`/api/cart/sticker/${id}?qty=${quantity}`)
    .catch((error) => {
        console.log(error)
    })

    console.log(res.data);
}


    console.log(sticker);
    return (
        <div id="stickerDisplay">
            <h2>{ sticker.name }</h2>
            <img style={{maxHeight: "225px"}} src={`/stickers/${sticker.image}`} />
            <h3>{ sticker.description }</h3>
            <h4>{ sticker.tag }</h4>
            <h4>${ sticker.price }</h4>
            <button onClick={ ()=>{ quantity > 0 ? setQuantity( quantity - 1 ): null }}>-</button>
            <input  value={quantity} type='number' min='1' readOnly/>
            <button onClick={ ()=>{setQuantity( quantity + 1 ) }}>+</button>
            <br />
            <button >Add To Cart</button>
        </div>
    )
}

export default Stickers