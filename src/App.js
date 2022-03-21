import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LeftPanel from './components/LeftPanel';
import AllBids from './components/AllBids';
import EditBid from './components/EditBid';
import NewBid from './components/NewBid';
import BidsbaseState from './context/BidsbaseState';
import './App.css';

function App() {
  
  return (
    <BidsbaseState>
      <BrowserRouter>
        <div className="App">
          <LeftPanel/>
          <Routes>
            <Route path='/' element={<AllBids />}/>
            <Route path='/crm-edit-bids' element={<EditBid />}/>
            <Route path='/crm-new-bid' element={<NewBid />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </BidsbaseState>
  );
}

export default App;
