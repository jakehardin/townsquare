import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMyStories } from '../api/storiesData';
import StoryCard from '../components/StoryCard';
import { useAuth } from '../utils/context/authContext';

export default function MyStories() {
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
      <Link href="/story/new" passHref>
        <Button>+ Add A Story</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {stories.map((story) => (
          <StoryCard key={story.firebaseKey} storyObj={story} onUpdate={getAllStories} isMine={story.uid === user.uid} />
        ))}
      </div>

    </div>
  );
}
