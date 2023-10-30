import { AppShell, NavLink } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppShell.Navbar p="md" style={{ gap: '10px' }}>
      <NavLink
        label="Text Component"
        onClick={() => navigate('/text-component')}
        style={{ margin: '5px' }}
      />
      <NavLink
        label="Button Component"
        onClick={() => navigate('/button-component')}
        style={{ margin: '5px' }}
      />
    </AppShell.Navbar>
  );
};

export default Navbar;