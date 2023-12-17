import { useContext } from 'react';
import { node } from 'prop-types';
import { styled } from 'styled-components';
import { WindowContext } from '../contexts/WindowContext';
import wallpaper from '../assets/wallpaper/wallpaper.jpg';
import clouds from '../assets/wallpaper/windowsclouds.jpg';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const BackgroundDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.darkgray};
  background-image: 
    ${({ $bgon, $bgimg }) => $bgon && `url(${$bgimg === "loading" ? clouds : wallpaper})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  width: 80vw;
  border-radius: 8px;
`

const Background = ({ children }) => {
  const { computerState } = useContext(WindowContext);

  return (
    <Container>
      <BackgroundDiv 
        $off={computerState === "off"}
        $bgon={computerState === "loading" || computerState === "desktop"}
        $bgimg={computerState}
      >
        {children}
      </BackgroundDiv>
    </Container>
  )
}

Background.defaultProps = {
  children: null,
}

Background.propTypes = {
  children: node,
}

export default Background;
