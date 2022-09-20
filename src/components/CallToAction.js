/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/CallToAction.css'
import { FiCode } from 'react-icons/fi'
function CallToAction() {
    return (
        <div className='cta-bg'>
            <div className='overlay'></div>
            <div className='container'>
                <div className='cta-text'>
                    <FiCode className='FiCode' />
                    <h2>We're react dev team</h2>
                    <p>Exercitation deserunt et velit aliquip pariatur. Et veniam do veniam do quis do veniam aute aliquip minim. Dolor minim minim officia fugiat est ex non tempor id. Cupidatat eu occaecat deserunt veniam laboris commodo qui velit dolore cupidatat magna officia. Sit non laboris sint quis magna consequat in ut cupidatat consequat laboris.</p>
                    <a href='#' className='cta-btn'>get to know</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction