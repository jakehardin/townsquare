import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div className="text-center my-4">
      <Button variant="danger" onClick={signOut}> Sign Out</Button>
      <div className="text-center my-4">
        <Image src={user.photoURL} alt="userURL" width="100px" height="100px" />
        <h1>{user.displayName}</h1>
      </div>
    </div>
  );
}
