import { useState, useEffect } from 'react'
import axios from 'axios'

function Stickers() {
    
    //intialize your state
    const [quantity, setQuantity] = useState(1)
    const [stickersData, setStickersData] = useState([])
     console.log(stickersData)
    // 2. use axios to get data
    useEffect(() => {
        axios.get('/api/stickers')
        .then((response) => {
            setStickersData(response.data)
        })
    }, [])

    //place for functions
    async function moveSticker(id) {
        const res = await axios.post(`/api/cart/sticker/${id}?qty=${quantity}`)
        .catch((error) => {
            console.log(error)
        })

        console.log(res.data);
        alert(res.data);
    }
    
    // 3. do map to create each individual sticker
    const eachSticker = stickersData.map((sticker) => {
        return (
            <Sticker
                key={sticker.id} 
                sticker={sticker}
            />


        )
    })


    // 4. render eachsticker
    return (
        <div>
            <header>


            </header>
            
            { eachSticker }
            each sticker listed, 16 per page 4 pages
        </div>
    )
}
export default Stickers

function Sticker(props) {
    // initialize your states
    const { sticker } = props
    const [quantity, setQuantity] = useState(1)
    
    // function takes in sticker id
    // axios request to save the id in the cart arr in the controller
    // alert user that the sticker was added to the cart
    async function moveSticker() {
        const res = await axios.post(`/api/cart/sticker/${sticker.id}?qty=${quantity}`)
        .catch((error) => {
            console.log(error)
        })

        console.log(res.data);
        alert(res.data);
    }

    console.log(sticker);
    // do the map to create each individual sticker
    return (
        <div id="stickerDisplay">
                <h2 className="headerTxt" >{ sticker.name }</h2>
                <img style={{maxHeight: "225px"}} src={`/stickers/${sticker.image}`} />
                <h3 className="headerTxt" >{ sticker.description }</h3>
                <h4 className="headerTxt" > Tags: { sticker.tag }</h4>
                <h4 className="headerTxt" >${ sticker.price }</h4>
                <button onClick={ ()=>{ quantity > 0 ? setQuantity( quantity - 1 ): null }}>-</button>
                <input  value={quantity} type='number' min='1' readOnly/>
                <button onClick={ ()=>{setQuantity( quantity + 1 ) }}>+</button>
                <br />
                <button onClick={()=>{moveSticker(sticker.id)}} className="headerTxt" >Add To Cart</button>
            </div>
    )
}


