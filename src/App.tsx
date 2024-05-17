// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FavoritesProvider } from './Context/localStorageContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <FavoritesProvider>
        <Header />
        <Home />
      </FavoritesProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
