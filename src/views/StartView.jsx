import { useContext, useState } from 'react';
import { node } from 'prop-types';
import { styled } from 'styled-components';
import { WindowContext } from '../contexts/WindowContext';
import { Mprserv120 } from '@react95/icons';
import { Button, TextInput, Hourglass } from 'react95';

const HOURGLASS_TIME = 3000;
const CHANGE_SCREEN_TIME = 4000;

const StartView = () => {
  const { setComputerState } = useContext(WindowContext);
  const [visible, setVisible] = useState(true);
  const [loginClicked, setLoginClicked] = useState(false);

  const onLogin = (event) => {
    event.currentTarget.blur()
    setLoginClicked(true);

    setTimeout(() => {
      setVisible(false);
    }, HOURGLASS_TIME);

    setTimeout(() => {
      setComputerState("loading");
    }, CHANGE_SCREEN_TIME);
  }

  return (
    <Container>
      { 
        visible &&
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
        <StyledButton onClick={(e) => onLogin(e)}>
          {loginClicked ? <Hourglass /> : "ENTER"}
        </StyledButton>
        </Row>
        </LoginContainer>
      }
    </Container>
  )
};

StartView.defaultProps = {
  children: null,
};

StartView.propTypes = {
  children: node,
};

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

const StyledButton = styled(Button)`
  min-width: 70px;
`;

export default StartView;
