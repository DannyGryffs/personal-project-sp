import axios from 'axios'
import { useState, useEffect } from 'react'


function Packs() {

    const [packData, setPackData] = useState([])

        useEffect(() => {
            axios.get('/api/packs')
            .then((response) => {
                setPackData(response.data)
                console.log(response.data)
            })
        }, [])

        const [quantity, setQuantity] = useState(1)
        
        const eachPack = packData.map((pack) => {
            return (
                <div>
                    <div>
                    <h2>{ pack.name }</h2>
                    <h3>{ pack.description }</h3>
                    <br />
                    <h4>${ pack.price }</h4>
                    </div>
                    <button onClick={ ()=>{ quantity > 0 ? setQuantity( quantity - 1 ): null }}>-</button>
                    <input  value={quantity} type='number' min='1' readOnly/>
                    <button onClick={ ()=>{setQuantity( quantity + 1 ) }}>+</button>
                    <br />
                    <button>Add To Cart</button>
                </div>
            )
        })


    return (
        <div>
            { eachPack }
        </div>
    )
}

export default Packs;

            /* options(in divs):

            -build a pack(postMvp)

            -most popular(post)
            (2 random pages)

            -recently added(post)
            (4 packs)

            -all (mvp) 
            {(each pack is displayed, 10 pages displayed)}
            */
