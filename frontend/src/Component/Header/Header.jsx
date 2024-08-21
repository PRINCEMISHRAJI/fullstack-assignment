import React from 'react'

function Header() {
    return (
        <header>
            <div className="logo">
                {/* Logo */}
            </div>
            <div className='title'>Abstract</div>
            <div className='topic'> | Help Center</div>
            <button className="submit-request">Submit a request</button>
        </header>
    )
}

export default Header