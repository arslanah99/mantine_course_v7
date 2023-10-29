import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import {Flex, AppShell, Burger, Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import {FaSun, FaMoon} from 'react-icons/fa';
import './App.css';
import ButtonComponent from './components/Buttons';
import TextComponent from './components/Text';


function App() {
  const [opened, {toggle}] = useDisclosure();
  const [currentComponent, setCurrentComponent] = React.useState<string>('component1');
  const {setColorScheme} = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? 'light' : 'dark')
  }

  return (
        <div className="App" style={{ marginTop: '20px' }}><AppShell
      header={{height: 60}}
      navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
      padding="md"
   >
    <AppShell.Header>
      <Flex justify="space-between" align='center' style={{padding: '10px 20px'}}>
        <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size="sm"/>
        <div>Quirky Mantine Tutorials 🤓🤓🤓🤓🤓</div>
        <Button size='sm' variant='link' onClick={toggleColorScheme}>
          {computedColorScheme === "dark" ? <FaSun /> : <FaMoon />}
        </Button>
      </Flex>
    </AppShell.Header>

    <AppShell.Navbar p="md" style={{gap: "10px"}}>
    <Button onClick={() => setCurrentComponent('component1')} style={{ margin: '5px' }}>Text Component</Button>
  <Button onClick={() => setCurrentComponent('component2')} style={{ margin: '5px' }}>Button Component</Button>

    </AppShell.Navbar>
    <AppShell.Main>
      {currentComponent === "component1" ?  <TextComponent /> :<ButtonComponent />}
    </AppShell.Main>

    <AppShell.Footer zIndex={opened ? 'auto' : 201}>
      Built by you the THICCest of all CODERS 🫃🫃🫃🫃🫃🫃🫃🫃🫃🫃
    </AppShell.Footer>
    </AppShell>
    </div>
  );
}

export default App;
