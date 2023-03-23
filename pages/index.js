/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getStories } from '../api/storiesData';
import StoryCard from '../components/StoryCard';
import { useAuth } from '../utils/context/authContext';

export default function MainPage() {
  const [stories, setStories] = useState([]);
  const { user } = useAuth();

  const getAllStories = () => {
    getStories(user.uid).then(setStories);
  };
  useEffect(() => {
    getAllStories();
  }, []);
  return (
    <div>
      <Link href="/story/new" passHref>
        <Button variant="light" className="m-2">+ Add A Story</Button>
      </Link>
      <div className="mr-3 m-4">
        <div className="d-flex flex-wrap">
          {stories.map((story) => (
            <StoryCard key={story.firebaseKey} storyObj={story} onUpdate={getAllStories} isMine={story.uid === user.uid} />
          ))}
        </div>

      </div>
    </div>
  );
}
