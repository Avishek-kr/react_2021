import React from 'react'
import './style.css'

const Resturant = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">1</span>
                        <div className="card-author subtle">Breakfast</div>
                        <h2 className="card-title"> Maggi</h2>
                    <span className="card-description subtle">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis atque doloremque et quasi dignissimos possimus ipsa autem alias blanditiis.
                    </span>
                    <div className="card-read">Read</div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="images" className="card-media" />

<span className="card-tag  subtle">Order Now</span>
                </div>
            </div>
        </>
    )
}

export default Resturant
