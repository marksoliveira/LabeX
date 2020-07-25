import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ContentContainer } from './styles'

import { LoopCircleLoading } from 'react-loadingg';
import PageTitle from '../../components/PageTitle'
import TripInfo from './TripInfoCard';
import CandidatesList from './CandidatesList';
import { baseUrl } from '../../baseUrl';
import { useParams } from 'react-router-dom';
import { useProtectedPage } from '../../components/hooks/useProtectedPage'

const TripDetailsPage = () => {
  const [trip, setTrip] = useState("")
  const params = useParams()

  const getTripDetail = () => {
    const headers = {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }

    axios.get(`${baseUrl}/trip/${params.tripId}`, headers)
         .then((response) => {
           setTrip(response.data.trip) 
         })
         .catch(() => {
           alert("Erro ao carregar detalhes da viagem :(")
         })
  }
  
  useEffect(() => {
    getTripDetail()
  }, [])

  useProtectedPage()

  const decideCandidate = async (approve, candidateId) => {
    const body = {
      approve: approve
    }

    const headers = {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }
    
    try {
      await axios.put(`${baseUrl}/trips/${params.tripId}/candidates/${candidateId}/decide`, body, headers)

      getTripDetail()
    } catch (e) {
      alert("Aprovação ou Rejeição do candidato falhou :(")
    }
  }

  return (
    <>
      <PageTitle title={'Detalhes da viagem'} />
      {trip ? <ContentContainer>
                <TripInfo info={trip} />
                <CandidatesList 
                  candidates={trip.candidates} 
                  decideCandidate={decideCandidate} 
                />
              </ContentContainer>
      :
      <LoopCircleLoading />}
    </>
  );
}

export default TripDetailsPage;