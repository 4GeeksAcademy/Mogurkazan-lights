import React, {useState} from "react";
import { Pruebas } from "./pruebas";




//create your first component
const Home = () => {
	const [color, setColorVerde] = useState('selected');
	function selColVerde(){
		setColorVerde()
	}
	return (
		<div className="container d-flex justify-content-center align-items-center">
			<button onClick={selColVerde}>Verde</button>
			<button onClick={selColVerde}>Amarillo</button>
			<button onClick={selColVerde}>Rojo</button>
			<Pruebas/>
		</div>
	
	);
};

export default Home;
//definir 1 componente
//importar los useState
//definir 3 elementos button (las luces)
//
//
//
//
//
//
//
//