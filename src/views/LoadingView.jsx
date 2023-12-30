import { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { WindowContext } from '../contexts/WindowContext';
import { ProgressBar } from 'react95';
import { randomInteger } from '../utils/utils';
import W95Logo from '../assets/svgs/w95Logo.svg';

const LoadingView = () => {
  const { setComputerState } = useContext(WindowContext);
  const [progress, setProgress] = useState(0);
  const [startProgress, setStartProgress] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartProgress(true)
    }, 1000);
  }, [])

  useEffect(() => {
    if (!startProgress) return;
  
    if (progress === 100) {
      setTimeout(() => {
        setComputerState("desktop")
      }, 500);

      return;
    }

    setTimeout(() => {
      setProgress(previousPercent => {
        const diff = randomInteger(10, 20);
        return Math.floor(Math.min(previousPercent + diff, 100));
      });
    }, 500);
  }, [progress, startProgress, setComputerState]);

  return (
    <Container>
      <Content>
        <StyledLogo src={W95Logo} alt="Logo" />
        <ProgressContainer>
          {
            startProgress &&
            <StyledProgressBar value={progress} variant='tile'/>
          }
        </ProgressContainer>
      </Content>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  margin: auto;
  width: 50%;
`;

const ProgressContainer = styled.div`
  min-height: 40px;
  width: 95%;
`;

const StyledLogo = styled.img`
  margin: 60px 0; 
  width: 100%;
`;

const StyledProgressBar = styled(ProgressBar)`
  height: 35px;
  margin: auto;
`
export default LoadingView;
