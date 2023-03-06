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
    <div className="text-center my-4">
      <Link href="/story/new" passHref>
        <Button>+ Add A Story</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {stories.map((story) => (
          <StoryCard key={story.firebaseKey} storyObj={story} onUpdate={getAllStories} />
        ))}
      </div>

    </div>
  );
}
