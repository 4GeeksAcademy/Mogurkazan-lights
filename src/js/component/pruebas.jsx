import React, {useState} from "react";

export const Pruebas = () => {
    const [redBackground, setRedBackground] = useState('black')
    const [yellowBackground, setYellowBackground] = useState('black')
    const [greenBackground, setGreenBackground] = useState('black')
    function redBack(){
        if(redBackground == 'black'){
            setRedBackground('grey')
            setGreenBackground('black')
            setYellowBackground('black')
        }else {
            setRedBackground('black')
        }
    }
    function yellowBack(){
        if(yellowBackground == 'black'){
            setYellowBackground('grey')
            setGreenBackground('black')
            setRedBackground('black')
        }else {
            setYellowBackground('black')
        }
    }
    function greenBack(){
        if(greenBackground == 'black'){
            setGreenBackground('grey')
            setRedBackground('black')
            setYellowBackground('black')
        }else {
            setGreenBackground('black')
        }
    }
    return (
        <>
            <button onClick={redBack} style={{background: redBackground}} className="semaf">
                <span style={{background: 'red'}} className="luz"></span>
            </button>
            <button onClick={yellowBack} style={{background: yellowBackground}} className="semaf">
                <span style={{background: 'yellow'}} className="luz"></span>
            </button>
            <button onClick={greenBack} style={{background: greenBackground}} className="semaf">
                <span style={{background: 'green'}} className="luz"></span>
            </button>
        </>
    )
}