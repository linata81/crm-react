import React, {useState} from 'react';
import axios from 'axios';
import {BidsbaseContext} from './bidsbaseContext';

const url = process.env.REACT_APP_DB_URL;

const BidsbaseState = ({children}) => {
  const [bids, setBids] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProduct, setFilterProduct] = useState('all');  

  const getBids = async () => {
    try {
      const res = await axios.get(`${url}/bids.json`);
      const data = Object.keys(res.data).map(key => {
        return {
          ...res.data[key],
          id: key
        }
      })
      setBids(data);
    }
    catch (e){
      throw new Error(e.message)
    }
  }
  
  const getBidById = id => {
    for(const bid of bids){
      if(bid.id === id){
        return bid
      }
    }
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
  
  const editBid = async (id, bid) => {
    try {
      await axios.put(`${url}/bids/${id}.json`, bid);
      getBids();    
    }
    catch (e){
      throw new Error(e.message)
    }
  }
  
  const onChangeFilterStatus = filter => setFilterStatus(filter);
  const onChangeFilterProduct = filter => setFilterProduct(filter);
  
  const filterBids = (items) => {
    switch(filterStatus) {
      case 'all':
        return items.filter(item => item.status !== 'Архивный');
      case 'new':
        return items.filter(item => item.status === 'Новый');
      case 'work':
        return items.filter(item => item.status === 'В работе');
      case 'finish':
        return items.filter(item => item.status === 'Завершен');
      case 'archive':
        return items.filter(item => item.status === 'Архивный');
    default:
      return items;
    }
  }
  
  const filterByProduct = (items) => {
    switch(filterProduct) {
      case 'all':
        return items;
      case 'kitchen':
        return items.filter(item => item.product === 'Кухня');
      case 'salon':
        return items.filter(item => item.product === 'Гостиная');
      case 'bedroom':
        return items.filter(item => item.product === 'Спальня');
      case 'nursery':
        return items.filter(item => item.product === 'Детская');
      case 'closet':
        return items.filter(item => item.product === 'Шкаф-купе');
    default:
      return items;
    }
  }
  
  const visibleBids  = filterBids(filterByProduct(bids));
 
  return (
    <BidsbaseContext.Provider value={{
      bids,
      visibleBids,
      getBids,
      getBidById,
      addBid,
      editBid,
      filterStatus,
      filterProduct,
      onChangeFilterStatus,
      onChangeFilterProduct}}
    >
      {children}
    </BidsbaseContext.Provider>
  );
}

export default BidsbaseState;
