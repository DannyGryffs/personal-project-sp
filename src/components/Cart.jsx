function Cart() {
    return (
        <div>
            <div>
                <h2>////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Here's the Cart page /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////</h2>
            </div>
            <section>
                <span>
                    <button id="removeButton">Remove Item</button> 
                    {/* replace with trash can icon */}
                </span>
                <span>
                    <table id="cartContainer"></table>
                </span>
                <span>
                <button onClick={ ()=>{ quantity > 0 ? setQuantity( quantity - 1 ): null }}>-</button>
                <input   type='number' min='1' readOnly/>
                <button onClick={ ()=>{setQuantity( quantity + 1 ) }}>+</button>
                <br />
                <button>Checkout</button>
                </span>
            </section>
        </div>
    )
}

export default Cart