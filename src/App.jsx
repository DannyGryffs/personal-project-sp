import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

// const stickers = ["zebraSpagetti.png", "cherryBomb.png"]

function App() {
  // const [showTags, setShowTags] = useState(false);

  
  // function changeSpan() {
  //   setShowTags(true)
  // }

  return (
    <>
        <div id="header">
          <img id="icon" style={{maxHeight: "75px"}} src={`/logo/icon.png`} />
          
            <h4 className='nav'>
                <Link className="headerTxt" to="/">Home</Link>
            </h4>
            <h4 className='nav'>
              <Link className="headerTxt" to="/about">About</Link>
            </h4>
            <h4 className='nav'>
              <Link className="headerTxt" to="/shop">Shop</Link>
            </h4>
            <h4 className='nav'>
              <Link className="headerTxt" to="/cart">Cart</Link>
            </h4>
          
        </div>
    
      {/* <div>
        { eachStickers }
      </div>  */}
    <Outlet/>
    </>
  )
}

export default App
