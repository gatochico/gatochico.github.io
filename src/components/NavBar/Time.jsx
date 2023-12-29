import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Frame } from 'react95';

const TIMEOUT = 15000;

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, TIMEOUT);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledFrame variant='well'>
      {date.toTimeString().split(' ')[0].slice(0, -3)}
    </StyledFrame>
  )
};

const StyledFrame = styled(Frame)`
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: 2px;
  padding: 0 4px;
`;

export default Time;
