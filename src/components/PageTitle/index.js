import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  font-size: 80px;
  margin: 0;
  padding: 32px;
`

const PageTitle = (props) => {
  return <Title>{props.title}</Title>
}

export default PageTitle;
