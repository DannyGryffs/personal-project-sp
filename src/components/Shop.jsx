import { Link } from 'react-router-dom'

function Shop() {
    return (
        <div>
            Here is the Shop Page
            <div>
                <Link to="/stickers">Stickers</Link>
            </div>
            <div>
                <Link to="/packs">Sticker Packs</Link>
            </div>
        </div>
    )
}

export default Shop