import { Progman24, Drvspace7, Winhlp324001, Pbrush1 } from '@react95/icons';
import { openInNewTab } from '../../utils/utils';
import AboutWindow from './About';
import CatWindow from './Cat';
import ProjectsWindow from './Projects';
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
    link: true,
    desktopIcon: <Winhlp324001 variant="32x32_4" height={32} width={32}/>,
    icon: <Winhlp324001 variant="32x32_4" height={25} width={25}/>,
    onClick: () => openInNewTab('https://github.com/gatochico'),
  },
  { 
    id: 'Projects',
    title: 'Some of my projects 🔧',
    open: false,
    active: false,
    desktopIcon: <Pbrush1 variant="32x32_4" height={32} width={32}/>,
    icon: <Pbrush1 variant="32x32_4" height={25} width={25}/>,
    content: <ProjectsWindow />,
    dimensions: { height: '200px', width: '400px' },
    positioning: { top: '5%', right: '50%' },
  },
  { 
    id: 'My Cat',
    title: 'Look at my cat! 🐱',
    open: false,
    active: false,
    desktopIcon: <Drvspace7 variant="32x32_4" height={32} width={32}/>,
    icon: <Drvspace7 variant="32x32_4" height={25} width={25}/>,
    content: <CatWindow />,
    dimensions: { height: '600', width: '600px' },
    positioning: { top: '10%', left: '25%' },
  },
];

export default windows;
