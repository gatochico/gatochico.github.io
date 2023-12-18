import { createContext, useState } from "react";
import { node } from 'prop-types';


export const WindowContext = createContext();

const WindowsState = ({ children }) => {
  const [computerState, setComputerState] = useState("desktop");

  return (
    <WindowContext.Provider
      value={{
        computerState,
        setComputerState,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

WindowsState.defaultProps = {
  children: null,
}

WindowsState.propTypes = {
  children: node,
}

export default WindowsState;
