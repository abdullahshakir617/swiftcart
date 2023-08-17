import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'


export default function Dashimg(props) {

    const imgUrl = props.productsArr

    console.log(imgUrl.length)

    const [imgNum, setImgNum] = useState(0)
    const [isDisabled, setIsDisabled] = useState(0)
    const [isPrevDisabled, setIsPrevDisabled] = useState(0)


    const nextSlide = (e) => {
        e.preventDefault();

        if (imgNum < imgUrl.length - 1) {
            setImgNum((item) => item + 1)
        }
    }
    const prevSlide = (e) => {
        e.preventDefault();
        if (imgNum > 0 && imgUrl.length > 0) {
            setImgNum((item) => item - 1)
        }
    }
    useEffect(() => {
        if (imgNum > imgUrl.length - 2) {
            setIsDisabled(1)
        }
        else {
            setIsDisabled(0)
        }

        if (imgNum === 0) {
            setIsPrevDisabled(1)
        }
        else {
            setIsPrevDisabled(0)

        }
    }, [imgNum, imgUrl.length])

    return (
        <>

            <div className="container fill" style={{ display: "flex" }}>
                <div className='buttons' style={{ marginTop: "auto" }}>
                    <button disabled={isPrevDisabled} onClick={prevSlide}>Backward</button>
                </div>
                <img src={imgUrl[imgNum]} style={{ border: "2px solid black" }} alt="..." />
                <div className='buttons' style={{ marginTop: "auto" }}>
                    <button disabled={isDisabled} onClick={nextSlide}>Forward</button>
                </div>
            </div>
        </>
    )
}
