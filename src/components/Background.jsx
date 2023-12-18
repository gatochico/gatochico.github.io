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

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      to bottom,
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 2px;
    z-index: 100;
    pointer-events: none;
  }
`;

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
