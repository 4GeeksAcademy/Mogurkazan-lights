
import React, {useState} from "react";

export const Experimento = () => {
    const [shineR, setShineR]=useState(true);
    const [shineY, setShineY]=useState(true);
    const [shineG, setShineG]=useState(true);
    function handleShineRed() {
        setShineR(!shineR);
        setShineY(true);
        setShineG(true);
        
    }
    function handleShineYellow() {
        setShineY(!shineY);
        setShineR(true);
        setShineG(true);
    }
    function handleShineGreen() {
        setShineG(!shineG);
        setShineY(true);
        setShineR(true);
    }
   
    return (
        <>
            <div className="palo"></div>
            <div className="caja d-flex flex-column justify-content-center align-items-center">
                <button className={`semaf ${shineR ? 'custom-green' : 'custom-background'}`} onClick={handleShineRed}>
                    <span className="luz" style={{background: 'red'}}></span></button>
                <button className={`semaf ${shineY ? 'custom-green' : 'custom-background'}`} onClick={handleShineYellow}>
                    <span className="luz" style={{background: 'yellow'}}></span></button>
                <button className={`semaf ${shineG ? 'custom-green' : 'custom-background'}`} onClick={handleShineGreen}>
                    <span className="luz" style={{background: 'green'}}></span></button>
            </div>
        </>
    )
}