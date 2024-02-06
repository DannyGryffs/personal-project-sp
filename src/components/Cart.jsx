import { useState, useEffect } from 'react'
import axios from 'axios'
import CartItemRow from './CartItemRow';
import { Table } from 'react-bootstrap'

function Cart() {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        axios.get('/api/cart')
        .then((response) => {
            // console.log('Cart useEffect response');
            // console.log(response.data)
            setCartItems(response.data)
        })
    }, []);

    const eachItem = cartItems.map((item) => {
        return <CartItemRow
            key={item.id}
            cartItem={item}
            setCartItems={setCartItems}
        />
    })

    function itemCount(){
        const sum = 0;
        // loops through cartitems
        for (let i = 0; i < cartItems.length; i++){
            
        }
        //grab qty
        //add to sum 
        //rtn syn 
    }

    return (
        <section className='page-container'>
            <div className='cartContainer'>
                <Table className='table'>
                    <thead>
                        <tr>
                            <td></td>
                            <td className='cartItemsCat'>Name</td>
                            <td className='cartItemsCat'>Item</td>
                            <td className='cartItemsCat'>Qty</td>
                            <td className='cartItemsCat'>Price</td>
                            {/* <td className='cartItemsCat'>Total</td> */}
                        </tr>
                    </thead>
                    <tbody>
                        { eachItem }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>item count</th>
                            <th>subtotal</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </section>
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