import { useContext } from 'react';
import { node } from 'prop-types';
import { styled } from 'styled-components';
import { WindowContext } from '../contexts/WindowContext';
import { Mprserv120 } from '@react95/icons';
import { Button, TextInput } from 'react95';

const Container = styled.div`
  display: flex;
  height: 100%;
`

const LoginContainer = styled.div`
  width: 500px;
  margin: auto;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
`;

const Text = styled.span`
  color: white;
  font-size: 28px;
`;

const LoginIcon = styled(Mprserv120)``

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StartView = () => {
  const { computerState } = useContext(WindowContext);

  return (
    <Container>
      <LoginContainer>
        <Row>
          <LoginIcon variant="48x48_4"/>
          <Inputs>
            <Row>
              <Text>Username</Text>
              <TextInput 
                value="gatochico"
              />
            </Row>
            <Row>
              <Text>Password</Text>
              <TextInput 
                value="password"
                type="password"
              />
            </Row>
          </Inputs>
        <Button>ENTER</Button>
        </Row>
      </LoginContainer>
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
