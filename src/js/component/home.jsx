import React, {useState} from "react";
import { Pruebas } from "./pruebas";
import { Experimento } from "./experimento";
import { Bonus } from "./bonus";




//create your first component
const Home = () => {
	return (
		<div className="semaforo container d-flex flex-column justify-content-center align-items-center">
			<Experimento/>
		</div>
	
	);
};

export default Home;
