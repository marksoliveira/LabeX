import React from 'react';

import { TitleCard } from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { List } from '@material-ui/core';
import CandidateItem from './CandidateItem';

const CandidatesList = (props) => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <TitleCard>
            Lista de candidatos
          </TitleCard>
          <List>
            {props.candidates.map(candidate => {
              return <CandidateItem candidate={candidate} decideCandidate={props.decideCandidate} />
            })}
          </List>
        </CardContent>
      </Card>
    </>
  );
}

export default CandidatesList;