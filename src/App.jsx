import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

// const stickers = ["zebraSpagetti.png", "cherryBomb.png"]

function App() {

  // const eachStickers = stickers.map((sticker) => {
  //   return <img  style={{maxHeight: "200px"}} src={`../public/stickers/${sticker}`} />
  // }) 

  // const logo = logofile.map((logo) => {
  //   return 
  // })

  return (
    <>
    {/* <header id="header"> */}
        <div id="header">
          <img style={{maxHeight: "75px"}} src={`../public/logo/icon.png`} />
          <h4>
              <Link className="headerTxt" to="/">Home</Link>
          </h4>
          <h4>
            <Link className="headerTxt" to="/about">About</Link>
          </h4>
          <h4>
            <Link className="headerTxt" to="/shop">Shop</Link>
          </h4>
          <h4>
            <Link className="headerTxt" to="/cart">Cart(icon)</Link>
          </h4>
        </div>
    {/* </header> */}
    
      {/* <div>
        { eachStickers }
      </div>  */}
    <Outlet/>
    </>
  )
}

export default App
