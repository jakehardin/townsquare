/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();
  return (
    <Navbar className="sidebar d-flex flex-column left-sidebar" expand="lg" id="sidebar">
      <div>
        <Link passHref href="/profile">
          <Navbar.Brand className="navbar-brand" style={{ marginLeft: '10px' }}>
            <Image src={user.photoURL} alt="userURL" width="40%" height="40%" id="navbar-profile-image" />
          </Navbar.Brand>
        </Link>
      </div>
      <div>
        <Link passHref href="/">
          <a className="navbar-brand">
            TownSquare
          </a>
        </Link>
      </div>
      <div>
        <Link passHref href="/mystories">
          <a className="nav-link">
            My Stories
          </a>
        </Link>
      </div>
      <div>
        <Link passHref href="/topics">
          <a className="nav-link">
            Topics
          </a>
        </Link>
      </div>
    </Navbar>
  );
}
