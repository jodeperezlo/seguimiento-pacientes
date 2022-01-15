// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from 'react';

const Paciente = ({ paciente, setPaciente, eliminaPaciente }) => {
	const {
		nombreMascota,
		nombrePropietario,
		emailPropietario,
		fechaRegistro,
		sintomasMascota,
		id,
	} = paciente;
	const handleEliminaPaciente = () => {
		const respuesta = confirm('¿Estas seguro de que quieres eliminar el registro?');
		if (respuesta) {
			eliminaPaciente(id);
		}
	};
	return (
		<div className='mx-5 my-4 bg-white shadow-md m-3 px-5 py-10 rounded-md'>
			<p className='font-bold  mb-3 text-gray-700 '>
				Nombre de la mascota: <span className='font-normal'>{nombreMascota}</span>
			</p>
			<p className='font-bold  mb-3 text-gray-700 '>
				Nombre del propietario: <span className='font-normal'>{nombrePropietario}</span>
			</p>
			<p className='font-bold  mb-3 text-gray-700 '>
				Email del propietario: <span className='font-normal'>{emailPropietario}</span>
			</p>
			<p className='font-bold  mb-3 text-gray-700 '>
				Fecha de Registro: <span className='font-normal'>{fechaRegistro}</span>
			</p>
			<p className='font-bold  mb-3 text-gray-700 '>
				Síntomas de la mascota: <span className='font-normal'>{sintomasMascota}</span>
			</p>

			<div className='flex justify-center'>
				<button
					className='bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-sm'
					onClick={() => setPaciente(paciente)}
				>
					Editar
				</button>
				<button
					className='bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-sm ml-5'
					onClick={handleEliminaPaciente}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Paciente;
