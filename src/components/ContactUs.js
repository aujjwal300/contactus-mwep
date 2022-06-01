import React from 'react'
import QueryBox from './QueryBox';

const ContactUs = () => {
    const copyPhone = () => {
        var copyText = 1234567890;
        navigator.clipboard.writeText(copyText);
    
        alert("Copied the text: " + copyText);
    }

    return (
        <div className="container">
            <div className="row row1 align-items-center">
                <div className="col-10 offset-md-2 offset-lg-0 col-lg-6 pl-5">
                    <h1 className="heading">Contact Us</h1>
                    <p className='para'>
                        Interested in program?<br></br>
                        Have a question or  comment?<br></br>
                        Simply fill the form we’ll in touch
                    </p>
                    <div className="box1 row">
                        <div className="col-2">
                            <i className="fa fa-lg fa-phone" />
                        </div>
                        <div className='col-10'>
                            <button onClick={copyPhone} style={{ cursor: 'pointer', background: 'transparent', border: 'none', outline: 'none' }}>
                                1234567890</button>
                        </div>
                    </div>
                    <div className="box1 row">
                        <div className="col-2">
                            <i className="fa fa-lg fa-envelope-o" />
                        </div>
                        <div className='col-10'>
                            <a href="mailto:mwep@gmail.com" className='mail-a'>mwep@gmail.com</a>
                        </div>
                    </div>
                    <div className="box1 row">
                        <div className="col-2">
                            <i className="fa fa-lg fa-map-marker" />
                        </div>
                        <div className='col-10'>LNMIIT</div>
                    </div>

                    <div className="col-12 mt-5">
                        <a href="https://www.facebook.com/" className="box2 btn-facebook" target="_blank" rel="noreferrer"><i className="fa fa-lg fa-facebook-square"/></a>
                        <a href="https://www.instagram.com/" className="box2 btn-danger" target="_blank" rel="noreferrer"><i className="fa fa-lg fa-instagram"/></a>
                        <a href="https://www.twitter.com/" className="box2 btn-twitter" target="_blank" rel="noreferrer"><i className="fa fa-lg fa-twitter"/></a>
                        <a href="https://www.whatsapp.com/" className="box2 btn-success" target="_blank" rel="noreferrer"><i className="fa fa-lg fa-whatsapp" /></a>
                    </div>
                </div>
                <div className="col-11 offset-md-2 offset-lg-0 offset-xl-1 col-md-8 col-lg-6 col-xl-5 pl-5 mt-5 mt-lg-2">
                    <QueryBox />
                </div>
            </div>
        </div>
    )
}

export default ContactUs