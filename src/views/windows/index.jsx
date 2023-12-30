import { Progman24 } from '@react95/icons';
import AboutWindow from './About';

export const windows = [
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
    title: 'My Github Profile',
    open: true,
    active: true,
    desktopIcon: <Progman24 variant="32x32_4" height={32} width={32}/>,
    icon: <Progman24 variant="32x32_4" height={25} width={25}/>,
    content: <AboutWindow />,
    dimensions: { height: '600px', width: '800px' },
    positioning: { top: '100px', right: '10px' },
  },
];

export default windows;
