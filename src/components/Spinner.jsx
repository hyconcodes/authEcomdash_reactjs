import React, { useEffect } from 'react'
// import Shoe from '../shoe.png'
const Spinner = ({loading}) => {
    const style = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        animation: "spin 1s linear infinite",
        width: "50%",
        height: "50%",
    };

    useEffect(() => {
        const keyframes = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
    }, []);

    return (
        <div loading={loading} className='pt-5 text-center'>
            <img src="shoe.png" style={style} alt="" />
        </div>
    )
}

export default Spinner
