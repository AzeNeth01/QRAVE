//Module Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * @author ampats04(Jeremy Andy F. Ampatin)
 * Header Component
 */
export default function Header() {

    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/#about">About Us</NavLink>
        <NavLink activeClassName="active" to="/#solution">Services</NavLink>
        <NavLink activeClassName="active" to="/#contact">Contact</NavLink>
      </nav>
    );
  }
