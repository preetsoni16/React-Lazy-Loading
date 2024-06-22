import React, { lazy, Suspense } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Home() {

    const Service = lazy( () => import("./Service"))

    return (
        <>
        <Header title="Admin Login" />
         {/* Contact Start */}
         <div className="container-fluid py-5">
         <div className="container py-5">
             <div className="d-flex justify-content-center">
                 <div className="col-lg-8">
                     <div className="contact-form-new bg-light p-4 p-lg-5">
                         <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Admin Login</h6>
                         <h1 className="mb-4">Admin Login</h1>
                         <div id="success" />
                         <form name="sentMessage" id="contactForm" noValidate="novalidate">
                             <div className="form-row">
                                 
                                 <div className="col-sm-6 control-group">
                                     <input type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                     <p className="help-block text-danger" />
                                 </div>
                             </div>
                             <div className="control-group">
                                 <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Password" required="required" data-validation-required-message="Please enter a subject" />
                                 <p className="help-block text-danger" />
                             </div>
                            
                             <div>
                                 <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">
                                     Login</button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     {/* Contact End */}

        <Suspense fallback={<div>Loading...</div>}>
            <Service />
        </Suspense>

     <Footer />
     </>
    )
}


export default Home