import { useRef } from 'react';
import { styled } from 'styled-components';
import { Button, Window, WindowHeader, WindowContent } from 'react95';
import { func, string, node, shape, number } from 'prop-types';
import Draggable from "react-draggable";

const CustomWindow = ({ content, title, height, width, onHide, onClose, positioning }) => {
  const nodeRef = useRef(null);

  return (
  <Draggable 
    handle='.handle'
    bounds="parent"
    ref={nodeRef}
  >
    <StyledWindow $height={height} $width={width} $positioning={positioning}>
      <WindowTitle className='handle'>
        <StyledSpan>{title}</StyledSpan>
        <Buttons>
          <Button onClick={onHide}>
            <HideIcon  />
          </Button>
          <Button onClick={onClose}>
            <CloseIcon />
          </Button>
        </Buttons>
      </WindowTitle>

      <WindowContent>{content}</WindowContent>
    </StyledWindow>
  </Draggable>
  )
};

CustomWindow.defaultProps = {
  content: <div></div>,
  className: true,
  onClose: () => {},
  onHide: () => {},
  title: '',
  height: '300px',
  width: '300px',
  positioning: {},
};

CustomWindow.propTypes = {
  content: node,
  onClose: func,
  onHide: func,
  title: string,
  height: string,
  width: string,
  positioning: shape,
};

const Buttons = styled.div`
  display: flex;
  gap: 2px;
`;

const WindowTitle = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HideIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  transform: rotateZ(0deg);
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.materialText};
  }
  &:after {
    bottom: 0;
    height: 3px;
    width: 100%;
    left: 0px;
  }
`;

const CloseIcon = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  transform: rotateZ(45deg);
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.materialText};
  }
  &:before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:after {
    height: 3px;
    width: 100%;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledSpan = styled.span`
  cursor: default;
`;

const StyledWindow = styled(Window)`
  height: ${({ $height }) => $height};
  position: absolute;
  width: ${({ $width }) => $width};
  top: ${({ $positioning }) => $positioning?.top};
  right: ${({ $positioning }) => $positioning?.right};
  left: ${({ $positioning }) => $positioning?.left};
  bottom: ${({ $positioning }) => $positioning?.bottom};
`;

export default CustomWindow;
