import { useContext } from 'react';
import { WindowContext } from '../contexts/WindowContext';
import StartView from './StartView';
import LoadingView from './LoadingView';
import DesktopView from './DesktopView';

const BaseView = () => {
  const { computerState } = useContext(WindowContext);

  return (
    <>
      {computerState === "off" && <StartView />}
      {computerState === "loading" && <LoadingView />}
      {computerState === "desktop" && <DesktopView />}
    </>
  )
}

export default BaseView;
