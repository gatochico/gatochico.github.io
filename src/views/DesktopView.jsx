import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { WindowContext } from '../contexts/WindowContext';
import NavBar from '../components/NavBar/NavBar';

const DesktopView = () => {
  const { setComputerState } = useContext(WindowContext);

  return (
    <Container>
      <StyledNavBar />
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const StyledNavBar = styled(NavBar)`
  border-radius: 0 0 8px 8px;
  border-right-style: hidden;
  bottom: 0;
  height: 35px;
  position: absolute;
  top: auto;
`;

export default DesktopView;
