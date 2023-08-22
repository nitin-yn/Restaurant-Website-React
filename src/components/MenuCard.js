import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {
                    menuData.map((curElem) => {
                        const { id, name, category, image, description, price } = curElem;
                        return (
                            <>
                                <div className='card-container' key={id}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>{id}</span>
                                            <span className='card-author subtile'>{category}</span>
                                            <h2 className='card-title'>{name}</h2>
                                            <h1 className='card-title-price'>{price}</h1>
                                            <span className='card-description subyle'>
                                                {description}
                                            </span>
                                            <div className='card-read'>Read</div>
                                            <div>
                                                <img src={image} alt='image' className='card-media' />

                                                <span className='card-tag subtle'>Order Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MenuCard
