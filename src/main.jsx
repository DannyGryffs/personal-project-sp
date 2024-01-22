import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Stickers from './components/Stickers.jsx'
import Packs from './components/Packs.jsx'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Home/>}/>,
      <Route path="/shop" element={<Shop/>}/>,
      <Route path="/stickers" element={<Stickers/>}/>,
      <Route path="/packs" element={<Packs/>}/>,
      <Route path="/about" element={<About/>}/>,
      <Route path="/cart" element={<Cart/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
