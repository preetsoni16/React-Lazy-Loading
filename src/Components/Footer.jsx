import React from 'react'

function Footer() {
    return (
        <div className="container-fluid bg-dark text-light border-top py-4" style={{ borderColor: 'rgba(256, 256, 256, .15) !important' }}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white">© <a href="#">Your Site Name</a>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <p className="m-0 text-white">Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer