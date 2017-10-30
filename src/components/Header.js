import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul className="nav nav-pills nav-justified">
      <li>
        <NavLink to="/" href="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/create" href="/create" activeClassName="is-active">Create Expense</NavLink>
      </li>
      <li>
        <NavLink to="/help" href="/help" activeClassName="is-active">Help</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
