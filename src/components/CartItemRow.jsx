import React from 'react'
import Cart from './Cart'
import "../index.css"
import axios from 'axios'

export default function CartItemRow(props) {
  const { cartItem, setCartItems } = props


  // console.log(props.cartItem)

  // qty handler func
  // takes in type as a param
  // make a server request for update 
  // passing the type and the item id
  // print the response

  async function updateQty(type) {
    console.log(type);
    const res = await axios.put(`/api/cart/itemQty/${cartItem.id}/?type=${type}`)
    .catch((error) => {
      console.log(error)
      return
    });

    // console.log(res.data);
    setCartItems(res.data)
    // alert(res.data);
  }
  
  async function removeItem() {
    const res = await axios.delete(`/api/cart/removeI/${cartItem.id}`)
    .catch((error) => {
      console.log(error)
      return
    });

    // console.log(res.data);
    setCartItems(res.data)
    // alert(res.data);
  }

  return (cartItem.Sticker ?
    <tr>
      <td>
        <button onClick={removeItem}>Remove</button>
      </td>
      <td>
        <h3>{ cartItem.Sticker.name } - Sticker</h3>
      </td>
      <td>
          <img className='img'  src={`../../public/stickers/${cartItem.Sticker.image}`} />
        <h3>{ cartItem.Sticker.description }</h3>
      </td>
      <td className='qtyBtns'>
        <button onClick={()=> updateQty('dec')} >-</button>
        <h3 className='qty' > { cartItem.quantity } </h3>
        <button onClick={()=> updateQty('inc')} >+</button>
      </td>
      <td>
        <h3 className='price'>${ cartItem.Sticker.price }</h3>
      </td>
    </tr>:


    <tr>
      <td>
        <button onClick={removeItem}>Remove</button>
      </td>
      <td>
        <h3>{ cartItem.Pack.name } - Pack</h3>
      </td>
      <td>
        <img className='img' src={`../../public/packs/${cartItem.Pack.image}`} />
      </td>
      <td className='qtyBtns'>
        <button onClick={()=> updateQty('dec')} className='qtyBtn'>-</button>
        <h3 className='qty' >  { cartItem.quantity }  </h3>
        <button onClick={()=> updateQty('inc')} className='qtyBtn'>+</button>
      </td>
      <td>
        <h3 className='price' >${ cartItem.Pack.price }</h3>
      </td>
      {/* <td>
        <h3>{ cartItem.Pack.id }</h3>
      </td> */}
    </tr>
  )
}

//TODO

//when sending items to cart

//needs to check the cart items and see if theres a matching id of
//the item being added, if theres a matching id,
//add to that items quantity
//if theres no matching id create new cart item


////////////////////////////////////////////////////////////////////////


//write an orm command(findAll)that grabs the id from the cartItem
//this will return an array **
//then take that array (cartI) and set a conditional

//if Arr.length === 0 => run the create command,
//else if arr.length === 1 or more, run a new command 
//new command increases the qty by # of items added  


