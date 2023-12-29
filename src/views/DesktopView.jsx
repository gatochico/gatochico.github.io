import { useEffect, useState, useMemo, } from 'react';
import { styled } from 'styled-components';
import CustomWindow from '../components/Window/CustomWindow';
import NavBar from '../components/NavBar/NavBar';
import { Progman24 } from '@react95/icons';
import AboutWindow from './windows/About';

const windows = [
  { 
    id: 'About',
    title: 'About me ✨',
    open: true,
    active: true,
    desktopIcon: <Progman24 variant="32x32_4" height={32} width={32}/>,
    icon: <Progman24 variant="32x32_4" height={25} width={25}/>,
    content: <AboutWindow />,
    dimensions: { height: '600px', width: '500px' },
    positioning: { top: '10px', right: '10px' },
  },
  { 
    id: 'Github',
    title: 'About me ✨',
    open: true,
    active: true,
    desktopIcon: <Progman24 variant="32x32_4" height={32} width={32}/>,
    icon: <Progman24 variant="32x32_4" height={25} width={25}/>,
    content: <AboutWindow />,
    dimensions: { height: '600px', width: '800px' },
    positioning: { top: '100px', right: '10px' },
  },
]

const DesktopView = () => {
  const [activeWindows, setActiveWindows] = useState([]);

  useEffect(() => {
    setActiveWindows(windows);
  }, []);

  const navIcons = useMemo(() => {
    return activeWindows
      .filter((window) => window.open)
      .map((window) => ({
        id: window.id,
        icon: window.icon,
        active: window.active,
      }));
  }, [activeWindows]);

  const closeWindow = (id) => {
    const newActiveWindows = activeWindows.map((window) => 
      ({
        ...window,
        open: window.id === id ? false : window.open,
        active: window.id === id ? false : window.active,
      })
    );
    setActiveWindows(newActiveWindows);
  };

  const openWindow = (id) => {
    const newActiveWindows = activeWindows.map((window) => 
      ({
        ...window,
        open: window.id === id ? true : window.open,
        active: window.id === id ? true : window.active,
      })
    );
    setActiveWindows(newActiveWindows);
  };

  const toggleHideWindow = (id) => {
    const newActiveWindows = activeWindows.map((window) => 
      ({...window, active: window.id === id ? !window.active : window.active})
    );
    setActiveWindows(newActiveWindows);
  };

  return (
    <Container>
      <StyledNavBar activeIcons={navIcons} onToggleIcon={toggleHideWindow}/>
      {
        activeWindows.filter((window) => window.open && window.active).map((window) => (
          <CustomWindow 
            key={window.id}
            title={window.title}
            content={window.content}
            width={window.dimensions.width}
            height={window.dimensions.height}
            positioning={window.positioning}
            onClose={() => closeWindow(window.id)}
            onHide={() => toggleHideWindow(window.id)}
          />
        )) 
      }
      <Windows>
        {
          activeWindows.map((window) => (
            <DesktopIcon key={window.id} onClick={() => openWindow(window.id)}>
              {window.desktopIcon}
              <IconLabel>
                {window.id}
              </IconLabel>
            </DesktopIcon>
          ))
        }
      </Windows>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const DesktopIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  align-items: center;
  cursor: pointer;
`;

const IconLabel = styled.div`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const StyledNavBar = styled(NavBar)`
  border-radius: 0 0 8px 8px;
  border-right-style: hidden;
  bottom: 0;
  position: absolute;
  top: auto;
`;

const Windows = styled.div`
  display: flex;
  height: calc(100% - 40px);
  padding: 12px;
  box-sizing: border-box;
  flex-direction: column;
  gap: 12px;
  flex-wrap: wrap
`;

export default DesktopView;
