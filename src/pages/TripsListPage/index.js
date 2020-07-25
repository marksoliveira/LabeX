import React from 'react';
import { Link } from "react-router-dom";

import PageTitle from '../../components/PageTitle'

import { TripsListPageContainer } from './styles';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { useTripsList } from '../../components/hooks/useTripsList';
import { ContentContainer } from './styles';
import { useProtectedPage } from '../../components/hooks/useProtectedPage'

const TripsListPage = () => {
  const trips = useTripsList()

  useProtectedPage()

  return (
    <TripsListPageContainer>
      <PageTitle title={'Lista de viagens'}/>
      <Link to={'/viagens/criar'}>
        <Button variant={'contained'} color={'primary'} >Criar viagem</Button>
      </Link>

      <ContentContainer>
        <List component="nav" >
          {trips.map((trip) => {
            return <Link key={trip.id} to={`/viagens/detalhe/${trip.id}`}>
              <ListItem button>
                <ListItemText primary={trip.name} />
              </ListItem>
            </Link>
          })}
        </List>
      </ContentContainer>

    </TripsListPageContainer>
  );
}

export default TripsListPage;
