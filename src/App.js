import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

function App() {
  return (
    <>
      <div style={{margin:"1rem 0", display: "flex", justifyContent: "center",alignItems: "center",flexWrap: "wrap",gap: "1rem"}}>
        <Header/>
        <Nav/>
      </div>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
