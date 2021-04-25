import './App.css';
import { useSelector } from 'react-redux';
import MainPage from './components/mainPage';
import Catalog from './components/catalog';
import Account from './components/account';
import TopHeader from './components/topHeader';
import Footer from './components/footer';
import HomeIndicator from './components/homeIndicator';

function App() {
  const viewState = useSelector((state) => state);
  if (!viewState.isAuth) {
    return (
      <>
        <TopHeader />
        <MainPage />
        <HomeIndicator />
      </>
    );
  }
  if (viewState.isAuth && !viewState.activProfile) {
    return (
      <>
        <TopHeader />
        <Catalog />
        <Footer />
      </>
    );
  }
  return (
    <>
      <TopHeader />
      <Account />
      <Footer />
    </>
  );
}

export default App;
