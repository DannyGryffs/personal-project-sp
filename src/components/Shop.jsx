import { Link } from 'react-router-dom'

function Shop() {
    return (
        <div>
            <h2>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Here's the Shop page /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</h2>
            <div>
                <h2><Link class="headerTxt" to="/stickers">Stickers</Link></h2>
            </div>
            <div>
               <h2><Link class="headerTxt" to="/packs">Packs</Link></h2>
            </div>
        </div>
    )
}

export default Shop