import React from 'react'
import Cart from './Cart'
import "../index.css"

export default function CartItemRow(props) {
  const { cartItem } = props

  console.log(props.cartItem)

  // qty handler func
  // takes in type as a param
  // make a server request for update 
  // passing the type and the item id
  // print the response

  function qtyHandler(type) {
    axios.put('')
  }


  return (cartItem.Sticker ?
    <tr>
      <td>
        <h3>{ cartItem.Sticker.name } Sticker</h3>
      </td>
      <td>
          <img className='img'  src={`../../public/stickers/${cartItem.Sticker.image}`} />
        <h3>{ cartItem.Sticker.description }</h3>
      </td>
      <td className='qtyBtns'>
        <button >-</button>
        <h3 className='qty' > { cartItem.quantity } </h3>
        <button >+</button>
      </td>
      <td>
        <h3 className='price'>${ cartItem.Sticker.price }</h3>
      </td>
    </tr>:


    <tr>
      <td>
        <h3>{ cartItem.Pack.name } Pack</h3>
      </td>
      <td>
        <img className='img' src={`../../public/stickers/${cartItem.Pack.name}.png`} />
      </td>
      <td className='qtyBtns'>
        <button className='qtyBtn'>-</button>
        <h3 className='qty' >  { cartItem.quantity }  </h3>
        <button className='qtyBtn'>+</button>
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


