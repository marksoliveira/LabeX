import React, { useEffect } from 'react';
import axios from 'axios';

import { LoginForm, ContainerForm } from './styles';
import { TextField, Button } from '@material-ui/core';
import PageTitle from '../../components/PageTitle'
import { useForm } from '../../components/hooks/useForm';
import { baseUrl } from '../../baseUrl';
import { useHistory } from 'react-router-dom';


const LoginPage = () => {
  const history = useHistory()
  const {form, onChange} = useForm ({
    email: "",
    password: ""
  })  

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (token) {
      history.replace('/viagens')
    }
  },[])

  const handleInputChange = event => {
    const {name, value} = event.target

    onChange(name, value)
  }

  const handleSubmitLogin = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(`${baseUrl}/login`, form)

      window.localStorage.setItem("token", response.data.token)
      history.replace('/viagens')
    } catch (e) {
      alert("Login falhou :(")
    }
  }

  return (
    <>
      <PageTitle title={'Login'}/>
      <ContainerForm>
        <LoginForm onSubmit={handleSubmitLogin}>
          <TextField 
            label={'Email'} 
            type={'email'}
            value={form.email}
            onChange={handleInputChange}
            name={'email'}
          />
          <TextField 
            label={'Senha'} 
            type={'password'}
            value={form.password}
            onChange={handleInputChange}
            name={'password'}
          />
          <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
        </LoginForm>
      </ContainerForm>
    </>
  );
}

export default LoginPage;