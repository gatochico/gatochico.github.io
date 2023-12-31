import { useState } from 'react';
import { styled } from 'styled-components';
import Portrait from '../../assets/images/portrait.png';
import { openInNewTab } from '../../utils/utils';
import { Tabs, TabBody, Tab } from 'react95';

const availableTabs = [
  { value: 0, name: "Interests 😎" },
  { value: 1, name: "Stack 💻" },
  { value: 2, name: "Fun facts 🌈" }
]

const AboutWindow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (value, event) => {
    setActiveTab(value);
  };

  return (
    <Container>
      <Row>
        <StyledImg
          src={Portrait}
          onClick={() => openInNewTab('https://picrew.me/en/image_maker/112842')}
        />
        <Text>
          <Title><Bold>About me</Bold></Title>
          <StyledP>
            I&apos;m <Bold>Fran</Bold> or gatochico (it means small cat!),
             a software engineer from <Bold>Santiago, Chile</Bold>.
          </StyledP>
          <StyledP>
            I have a <Bold>Bachelor&apos;s degree in Computer Science</Bold> from the Pontifical Catholic University of Chile, 
            and am currently working on getting my <Bold>Master&apos;s</Bold> on that same field.
          </StyledP>
          <StyledP>
            I&apos;m also currently working as a <Bold>full stack web developer</Bold> and 
            as a <Bold>teacher</Bold> for an introductory CS course at the
            university since this last semester.
          </StyledP>
        </Text>
      </Row>

      <Tabs value={activeTab} onChange={handleChange}>
        {
          availableTabs.map((option) => (
            <Tab key={option.value} value={option.value}><Text><Bold>{option.name}</Bold></Text></Tab>
          ))
        }
      </Tabs>
        <TabBody>
          {activeTab === 0 && (
            <Row>
              <Text>
                <StyledP>• Data processing and visualization</StyledP>
                <StyledP>• Web development (especially Frontend)</StyledP>
                <StyledP>• UX/UI design</StyledP>
                <StyledP>• Teaching 👩‍🏫</StyledP>
              </Text>
            </Row>
          )}
          {activeTab === 1 && (
            <Row>
              <Text>
                <StyledP>• Python</StyledP>
                <StyledPaddedP>• Assorted Web development and Data science libraries</StyledPaddedP>
                <StyledP>• Javascript</StyledP>
                <StyledPaddedP>• Node, React, Vue.</StyledPaddedP>
                <StyledP>• Ruby on Rails for web development</StyledP>
              </Text>
            </Row>
          )}
          {activeTab === 2 && (
            <div>
              <Row>
                <Text>
                  <StyledP>• I have a really cute cat (check him out on &quot;My cat&quot;)</StyledP>
                  <StyledP>• My hobbies are everything art related (drawing, painting, crafts, etc)🎨</StyledP>
                  <StyledP>• Avid concert goer</StyledP>
                  <StyledP>• Big fan of writing weird reviews on Letterboxd.</StyledP>
                </Text>
              </Row>
            </div>
          )}
        </TabBody>
    </Container>
  )
};

const Text = styled.div`
  font-size: 18px;
  flex: 4;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 12px;
`;

const StyledImg = styled.img`
  width: 45%;
  display:flex;
  cursor: pointer;
  flex: 3;
`;

const StyledP = styled.p`
  margin-bottom: 4px;
`;

const StyledPaddedP = styled.p`
  margin-bottom: 4px;
  margin-left: 16px;
`;

const Title = styled.span`
  font-size: 22px;
  text-decoration: underline;
`;

export default AboutWindow;
