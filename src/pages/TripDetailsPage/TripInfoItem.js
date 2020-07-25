import React from 'react';

import { InfoCards } from './styles';

const TripInfoItem = (props) => {
  return (
    <>
      <InfoCards>
        <strong>{props.infoName}</strong>: {props.info}
      </InfoCards>
    </>
  )
}

export default TripInfoItem;