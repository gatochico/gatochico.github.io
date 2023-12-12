import { useContext } from 'react';
import { WindowContext } from '../contexts/WindowContext';
import StartView from './StartView';

const BaseView = () => {
  const { computerState } = useContext(WindowContext);

  return (
    <>
      {computerState && <StartView />}
    </>
  )
}

export default BaseView;
