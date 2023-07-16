import React, { useEffect, useState } from 'react'
import '../landingPage/style.scss'

export default function SlideContent({
    slides,
    indexAds,
    onChangeIndexAds = () => {},
}) {
    useEffect(() => {
        onChangeIndexAds(indexAds)
    }, [indexAds])

    const goToPrevious = () => {
        console.log(indexAds)
        const isFirst = indexAds === 0
        const newIndexClick = isFirst ? slides.length - 1 : indexAds - 1
        onChangeIndexAds(newIndexClick)
    }
    const goToNext = () => {
        const isLast = indexAds === slides.length - 1
        const newIndexClick = isLast ? 0 : indexAds + 1
        onChangeIndexAds(newIndexClick)
    }

    return (
        <div className="imgAds">
            <img
                onClick={goToPrevious}
                className="leftArrowStyles iconArrow"
                src="https://img.icons8.com/?size=1x&id=37353&format=png"
                alt=""
            />
            <div
                className="imgContent"
                style={{ backgroundImage: `url(${slides[indexAds].url})` }}
            ></div>
            <img
                onClick={goToNext}
                className="rightArrowStyles iconArrow"
                src="https://img.icons8.com/?size=1x&id=37353&format=png"
                alt=""
            />
        </div>
    )
}
