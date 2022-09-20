/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/Banner.css'

let bannerData = {
    title: 'React',
    desc: 'Magna aliquip dolore elit laborum elit dolore pariatur excepteur amet. Amet ea fugiat proident dolor occaecat ex sunt anim minim ullamco quis qui velit elit. Nulla amet duis veniam nulla nostrud cupidatat nisi in laborum ipsum. Dolor mollit pariatur excepteur magna deserunt nostrud magna duis consectetur labore nostrud elit nisi enim. Fugiat enim esse non proident qui non exercitation amet incididunt laborum reprehenderit pariatur.'
}

function Banner() {
    return (
        <div className='banner-bg'>
            <div className='container'>
                <div className='banner-con'>
                    <div className='banner-text'>
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                        <a href='#' className='banner-btn'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner