import React, { useEffect, useState } from 'react'
import '../landingPage/style.scss'

export default function SlideContent({
    slides,
    indexAds,
    onChangeIndexAds = () => {},
}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        setCurrentIndex(indexAds)
    }, [indexAds])

    // console.log(currentIndex)
    const goToPrevious = () => {
        const isFirst = currentIndex === 0
        const newIndexClick = isFirst ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndexClick)
        // console.log(newIndexClick)
        onChangeIndexAds(newIndexClick)
    }
    const goToNext = () => {
        const isLast = currentIndex === slides.length - 1
        const newIndexClick = isLast ? 0 : currentIndex + 1
        setCurrentIndex(newIndexClick)
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
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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
