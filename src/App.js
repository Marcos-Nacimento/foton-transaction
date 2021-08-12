import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';

import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  );
};