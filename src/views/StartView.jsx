import { useContext } from 'react';
import { node } from 'prop-types';
import { styled } from 'styled-components';
import { WindowContext } from '../contexts/WindowContext';
import { Mprserv120 } from '@react95/icons';
import { Button, TextInput } from 'react95';

const Container = styled.div`

`

const StartView = () => {
  const { computerState } = useContext(WindowContext);

  return (
    <Container>
      oowoow
      <Mprserv120 variant="48x48_4"/>
      <TextInput></TextInput>
      <TextInput></TextInput>
      <Button></Button>
    </Container>
  )
}

StartView.defaultProps = {
  children: null,
}

StartView.propTypes = {
  children: node,
}

export default StartView;
