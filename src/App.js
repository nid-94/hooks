import './App.css';
import Search from './component/Search';
import { MovieData } from './component/MovieData';
import { Navbar } from './component/Navbar/Navbar';
import { FooterContainer } from './containers/footer';


const App = () => {

  return (
    <div>
      <Navbar/>
      <Search MovieData={MovieData}/>
      <FooterContainer/>
    </div>
  )
}

export default App


