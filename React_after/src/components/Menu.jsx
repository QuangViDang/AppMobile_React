import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu({ link_icon_menu, items }) {
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        const handleBody = (event) => {
            if (event.target.closest('.menu-container')) {
                return
            }
            setShowMenu(false)
        }
        document.body.addEventListener('click', handleBody)
        return () => {
            document.body.addEventListener('click', handleBody)
        }
    }, [])
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    const toggleMenu = () => {}
    return (
        <div className="menu-container">
            <div className="menu-toggle" onClick={toggleMenu}>
                <img
                    src={link_icon_menu}
                    alt=""
                    className="menu-icon"
                    onClick={handleMenu}
                />
            </div>
            <ul className={showMenu ? 'menu' : 'menu hide'}>
                {items.map((item, index) => (
                    <Link to={item.link} className='item' key={index}>{item.name}</Link>
                ))}
            </ul>
        </div>
    )
}
