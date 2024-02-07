import axios from 'axios'
import { useState, useEffect } from 'react'

function Packs() {
    // initializing your states
    const [packData, setPackData] = useState([])
    // const [quantity, setQuantity] = useState(1);

    // use axios to get the data
        useEffect(() => {
            axios.get('/api/packs')
            .then((response) => {
                setPackData(response.data)
            })
        }, [])

        
        
        // const eachSticker = (packStickers) => {
        //     // console.log(packStickers);
        //     return packStickers[0] && packStickers.map((eachSticker) => {
        //         {console.log(eachSticker);}
        //         return (
        //             <img className='packStickers' src={`../../public/stickers/${eachSticker.image}`} alt="" />
        //         )
        //     })
        // }

        // }

// do map to create each individual pack product
        const eachPack = packData.map((pack) => {
            // const background = import(`../../public/stickers/${pack.name}.png`);

            return (
                <Pack
                    key={pack.id}
                    pack={pack}
                />
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

function Pack(props){
    const { pack } = props

    const [quantity, setQuantity] = useState(1);
    const [showPackStickers, setShowPackStickers] = useState(false)
    
    async function movePack(id) {
        const res = await axios.post(`/api/cart/pack/${id}?qty=${quantity}`)
        .catch((error) => {
            console.log(error)
        })

        console.log(res.data);
        alert("Pack added to cart");
    }
    
    
    return (
        <section className='page-container'>
        
            <div key={pack.id} className='packs'>
                <div>
                    <h2 className="packTitleTxt">{ pack.name }</h2>
                    {showPackStickers ? 
                        eachSticker(pack.Stickers): 
                        <img
                        style={{ maxHeight: "500px", cursor: "pointer", transition: "transform 0.3s" }}
                            className='packStickers'
                            src={`../../public/packs/${pack.image}`}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'scale(1.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'scale(1)';
                            }}
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
                <button className="cartBtn" onClick={()=>{movePack(pack.id)}} >Add To Cart</button>
            </div>
        </section>
    )
}



export default Packs;