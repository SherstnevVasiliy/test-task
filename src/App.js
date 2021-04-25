import './App.css';
import { useSelector } from 'react-redux';
import MainPage from './components/mainPage';
import Catalog from './components/catalog';
import Account from './components/account';
import TopHeader from './components/topHeader';

function App() {
  const viewState = useSelector((state) => state);
  if (!viewState.isAuth) {
    return (
      <>
        <TopHeader />
        <MainPage />
      </>
    );
  }
  if (viewState.isAuth && !viewState.activProfile) {
    return (
      <>
        <TopHeader />
        <Catalog />
      </>
    );
  }
  return (
    <>
      <TopHeader />
      <Account />
    </>
  );
}

export default App;
