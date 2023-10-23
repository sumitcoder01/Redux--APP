import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';

export default function Card() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const {withdrawMoney,depositeMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div className='container my-5 text-center'>
      <h2>Deposite/Withdraw Money</h2>
      <button className="btn btn-primary mx-3" onClick={()=>{withdrawMoney(100)}}> - </button>
      Update Balance {balance}
      <button className="btn btn-primary mx-3" onClick={()=>{depositeMoney(100)}}> + </button>
    </div>
  )
}

