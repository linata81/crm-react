import React, {useState} from 'react';
import axios from 'axios';
import {BidsbaseContext} from './bidsbaseContext';

const url = process.env.REACT_APP_DB_URL;

const BidsbaseState = ({children}) => {
  const [bids, setBids] = useState([]);

  const getBids = async () => {
    const res = await axios.get(`${url}/bids.json`);
    const data = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })
    setBids(data);
  }
  const addBid = async (bid) => {
    try {
      await axios.post(`${url}/bids.json`, bid);
      getBids();    
    }
    catch (e){
      throw new Error(e.message)
    }
  }
  
  // const onChangeIdCounter = () => {
  //   setIdCounter(idCounter + 1);
  // }
  
  return (
    <BidsbaseContext.Provider value={{bids, getBids, addBid}}>
      {children}
    </BidsbaseContext.Provider>
  );
}

export default BidsbaseState;
