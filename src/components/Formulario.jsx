// Copyright (c) 2021 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useEffect, useState } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
	const [nombreMascota, setNombreMascota] = useState('');
	const [nombrePropietario, setNombrePropietario] = useState('');
	const [emailPropietario, setEmailPropietario] = useState('');
	const [fechaRegistro, setFechaRegistro] = useState('');
	const [sintomasMascota, setSintomasMascota] = useState('');
	const [error, setError] = useState(false);

	const generaId = () => {
		return Math.random().toString(36).substr(2) + new Date().getTime().toString(36);
	};

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombreMascota(paciente.nombreMascota);
			setNombrePropietario(paciente.nombrePropietario);
			setEmailPropietario(paciente.emailPropietario);
			setFechaRegistro(paciente.fechaRegistro);
			setSintomasMascota(paciente.sintomasMascota);
		}
	}, [paciente]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			[
				nombreMascota,
				nombrePropietario,
				emailPropietario,
				fechaRegistro,
				sintomasMascota,
			].includes('')
		) {
			setError(true);
			return;
		}

		setError(false);
		const objectoPaciente = {
			nombreMascota,
			nombrePropietario,
			emailPropietario,
			fechaRegistro,
			sintomasMascota,
		};

		if (paciente.id) {
			objectoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map((pacienteState) =>
				pacienteState.id === paciente.id ? objectoPaciente : pacienteState
			);
			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {
			objectoPaciente.id = generaId();
			setPacientes([...pacientes, objectoPaciente]);
		}

		setNombreMascota('');
		setNombrePropietario('');
		setEmailPropietario('');
		setFechaRegistro('');
		setSintomasMascota('');
	};

	return (
		<div className='md:w-1/2 lg:2/5 mx-5'>
			<h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

			<p className='text-lg mt-5 text-center mb-10'>
				Agrega pacientes y <span className='text-gray-800 font-bold'>Adminístralos</span>
			</p>

			<form
				className='bg-white shadow-md rounded-md py-10 px-5 mb-10'
				onSubmit={handleSubmit}
			>
				{error && (
					<Error>
						<strong className='font-bold'>Error:</strong>
						<span className='block sm:inline'>Todos los campos son obligatorios</span>
					</Error>
				)}

				<div className='mb-5'>
					<label htmlFor='nombreMascota' className='block text-gray-700 font-bold'>
						Nombre de la mascota:
					</label>
					<input
						type='text'
						id='nombreMascota'
						placeholder='Escribe el nombre de tu mascota'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={nombreMascota}
						onChange={(e) => setNombreMascota(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='nombrePropietario' className='block text-gray-700 font-bold'>
						Nombre del propietario:
					</label>
					<input
						type='text'
						id='nombrePropietario'
						placeholder='Escribe el nombre del propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={nombrePropietario}
						onChange={(e) => setNombrePropietario(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='emailPropietario' className='block text-gray-700 font-bold'>
						Email del propietario:
					</label>
					<input
						type='email'
						id='emailPropietario'
						placeholder='Escribe el email del propietario'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={emailPropietario}
						onChange={(e) => setEmailPropietario(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='fechaRegistro' className='block text-gray-700 font-bold'>
						Fecha de registro:
					</label>
					<input
						type='date'
						id='fechaRegistro'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={fechaRegistro}
						onChange={(e) => setFechaRegistro(e.target.value)}
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='sintomasMascota' className='block text-gray-700 font-bold'>
						Síntomas de la mascota:
					</label>
					<textarea
						id='sintomasMascota'
						placeholder='Escribe los síntomas de la mascota'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none'
						value={sintomasMascota}
						onChange={(e) => setSintomasMascota(e.target.value)}
					/>
				</div>

				<input
					type='submit'
					className='bg-gray-800 w-full p-3 text-white font-bold cursor-pointer transition-all transition-ease-in-out duration-500 hover:bg-gray-900 rounded-md'
					value={paciente.id ? 'Edita el registro' : 'Guarda el registro'}
				/>
			</form>
		</div>
	);
};

export default Formulario;
