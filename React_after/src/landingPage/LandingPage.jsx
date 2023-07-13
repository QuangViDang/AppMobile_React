import { Link } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import Menu from '../components/Menu'
import './style.scss'
import SlideContent from '../components/SlideContent'
import { useState } from 'react'

export default function LandingPage() {
    const [indexAds, setIndexAds] = useState(0)
    const slidesImgAds = [
        { id: 0, title: 'One', url: 'src/landingPage/assets/Content1.gif' },
        { id: 1, title: 'Two', url: 'src/landingPage/assets/Content2.gif' },
        { id: 2, title: 'Three', url: 'src/landingPage/assets/Content3.png' },
    ]

    const items = [
        { id: 1, name: 'Man', link: 'abc/' },
        { id: 2, name: 'Woman', link: 'abc/' },
        { id: 3, name: 'Kid', link: 'abc/' },
        { id: 4, name: 'Explore', link: 'abc/' },
    ]

    return (
        <div id="landing">
            <div className="backToHome">
                <Link to={`/`}>Back to Root</Link>
            </div>

            <div id="landingContent">
                <div id="landingHeader">
                    <div className="landingHeader__left">
                        <Menu
                            items={items}
                            link_icon_menu={'src/landingPage/assets/Logo.gif'}
                        />
                    </div>
                    <div className="landingHeader__right">
                        <input id='search_shop' type="search" placeholder="Search" />
                        <ButtonCustom
                            text={'Shop Now'}
                            type={'submit'}
                            img_show={'none'}
                            src_img_button={
                                'https://img.icons8.com/?size=1x&id=jGMSgPq8JnAr&format=gif'
                            }
                        />{' '}
                    </div>
                </div>

                <div id="landingBody">
                    <h2>Learntion</h2>
                    <h1>Learntion</h1>
                    <SlideContent
                        slides={slidesImgAds}
                        indexAds={indexAds}
                        onChangeIndexAds={(indexAds) => {
                            setIndexAds(indexAds)
                        }}
                    />
                    <h2>Learntion</h2>
                </div>

                <div className="landingFooter">
                    <div className="addToCart">
                        <ButtonCustom
                            text={'Add to cart'}
                            type={'submit'}
                            src_img_button={
                                'https://img.icons8.com/?size=1x&id=Ot2P5D5MPltM&format=gif'
                            }
                        />
                    </div>
                    <div className="dotsStyle">
                        {slidesImgAds.map((value, index) => (
                            <button
                                className={
                                    value.id === indexAds ? 'button-glow' : ''
                                }
                                key={index}
                                onClick={() => {
                                    // console.log('id', value.id === indexAds)
                                    return setIndexAds(value.id)
                                }}
                            >
                                &#9865;
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
