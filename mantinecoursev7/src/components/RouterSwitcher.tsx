import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import TextComponent from './Text';
import ButtonComponent from './Buttons';

const RouteSwitcher = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/text-component" element={<TextComponent />} />
      <Route path="/button-component" element={<ButtonComponent />} />
    </Routes>
  );
};

export default RouteSwitcher;