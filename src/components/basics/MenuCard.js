import React from 'react'

function MenuCard({menuData}) {
    return (
        <>
        <section className="main-card--container">
        {menuData.map((currEle)=>{
            return (
            <>
                <div className="card-container" key={currEle.id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{currEle.id}</span>
                            <div className="card-author subtle">{currEle.name}</div>
                            <h2 className="card-title"> {currEle.name}</h2>
                        <span className="card-description subtle">
                        {currEle.description}
                        </span>
                        <div className="card-read">Read</div>
                        </div>
                        <img src={currEle.image} alt="images" className="card-media" />
                        <span className="card-tag  subtle">Order Now</span>
                    </div>
                </div>
            </>
            )
        })}
        </section>
        </>
    )
}

export default MenuCard
