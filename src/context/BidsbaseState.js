import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BidsbaseContext} from './bidsbaseContext';

const BidsbaseState = ({children}) => {
    
  const [bids, setBids] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  
  // const fetchBids = async () => {
  //   await axios.get(`http://localhost:3001/DB`);
  // };

  useEffect(() => {
    axios.get(`http://localhost:3001/DB`)
      .then(res => {
        const bids = res.data.DB.bids;
        setBids(bids);
        const id = res.data.DB.idCounter;
        setIdCounter(id);
      })
  },[]);
  
  // const onChangeIdCounter = () => {
  //   setIdCounter(idCounter + 1);
  // }
  
  return (
    <BidsbaseContext.Provider value={{bids, idCounter}}>
      {children}
    </BidsbaseContext.Provider>
  );
}

export default BidsbaseState;
