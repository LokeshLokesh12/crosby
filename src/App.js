import './App.css';
import Header from './Components/Header'
import MainBody from './Components/MainBody'
import Favorites from './Components/Favorites';
import Background from './Components/Background';
import Journal from './Components/Journal';
import Groupup from './Components/Groupup';
import Giftcard from './Components/Giftcard';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <MainBody/>
        <Favorites/>
        <Background/>
        <Journal/>
        <Groupup/>
        <Giftcard/>
        <Footer/>
    </div>
  );
}

export default App;
