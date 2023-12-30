import { styled } from 'styled-components';
import { Hourglass } from 'react95';


const ProjectsWindow = () => {
  return (
    <Container>
      <div>Work in progress!</div>
      <Hourglass size={64} style={{ margin: 20 }} />
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  height: 100%;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default ProjectsWindow;
