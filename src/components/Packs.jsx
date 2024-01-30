import axios from 'axios'
import { useState, useEffect } from 'react'

function Packs() {
    // initializing your states
    const [packData, setPackData] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [showPackStickers, setShowPackStickers] = useState(false)

    // use axios to get the data
        useEffect(() => {
            axios.get('/api/packs')
            .then((response) => {
                setPackData(response.data)
            })
        }, [])

        async function movePack(id) {
            const res = await axios.post(`/api/cart/pack/${id}?qty=${quantity}`)
            .catch((error) => {
                console.log(error)
            })
    
            console.log(res.data);
            alert(res.data);
        }
        
        const eachSticker = (packStickers) => {
            // console.log(packStickers);
            return packStickers[0] && packStickers.map((eachSticker) => {
                {console.log(eachSticker);}
                return (
                    <img className='packStickers' src={`../../public/stickers/${eachSticker.image}`} alt="" />
                )
            })
        }

        // }

// do map to create each individual pack product
        const eachPack = packData.map((pack) => {

            // const background = import(`../../public/stickers/${pack.name}.png`);

            return (
                <div key={pack.id} className='pack'>
                    {/* {console.log(pack)} */}
                    <div>
                    <h2 className="titleTxt" >{ pack.name }</h2>
                    {showPackStickers ? 
                        eachSticker(pack.Stickers): 
                        // <div>
                        //     {/* <img className="packRound" src={`../../public/stickers/${pack.name}.png`} alt="" /> */}
                        // </div>
                        <img className='packStickers' src={`../../public/packs/${pack.image}`} 
                        //  onClick={() => setShowPackStickers(true)}
                        />
                    }
                    <h3 className="headerTxt" >{ pack.description }</h3>
                    <br />
                    <h4 className="headerTxt" >${ pack.price }</h4>
                    </div>
                    <div>
                    <button onClick={ ()=>{ quantity > 0 ? setQuantity( quantity - 1 ): null }}>-</button>
                    <input  value={quantity} type='number' min='1' readOnly/>
                    <button onClick={ ()=>{setQuantity( quantity + 1 ) }}>+</button>
                    </div>
                    <br />
                    <button onClick={()=>{movePack(pack.id)}} className="headerTxt" >Add To Cart</button>
                </div>
            )
        })

// 4. render each pack
// console.log(packData);
    return (
        <div>
            { eachPack }
        </div>
    )
}



export default Packs;