// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminaPaciente }) => {
	return pacientes && pacientes.length > 0 ? (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>
			<h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>

			<p className='text-lg mt-5 text-center mb-10'>
				Administra tus <span className='text-gray-800 font-bold'>Pacientes y Citas</span>
			</p>
			{pacientes.map((paciente) => (
				<Paciente
					key={paciente.id}
					paciente={paciente}
					setPaciente={setPaciente}
					eliminaPaciente={eliminaPaciente}
				/>
			))}
		</div>
	) : (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>
			<h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>

			<p className='text-lg mt-5 text-center mb-10'>
				Comienza a agregar pacientes{' '}
				<span className='text-gray-800 font-bold'>y aparecerán en este lugar</span>
			</p>
		</div>
	);
};

export default ListadoPacientes;
