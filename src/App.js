import React from 'react';
import Menu from './components/Menu';
import Title from './components/Title';
import WorkItem from './components/WorkItem';
import About from './components/About';
import Contact from './components/Contacts';
import Projects from './components/Projects';
import Gallery from './components/Gallery';


const WORK_DATA = [
  {
    title: 'Allstar Gaming Clips',
    websiteUrl: '#',
    logoUrl: '/images/work-1.jpg',
    position: 'Snr. Back End Engineer ',
    dateRange: 'September 2019 - Present',
    description: 'Allstar is an early stage esports & gaming startup based out of New York City. We build technology that enables gamers to effortlessly capture, personalize and share their greatest gaming moments. Our mission is to provide ever gamer the opportunity to star in their own professional quality gaming content.',
    skills: ['AWS', 'Node.JS', 'Redis', 'Electron JS']
  },
  {
    title: 'Another Company',
    websiteUrl: '#',
    logoUrl: '/images/work-2.jpg',
    position: 'Full Stack Banana',
    dateRange: 'September 2019 - Present',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['AWS', 'Node.JS', 'Redis', 'AWS', 'NodeJS', 'Redis',]
  }
]

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <About />
        <Menu />
        <Title title="work" id="work" />
        <WorkItem data={WORK_DATA} />
        <Title title="projects" id="projects" />
        <Projects />
        <Title title="gallery" id="gallery" />
        <Gallery />
        <Title title="contacts" id="contacts" />
        <Contact />
      </div>
    </div>
  );
}

export default App;
