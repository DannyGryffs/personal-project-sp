import { Link } from 'react-router-dom'

function Shop() {
    return (
        <section className='page-container'>
            <div id="shop">
                <div id='shop-container'>
                    <h2><Link class="shop-links" to="/packs">Shop Packs</Link></h2>
                    <img className="ShopImg" src="../../packs/Originals2.png" alt="AI Artist" />
                    <h2><Link class="shop-links" to="/stickers">Shop Stickers</Link></h2>
                    <img className="ShopImg" src="../../stickers/Celestia.png" alt="Image of alien sticker" />
                    <img className="ShopImg" src="../../stickers/AncientDragon.png" alt="Image of dragon sticker" />
                </div>
            </div>
        </section>
    )
}

export default Shop