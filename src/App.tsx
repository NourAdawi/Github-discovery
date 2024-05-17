import { FavoritesProvider } from './Context/localStorageContext';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <FavoritesProvider>
        <Header />
        <Home />
      </FavoritesProvider>
    </>
  );
}

export default App;
