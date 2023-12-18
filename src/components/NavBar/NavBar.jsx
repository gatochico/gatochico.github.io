import { useContext, useState, useRef } from 'react';
import { styled } from 'styled-components';
import { WindowContext } from '../../contexts/WindowContext';
import StartMenu from './StartMenu';
import Time from './Time';
import { AppBar, Toolbar } from 'react95';
import { string } from 'prop-types';

const NavBar = ({ className }) => {

  return (
    <AppBar className={className}>
      <StyledToolbar>
        <ToolbarItems>
            <StartMenu />
            <Time />
        </ToolbarItems>
      </StyledToolbar>
    </AppBar>
  )
};

NavBar.defaultProps = {
  className: '',
};

NavBar.propTypes = {
  className: string,
};

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const ToolbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%
`;

export default NavBar;
