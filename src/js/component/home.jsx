import React, {useState} from "react";
import { Pruebas } from "./pruebas";
import { Experimento } from "./experimento";




//create your first component
const Home = () => {
	const [color, setColorVerde] = useState('selected');
	function selColVerde(){
		setColorVerde()
	}
	return (
		<div className="container d-flex justify-content-center align-items-center">
			<Pruebas/>
			<Experimento/>
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