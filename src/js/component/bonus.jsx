
import React, {useState, useEffect} from "react";

export const Bonus = () => {
    const [shineR, setShineR]=useState(true);
    const [shineY, setShineY]=useState(true);
    const [shineG, setShineG]=useState(true);
    const [currentColor, setCurrentColor] = useState('red');
    useEffect(() => {
        const intervalId = setInterval(() => {
            switch (currentColor) {
                case 'red':
                    setShineR(false);
                    setShineY(true);
                    setCurrentColor('yellow');
                    setTimeout(() => {
                        setShineY(false);
                        setShineG(true);
                        setCurrentColor('green');
                    }, 10000); // Parpadeo de la luz amarilla durante 10 segundos
                    break;
                case 'yellow':
                    setShineY((prevShineY) => !prevShineY);
                    break;
                case 'green':
                    setShineG(false);
                    setShineR(true);
                    setCurrentColor('red');
                    break;
                default:
                    break;
            }
        }, 1000); // Cambio de luz cada segundo

        return () => clearInterval(intervalId);
    }, [currentColor]);
    return (
        <>
            <div className="palo"></div>
            <div className="caja d-flex flex-column justify-content-center align-items-center">
                <button className={`semaf ${shineR ? 'custom-green' : 'custom-background'}`}>
                    <span className="luz" style={{background: 'red'}}></span></button>
                <button className={`semaf ${shineY ? 'custom-green' : 'custom-background'}`}>
                    <span className="luz" style={{background: 'yellow'}}></span></button>
                <button className={`semaf ${shineG ? 'custom-green' : 'custom-background'}`}>
                    <span className="luz" style={{background: 'green'}}></span></button>
            </div>
        </>
    )
}