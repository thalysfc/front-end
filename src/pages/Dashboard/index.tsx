import React, {useState} from 'react';
import { useEffect } from 'react';
import {useRouteMatch} from 'react-router-dom';
import api from '../../services/api';

import { Form, Message} from './styles';

interface Cadastro{
    nome: string;
    telefone: string;
    email: string;
}

interface ClientesParametros{
    id: string;
}

const New: React.FC = () =>{
    const { params } = useRouteMatch<ClientesParametros>();
	console.log(params.id);

	const [clientes, setClientes] = useState<Cadastro[]>([]);

	const [formEnviado, setFormEnviado] = useState(false);

	const [id, setId] = useState('');
	const [nome, setNome] = useState('');
	const [telefone, setTelefone] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		async function loadData() {
			const dados = await api
				.get(`/teachers/${params.id}`)
				.then((response) => response.data);
			console.log(dados);
			if (dados) {
				setId(dados.id);
				setNome(dados.nome);
				setTelefone(dados.telefone);
				setEmail(dados.email);
			} else {
				setClientes([]);
			}
		}
		loadData();
	}, []);

	async function handleAddClientes(event: any) {
		event.preventDefault();

		const { target: form } = event;

		const novoCadastro = {
			nome: form.nome.value,
			telefone: form.telefone.value,
			email: form.email.value,
		};

    if (id) {
      await api.put(`/teachers/${id}`, novoCadastro);
      alert('Dados alterados com sucesso!')
      window.location.href = '/';
    } else {
      await api.post('/teachers', novoCadastro);
    }

    setNome('');
		setTelefone('');
		setEmail('');
		
		setClientes([...clientes, novoCadastro]);

		setFormEnviado(true);
		setTimeout(() => {
			setFormEnviado(false);
		}, 5000);

		form.reset();
	}

	return (
		<>
			<Form onSubmit={handleAddClientes}>
				<input
					type='text'
					name='disciplina'
					value={nome}
					onChange={(e) => setNome(e.target.value)}
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
		</>
	);
};

export default New;
