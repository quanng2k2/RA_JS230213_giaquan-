import React, { useState } from 'react'

export default function ItemProduct(props) {
    // khai báo ra để truyền data
    const { imageProduct, nameProduct, priceProduct,} = props; 
    // khai báo counter để tăng giảm số lượng
    const [counter, setCounter] = useState(1) 
    // khai báo totalPrice để khi tăng , giảm sẽ cộng hoặc trừ total
    const [totalPrice, setTotalPrice] = useState(priceProduct)
    // 

    const handlePlus = () => {
        setCounter(counter + 1)  
        setTotalPrice((counter + 1) * priceProduct) 
    };

    const handleMinus = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            setTotalPrice((counter - 1) * priceProduct)
        }
    };

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageProduct} className="card-img-top" alt="load" />
                <div className="card-body">
                    <div className='flexNamePrice'>
                        <div><h4 className="card-title">{nameProduct} </h4></div>
                        <div><p> {totalPrice} $ </p> </div>
                    </div>
                </div>
                <div className='flexButtonPro'>
                    <div> <button onClick={handleMinus} id='buttonInterest' className='buttonProduct'> Interest </button></div>
                    <div><span> {counter} </span></div>
                    <div><button onClick={handlePlus} id='buttonAdd' className='buttonProduct'> Add </button></div>
                </div>
            </div>
        </div>
    )
}
