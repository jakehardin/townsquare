/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="navbar-brand">
                  TownSquare
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/mystories">
                <a className="nav-link">
                  My Stories
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/topics">
                <a className="nav-link">
                  Topics
                </a>
              </Link>
            </li>
            <button type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
