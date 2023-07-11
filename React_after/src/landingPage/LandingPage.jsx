import { Form, Link, useLoaderData, useNavigation } from 'react-router-dom'
import ButtonCustom from '../components/ButtonCustom'
import { useEffect, useState } from 'react'
import Menu from '../components/Menu'

export async function loader({ request }) {
    const url = new URL(request.url)
    const q = url.searchParams.get('q')
    return { q }
}

export default function LandingPage() {
    // const navigation = useNavigation()
    // const { q } = useLoaderData()
    // const searching =
    //     navigation.location &&
    //     new URLSearchParams(navigation.location.search).has('q')
    const listItems = ['Man', 'Woman', 'Kid', 'Explore']
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
                        <input type="search" placeholder="Search" />
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
                    <h1>Learntion</h1>
                    <img
                        className="imgContent"
                        src="src/landingPage/assets/landing_content.gif"
                        alt=""
                    />
                </div>
                <div className="addToCart">
                    <ButtonCustom
                        backgroundColor={'violet'}
                        text={'Add to cart'}
                        type={'submit'}
                        src_img_button={
                            'https://img.icons8.com/?size=1x&id=Ot2P5D5MPltM&format=gif'
                        }
                    />{' '}
                </div>
            </div>
        </div>
    )
}
