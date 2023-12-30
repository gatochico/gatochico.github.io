import { styled } from 'styled-components';
import CatPic from '../../assets/images/cat.jpg';

const CatWindow = () => {
  return (
    <Container>
      <StyledImg src={CatPic}></StyledImg>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const StyledImg = styled.img`
  max-width: 100%;
  display:flex; 
`;

export default CatWindow;
