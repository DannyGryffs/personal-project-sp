import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

// const stickers = ["zebraSpagetti.png", "cherryBomb.png"]

const logofile = ["icon.png"]

function App() {

  // const eachStickers = stickers.map((sticker) => {
  //   return <img  style={{maxHeight: "200px"}} src={`../public/stickers/${sticker}`} />
  // }) 

  const logo = logofile.map((logo) => {
    return <img style={{maxHeight: "75px"}} src={`../public/logo/${logo}`} />
  })

  return (
    <>
    <header>
        <div id="header"> 
        { logo }
          <h4>
              <Link to="/">Home</Link>
          </h4>
          <h4>
            <Link to="/about">About</Link>
          </h4>
          <h4>
            <Link to="/shop">Shop</Link>
          </h4>
          <h4>
            <Link to="/cart">Cart(icon)</Link>
          </h4>
        </div>
    </header>
    
      {/* <div>
        { eachStickers }
      </div>  */}
    <Outlet/>
    </>
  )
}

export default App
