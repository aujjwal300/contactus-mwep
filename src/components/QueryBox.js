import React from 'react';

const QueryBox = () => {
    return (
        <div className='container box3'>
            <div className="row pt-5">
                <div className="offset-1 col-10">
                    <h3 className='text3'>Your Name</h3>
                    <div className='input-icons'>
                        <i class="fa fa-user-o fa-lg"></i>
                        <input type="text" className='input1'/>
                    </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="offset-1 col-10">
                    <h3 className='text3'>Email</h3>
                    <div className='input-icons'>
                        <i class="fa fa-envelope-o fa-lg"></i>
                        <input type="email" className='input1'/>
                    </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="offset-1 col-10">
                    <h3 className='text3'>Message</h3>
                    <textarea className='input2' name="message" id="" placeholder="Message" cols="30" rows="4"></textarea>
                </div>
            </div>
            <div className="row pt-4">
                <div className="offset-7 col-4">
                    <button className='input3'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default QueryBox;