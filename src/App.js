import './App.css';
import Search from './component/Search';
import { MovieData } from './component/MovieData';
import { Navbar } from './component/Navbar/Navbar';

const App = () => {

  return (
    <div>
      <Navbar/>
      <Search MovieData={MovieData}/>
    </div>
  )
}

export default App


