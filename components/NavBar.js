/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();
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
              <Link passHref href="/">
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
            <Link passHref href="/profile">
              <Navbar.Brand className="navbar-brand" style={{ marginLeft: '1050px' }}>
                <Image src={user.photoURL} alt="userURL" width="40%" height="40%" id="navbar-profile-image" />
              </Navbar.Brand>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
