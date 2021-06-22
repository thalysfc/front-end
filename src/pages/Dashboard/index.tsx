import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header'
import { Form, Message, Dash } from './styles';

interface IListagem {
	id: string;
	cliente: string;
	telefone: string;
	email: string;
}

const Dashboard: React.FC = () => {

	const [clientes, setClientes] = useState<IListagem[]>([]);

	const [formEnviado, setFormEnviado] = useState(false);

	const [id, setId] = useState('');
	const [cliente, setCliente] = useState('');
	const [telefone, setTelefone] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		api.get('/clients').then(response => setClientes(response.data));
	}, []);
	console.log(clientes);

	async function handleDelete(id: string) {
		await api.delete(`/clients/${id}`);
		setClientes(clientes.filter(client => client.id !== id));
	}


	const handleEditar = (id: string) => {
		async function loadData() {
			const dados = await api
				.get(`/clients/${id}`)
				.then((response) => response.data);
			console.log(dados);
			if (dados) {
				setId(dados.id);
				setCliente(dados.cliente);
				setTelefone(dados.telefone);
				setEmail(dados.email);
			} else {
				setClientes([]);
			}
		}
		loadData();
	};

	async function handleAddClientes(event: any) {
		event.preventDefault();

		const { target } = event;

		const novoCadastro = {
			cliente: target.cliente.value,
			telefone: target.telefone.value,
			email: target.email.value,
		};
		console.log(novoCadastro)
		if (id) {
			await api.put(`/clients/${id}`, novoCadastro);
			alert('Dados alterados com sucesso!')
			window.location.href = '/';
		} else {
			await api.post('/clients', novoCadastro);
		}

		api.get('/clients').then(response => setClientes(response.data));
		setCliente('');
		setTelefone('');
		setEmail('');

		setFormEnviado(true);
		setTimeout(() => {
			setFormEnviado(false);
		}, 5000);

		target.reset();
	}

	return (
		<>
			<Header />
			<Form onSubmit={handleAddClientes}>
				<div>
					<h1>Preencha os campos abaixo</h1>
				</div>
				<input
					type='text'
					name='cliente'
					value={cliente}
					onChange={(e) => setCliente(e.target.value)}
					placeholder='Nome'
				/>
				<input
					type='text'
					name='telefone'
					value={telefone}
					onChange={(e) => setTelefone(e.target.value)}
					placeholder='Telefone'
				/>
				<input
					type='text'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
				/>
				<button type='submit'>Enviar</button>
			</Form>
			{!!formEnviado && <Message>Cadastro salvo com sucesso!</Message>}

			<Dash>
				<ul>
					{clientes.map((client, indice) => (
						<li key={indice}>
						
							<div>
								<label>Nome</label>
								<p>{client.cliente}</p>
							</div>
							
							<div>
								<label>Telefone</label>
								<p>{client.telefone}</p>
							</div>
							<div>
								<label>Email</label>
								<p>{client.email}</p>
							</div>
							<button type='button' onClick={() => handleDelete(client.id)}>Excluir</button>
							<button type='button' onClick={() => handleEditar(client.id)}>Alterar</button>
						</li>
					))}
				</ul>

			</Dash>
		</>
	)
}

export default Dashboard;