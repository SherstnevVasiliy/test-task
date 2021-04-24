import './App.css';
import { useSelector } from 'react-redux';
import MainPage from './components/mainPage';
import Catalog from './components/catalog';

function App() {
  const viewState = useSelector((state) => state);
  if (viewState.isAuth) {
    return (
      <>
        <Catalog />
      </>
    );
  }
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
