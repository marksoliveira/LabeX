import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { baseUrl } from '../../baseUrl';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { FormContainer } from '../../components/FormContainer';

import PageTitle from '../../components/PageTitle';
import { ContentContainer, ButtonHome } from './styles';

import { useForm } from '../../components/hooks/useForm';
import { useTripsList } from '../../components/hooks/useTripsList';

const ApplicationPage = () => {
  const history = useHistory()
  const trips = useTripsList()
  const {form, onChange, resetForm} = useForm ({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: null
  })

  const handleInputChange = event => {
    const {name, value} = event.target

    onChange(name, value)
  }

  const handleSubmitApplication = async (event) => {
    event.preventDefault()

    try {
      await axios.post(`${baseUrl}/trips/${form.trip.id}/apply`, form)

      alert("Inscrição feita com sucesso!!!")
    } catch (e) {
      alert("Inscrição falhou :(")
    }

    resetForm()
  }

  const goToHomePage = () => {
    history.push('/')
  }
  
  return (
    <>
      <PageTitle title={'Aplicar para viagem'}/>
      <ButtonHome>
        <Button variant={'contained'} color={'primary'} onClick={goToHomePage}>Home</Button>
      </ButtonHome>
      <ContentContainer>
        <FormContainer onSubmit={handleSubmitApplication}>
          <TextField 
            label={'Nome do candidato'} 
            onChange={handleInputChange} 
            value={form.name}
            name={"name"}
            required          
          />
          <TextField 
            label={'Idade'} type={'number'} 
            onChange={handleInputChange}
            value={form.age}
            name={"age"}
            required
          />
          <TextField 
            label={'Texto de aplicação'} helperText="Explique porque você é um(uma) bom(boa) candidato(a)" 
            onChange={handleInputChange}
            value={form.applicationText}
            name={"applicationText"}
            required
          />
          <TextField 
            label={'Profissão'} 
            onChange={handleInputChange}
            value={form.profession}
            name={"profession"}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            label="País" 
            value={form.country} 
            onChange={handleInputChange}
            name={"country"}
            select
            required
          >
            <MenuItem value="brasil">Brasil</MenuItem>
          </TextField>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Viagem" 
            value={form.trip} 
            onChange={handleInputChange}
            name={"trip"}
            select
            required
          >
            {trips.map((trip) => {
              return <MenuItem key={trip.id} value={trip}>{trip.name}</MenuItem>
            })}
          </TextField>
          <Button variant={'contained'} color={'primary'} type={'submit'}>Inscrever-se</Button>
        </FormContainer>
      </ContentContainer>
    </>
  );
}

export default ApplicationPage;

