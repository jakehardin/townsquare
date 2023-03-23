/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';
import SearchBar from './SearchBar';

export default function NavBar() {
  const { user } = useAuth();
  return (
    <Navbar className="sidebar d-flex flex-column left-sidebar" expand="lg" id="sidebar">
      <div>
        <Link passHref href="/">
          <Navbar.Brand className="nav-link" style={{ marginLeft: '10px' }}>
            <Image src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/9f/26/8d/9f268dd4-327b-b179-215d-3068eb35d5de/source/512x512bb.jpg" alt="userURL" width="60%" height="60%" id="" />
          </Navbar.Brand>
        </Link>
      </div>
      <SearchBar />
      <div>
        <Link passHref href="/profile">
          <Navbar.Brand className="nav-link" style={{ marginLeft: '10px' }}>
            <Image src={user.photoURL} alt="userURL" width="40%" height="40%" id="navbar-profile-image" />
          </Navbar.Brand>
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
