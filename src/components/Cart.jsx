import { useState, useEffect } from 'react'
import axios from 'axios'
import CartItemRow from './CartItemRow';

function Cart() {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios.get('/api/cart')
        .then((response) => {
            // console.log(response.data)
            setCartItems(response.data)
        })
    }, []);

    const eachItem = cartItems.map((item) => {
        return <CartItemRow
            key={item.id}
            cartItem={item}
        />
    })


    return (
        <div className='cartContainer'>
            <table className='table'>
                <thead>
                    <tr>
                        <td className='cartItemsCat'>Name</td>
                        <td className='cartItemsCat'>Item</td>
                        <td className='cartItemsCat'>Qty</td>
                        <td className='cartItemsCat'>Price</td>
                        <td className='cartItemsCat'>Total</td>
                    </tr>
                </thead>
                <tbody>
                    { eachItem }
                </tbody>

            </table>
        </div>
    )  
}

            // <div>
                
            // </div>
            // <section>
            //     <span>
            //         <table id="cartContainer"></table>
            //     </span>
            //     <span>
            //     <button onClick={ ()=>{ quantity > 0 ? setQuantity( quantity - 1 ): null }}>-</button>
            //     <input   type='number' min='1' readOnly/>
            //     <button onClick={ ()=>{setQuantity( quantity + 1 ) }}>+</button>
            //     <br />
            //     </span>
            //     <span>
            //         <button id="removeButton">Remove Item</button> 
            //         {/* replace with trash can icon */}
            //     </span>
            //     <span>
            //     <button>Checkout</button>
            //     </span>
            // </section>
export default Cart