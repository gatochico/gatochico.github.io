import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { WindowContext } from '../contexts/WindowContext';

const DesktopView = () => {
  const { setComputerState } = useContext(WindowContext);

  return (
    <Container>
      miau
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

export default DesktopView;
