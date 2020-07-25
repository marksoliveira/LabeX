import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FormContainer } from '../../components/FormContainer';

import PageTitle from '../../components/PageTitle';
import { TextField, Button } from '@material-ui/core';
import { ContentContainer } from './styles';
import { useForm } from '../../components/hooks/useForm';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
import { useProtectedPage } from '../../components/hooks/useProtectedPage'

const CreateTripPage = () => {
  const history = useHistory()
  const {form, onChange} = useForm ({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (!token) {
      history.push('/login')
    }
  }, [])

  useProtectedPage()

  const handleInputChange = event => {
    const {name, value} = event.target

    onChange(name, value)
  }

  const onSubmitForm = async (event) => {
    event.preventDefault()

    const formattedDate = form.date.split("-").reverse().join("/")
    
    const body = {
      name: form.name,
      planet: form.planet,
      date: formattedDate,
      description: form.description,
      durationInDays: form.durationInDays
    }

    const headers = {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }

    try {
      await axios.post(`${baseUrl}/trips`, body, headers)

      history.push('/viagens')
    } catch (e) {
      alert("Falha ao criar a viagem :(")
    }
  }
  
  return (
    <>
      <PageTitle title={'Criar Viagem'}/>
      <ContentContainer>
        <FormContainer onSubmit={onSubmitForm}>
          <TextField 
            label={'Nome'} 
            onChange={handleInputChange}
            value={form.name}
            name={'name'}
            required
          />
          <TextField 
            label={'Planeta'} 
            onChange={handleInputChange}
            value={form.planet}
            name={'planet'}
            required
          />
          <TextField 
            label={'Data'} 
            InputLabelProps={{ shrink: true }} 
            type={'date'} 
            onChange={handleInputChange}
            value={form.date}
            name={'date'}
            required
          />
          <TextField 
            label={'Descrição'} 
            onChange={handleInputChange}
            value={form.description}
            name={'description'}
            required
          />
          <TextField 
            label={'Duração em dias'} 
            type={'number'}
            onChange={handleInputChange}
            value={form.durationInDays}
            name={'durationInDays'}
            required
          />
          <Button variant={'contained'} color={'primary'} type={'submit'}>Criar</Button>
        </FormContainer>
      </ContentContainer>
    </>
  );
}

export default CreateTripPage;