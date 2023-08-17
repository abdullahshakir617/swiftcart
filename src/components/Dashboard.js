import React from 'react'
import { useState, useEffect } from 'react';
import Dashimg from './Dashimg';
import Spinner from './Spinner';
export default function Dashboard() {

    const [productsArr, setProducts] = useState([])

    const updateProducts = async () => {
        const url = "https://dummyjson.com/products"
        let data = await fetch(url);
        let parsedData = await data.json();

        //This setTimeOut is Rendering the spinner on Logging in.
        setTimeout(setProducts(parsedData.products), 5000);
    }

    let [count, setCount] = useState(0)

    //function to handle nextProduct

    const next = (e) => {
        e.preventDefault();
        if (count < 29)
            setCount((prev) => prev + 1)
    }

    //function to handle PreviousProduct
    const previous = (e) => {
        e.preventDefault();
        if (count > 0)
            setCount((prev) => prev - 1)
        console.log(productsArr[count].images)

    }

    useEffect(() => {
        updateProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (productsArr.length > 0) {

        return (

            <>
                <div style={{ backgroundColor: "bisque" }}>
                    <div className="card container" >
                        <div style={{ display: "flex", width: "100%" }}>

                            <Dashimg productsArr={productsArr[count].images} count={count} />

                            <div className='imgside'>
                                <ul id='brand' className="list-group list-group-flush">
                                    <li className="list-group-item">{`Category : ${productsArr[count].category}`}</li>
                                    <li className="list-group-item">{`Brand : ${productsArr[count].brand}`}</li>
                                    <li className="list-group-item">{`Stock : ${productsArr[count].stock}`}</li>
                                    <li className="list-group-item">{`Price : Rs ${productsArr[count].price} only`}</li>
                                    <li className="list-group-item">{`Discount : ${productsArr[count].discountPercentage}%`}</li>
                                    <li className="list-group-item">{`Rating : ${productsArr[count].rating}`}</li>

                                </ul>

                            </div>

                        </div>
                        <div style={{ display: "contents" }} className='imgbelow'>

                            <div className="card-body ">
                                <h1 style={{ textAlign: "center" }} className="card-title">{productsArr[count].title}</h1>
                                <p style={{ textAlign: "center" }} className="card-text">{productsArr[count].description}</p>
                            </div>
                            <div className="card-body ">
                                <a href="/" className="card-link previous" onClick={previous}>&laquo;Previous</a>
                                <a href="/" className="card-link next " onClick={next}>Next &raquo;</a>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
    }
    else {
        return (
            <>
                <Spinner />
            </>
        )
    }
}
