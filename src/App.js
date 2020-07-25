import React from 'react';
import Router from './Router';
import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
}

export default App;
