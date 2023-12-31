import { styled } from 'styled-components';
import CatPic from '../../assets/images/cat.jpg';

const CatWindow = () => {
  return (
    <Container>
      <StyledImg src={CatPic}></StyledImg>
      <div>His name is Cachirulo.</div>
    </Container>
  )
};

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  font-size: 18px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  display:flex; 
`;

export default CatWindow;
