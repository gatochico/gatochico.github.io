import { useContext, useState, useRef } from 'react';
import { styled } from 'styled-components';
import { WindowContext } from '../../contexts/WindowContext';
import StartMenu from './StartMenu';
import Time from './Time';
import { AppBar, Frame, Toolbar } from 'react95';
import { arrayOf, node, shape, string } from 'prop-types';

const NavBar = ({ className, activeIcons, onToggleIcon }) => {

  return (
    <StyledAppBar className={className}>
      <StyledToolbar>
        <ToolbarItems>
            <LeftSide>
            <StartMenu />
            {
              activeIcons.map((icon) => (
                <StyledFrame 
                  key={icon.id}
                  onClick={() => onToggleIcon(icon.id)}
                  variant={icon.active ? 'status' : ''}
                >
                  {icon.icon}
                </StyledFrame>
              ))
            }
            </LeftSide>
            <Time />
        </ToolbarItems>
      </StyledToolbar>
    </StyledAppBar>
  )
};

NavBar.defaultProps = {
  className: '',
  activeIcons: [],
};

NavBar.propTypes = {
  className: string,
  activeIcons: arrayOf(shape({
    id: string,
    icon: node,
  }))
};

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledAppBar = styled(AppBar)`
  z-index: 100;
  height: 40px;
  justify-content: center;
  padding-top: 2px;
`;

const StyledFrame = styled(Frame)`
  height: 30px;
  width: 30px;
  margin-right: 8px;
  cursor: pointer;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  height: 40px;
`;

const ToolbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export default NavBar;
