import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const amount = useSelector(state => state.amount);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mx-4">Bank of india</span>
    <button disabled={true} className="btn-primary btn-rounded mx-4">Your Balance: {amount}</button>
  </div>
</nav>
  )
}