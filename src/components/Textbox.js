import React, { useState } from 'react'

export default function Textbox(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let upperText = text.toUpperCase(); 
        setText(upperText)
    }
    const handleDownClick = () => {
        let lowerText = text.toLowerCase(); 
        setText(lowerText)
    }
    const [text, setText] = useState('Hello World!');
    return (
        <>
            <form>
                <h2>{props.heading}</h2>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className='py-3'>Entering the text</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"  value={text} onChange={handleOnChange}></textarea>
                    </div>

                    <button className="btn btn-primary my-4" type="button" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-4 my-4" type="button" onClick={handleDownClick}>Convert to Lowercase</button>

                </div>
            </form >

        </>
    )
}
