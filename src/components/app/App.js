import NavBar from '../navbar/navbar';
import Main from '../main/main';
import Footer from '../footer/footer';

import './App.css';

function App() {
  return (
    <div className="wrapper-container">
      <header className="header">
        <NavBar/>
      </header>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
