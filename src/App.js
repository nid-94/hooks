import './App.css';
import Search from './component/Search';
import { MovieData } from './component/MovieData';

const App = () => {

  return (
    <div>
      <Search MovieData={MovieData}/>
    </div>
  )
}

export default App


