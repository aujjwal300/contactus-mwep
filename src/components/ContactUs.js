import React from 'react'
import QueryBox from './QueryBox';

const ContactUs = () => {
    return (
        <div className="container">
            <div className="row row1 align-items-center">
                <div className="col-10 offset-lg-0 col-lg-6 pl-5">
                    <h1 className="heading">Contact Us</h1>
                    <p className='para'>
                        Interested in program?<br></br>
                        Have a question or  comment?<br></br>
                        Simply fill the form we’ll in touch
                    </p>
                    <div className="box1">
                        <i className="fa fa-lg fa-phone"/>
                        <input placeholder='Mobile No.'/>
                    </div>
                    <div className="box1">
                        <i className="fa fa-lg fa-envelope-o"/>
                        <input placeholder='Email'/>
                    </div>
                    <div className="box1">
                        <i className="fa fa-lg fa-map-marker"/>
                        <input placeholder='Address'/>
                    </div>

                    <div className="col-12 mt-5">
                        <a href="https://www.facebook.com/" className="box2 btn-facebook" target="_blank"><i className="fa fa-lg fa-facebook-square"/></a>
                        <a href="https://www.instagram.com/" className="box2 btn-danger" target="_blank"><i className="fa fa-lg fa-instagram"/></a>
                        <a href="https://www.twitter.com/" className="box2 btn-twitter" target="_blank"><i className="fa fa-lg fa-twitter"/></a>
                        <a href="https://www.whatsapp.com/" className="box2 btn-success" target="_blank"><i className="fa fa-lg fa-whatsapp" /></a>
                    </div>
                </div>
                <div className="col-11 offset-md-0 offset-xl-1 col-md-8 col-lg-6 col-xl-5 pl-5 mt-5 mt-lg-2">
                    <QueryBox />
                </div>
            </div>
        </div>
    )
}

export default ContactUs