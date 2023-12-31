import { useContext, useState, useRef } from 'react';
import { styled } from 'styled-components';
import { WindowContext } from '../../contexts/WindowContext';
import { Button, MenuList, MenuListItem, Separator } from 'react95';
import { Shell3228, User1, Winhlp324001 } from '@react95/icons';
import { openInNewTab } from '../../utils/utils';
import { func } from 'prop-types';

const StartMenu = ({ setDesktopOn }) => {
  const { setComputerState } = useContext(WindowContext);
  const refMenu = useRef(undefined);
  const [open, setOpen] = useState(false);

  const toggleMenuShow = (state) => {
    setOpen(state);
    if (state) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  const handleClickOutside = ({ target }) => {
    if (refMenu.current.contains(target)) return;
    toggleMenuShow(false);
  };

  const turnOffComputer = () => {
    setTimeout(() => {
      setDesktopOn(false);
      setTimeout(() => {
        setComputerState("off")
      }, 1000);
    }, 1000);
  };

  return (
    <Start ref={refMenu}>
      <SlidingDiv $isOpen={open}>
        {open && (
        <MenuContainer>
          <WindowsContainer>
            <Rotated>
              <BoldSpan>Windows</BoldSpan>
              <NormalSpan>95</NormalSpan>
            </Rotated>
          </WindowsContainer>
          <Separator orientation='vertical' size='120px' />
          <StyledMenuList
            onClick={() => toggleMenuShow(false)}
          >
            <StyledMenuListItem>
              <Winhlp324001 
                variant="32x32_4"
                onClick={() => openInNewTab('https://github.com/gatochico')}
              />
              Github
            </StyledMenuListItem>
            <Separator />
            <StyledMenuListItem onClick={() => turnOffComputer()}>
              <Shell3228 variant="32x32_4"/>
              Sh&#818;ut Down...
            </StyledMenuListItem>
          </StyledMenuList>
        </MenuContainer>
        )}
      </SlidingDiv>
      <StyledButton
        onClick={() => toggleMenuShow(!open)}
        active={open}
      >
        <User1 variant="22x22_4"/>
        Start
      </StyledButton>
    </Start>
  )
};


StartMenu.propTypes = {
  setDesktopOn: func.isRequired,
};

const BoldSpan = styled.span`
  color: #bdbdbd;
  font-size: 18px;
  font-weight: bold;
`;

const MenuContainer = styled(MenuList)`
  display: flex;
`;

const NormalSpan = styled.span`
  font-size: 20px;
  color: #ffff;
`;

const Rotated = styled.div`
  transform: rotate(-90deg);
`;

const SlidingDiv = styled.div`
  bottom: 36px;
  max-height: ${({ $isOpen }) => $isOpen ? '200px' : 0};
  overflow: hidden;
  position: absolute;
`;

const Start = styled.div`
  position: relative;
  width: 100%;
  padding-right: 12px;
`;

const StyledButton = styled(Button)`
  font-weight: bold;
  gap: 4px;
  height: 30px;
`;

const StyledMenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 150px;
`;

const StyledMenuListItem = styled(MenuListItem)`
  cursor: pointer !important;
`;

const WindowsContainer = styled.div`
  align-items: center;
  background-color: #808080;
  color: white;
  display: flex;
  justify-content: center;
  padding: 0px 0px;
  user-select: none;
  width: 40px;
`;

export default StartMenu;
