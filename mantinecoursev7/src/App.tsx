// import React from 'react';
// import {useDisclosure} from '@mantine/hooks';
// import {
//   Flex,
//   NavLink,
//   AppShell,
//   Burger,
//   Button,
//   useMantineColorScheme,
//   useComputedColorScheme,
// } from '@mantine/core';
// import {FaSun, FaMoon} from 'react-icons/fa';
// import './App.css';
// import ButtonComponent from './components/Buttons';
// import TextComponent from './components/Text';
// import {Route, Routes, useNavigate} from 'react-router-dom';
// import NotFound from './components/NotFound';

// function App() {
  // const navigate = useNavigate();
  // const [opened, {toggle}] = useDisclosure();
  // const [currentComponent, setCurrentComponent] =
  //   React.useState<string>('component1');
  // const {setColorScheme} = useMantineColorScheme();
  // const computedColorScheme = useComputedColorScheme('light');

  // const toggleColorScheme = () => {
  //   setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  // };

//   return (
//     <div className="App" style={{marginTop: '20px'}}>
//       <AppShell
//         header={{height: 60}}
//         navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
//         padding="md"
//       >
//         <AppShell.Header>
//           <Flex
//             justify="space-between"
//             align="center"
//             style={{padding: '10px 20px'}}
//           >
//             <Burger
//               opened={opened}
//               onClick={toggle}
//               hiddenFrom="sm"
//               size="sm"
//             />
//             <div>Quirky Mantine Tutorials 🤓🤓🤓🤓🤓</div>
//             <Button size="sm" variant="link" onClick={toggleColorScheme}>
//               {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
//             </Button>
//           </Flex>
//         </AppShell.Header>

//         <AppShell.Navbar p="md" style={{gap: '10px'}}>
//           <NavLink
//             label="Text Component"
//             onClick={() => navigate('/text-component')}
//             style={{margin: '5px'}}
//           />
//           <NavLink
//             label="Button Component"
//             onClick={() => navigate('/button-component')}
//             style={{margin: '5px'}}
//           />
//         </AppShell.Navbar>

//         <AppShell.Main>
//           <Routes>
//             <Route path="*" element={<NotFound />} />
//             <Route path="/text-component" element={<TextComponent />} />
//             <Route path="/button-component" element={<ButtonComponent />} />
//           </Routes>
//         </AppShell.Main>

//         <AppShell.Footer zIndex={opened ? 'auto' : 201}>
//           Built by you the THICCest of all CODERS 🫃🫃🫃🫃🫃🫃🫃🫃🫃🫃
//         </AppShell.Footer>
//       </AppShell>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { AppShell, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import Header from './components/Header';
import RouteSwitcher from './components/RouterSwitcher';

function App() {
  const navigate = useNavigate();
  const [opened, {toggle}] = useDisclosure();
  const [currentComponent, setCurrentComponent] =
    React.useState<string>('component1');
  const {setColorScheme} = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };


  return (
    <div className="App" style={{marginTop: '20px'}}>
      <AppShell
        header={{height: 60}}
        navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
        padding="md"
      >
        <Header />
        <Navbar />
        <AppShell.Main>
        <RouteSwitcher />
        </AppShell.Main>
        <AppShell.Footer zIndex={opened ? 'auto' : 201}>
          Built by you the THICCest of all CODERS 🫃🫃🫃🫃🫃🫃🫃🫃🫃🫃
        </AppShell.Footer>
      </AppShell>
    </div>
  );
}

export default App;
