import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TitleCard } from './styles';
import TripInfoItem from './TripInfoItem';

const TripInfoCard = (props) => {
  const {name, planet, description, date, durationInDays} = props.info

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <TitleCard>
            Informações da Viagem
          </TitleCard>
          <TripInfoItem infoName={'Nome'} info={name} />
          <TripInfoItem infoName={'Planeta'} info={planet} />
          <TripInfoItem infoName={'Data'} info={date} />
          <TripInfoItem infoName={'Descrição'} info={description} />
          <TripInfoItem infoName={'Duração em dias'} info={durationInDays} />
        </CardContent>
      </Card>
    </>
  );
}

export default TripInfoCard;