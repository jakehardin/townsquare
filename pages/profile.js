import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { getMyStories } from '../api/storiesData';
import StoryCard from '../components/StoryCard';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const [stories, setStories] = useState([]);
  const { user } = useAuth();

  const getAllStories = () => {
    getMyStories(user.uid).then(setStories);
  };
  useEffect(() => {
    getAllStories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (

    <div className="text-center my-4">
      <div className="text-right my-4">
        <Button variant="danger" onClick={signOut}> Sign Out</Button>
        <div className="text-center my-4">
          <Image src={user.photoURL} alt="userURL" width="100px" height="100px" />
          <h1>{user.displayName}</h1>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {stories.map((story) => (
          <StoryCard key={story.firebaseKey} storyObj={story} onUpdate={getAllStories} isMine={story.uid === user.uid} />
        ))}
      </div>

    </div>
  );
}
