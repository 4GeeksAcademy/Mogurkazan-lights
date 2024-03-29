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
		<div className="semaforo container d-flex flex-column justify-content-center align-items-center">
			<Experimento/>
		</div>
	
	);
};

export default Home;
