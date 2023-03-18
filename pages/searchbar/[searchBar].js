import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getStories } from '../../api/storiesData';
import StoryCard from '../../components/StoryCard';

export default function SearchBar() {
  const [searchStories, setSearchStories] = useState([]);

  const router = useRouter();
  const { searchBar } = router.query;

  const searchAllStories = () => {
    getStories().then((stories) => {
      const filteredStories = stories.filter((story) => story.title.toLowerCase().includes(searchBar) || story.description.toLowerCase().includes(searchBar) || story.location.includes(searchBar));

      setSearchStories(filteredStories);
    });
  };

  useEffect(() => {
    searchAllStories();
    return () => {
      setSearchStories([]);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBar]);

  return (
    <>
      <div>
        {searchStories.map((aim) => <StoryCard key={aim.firebaseKey} storyObj={aim} onUpdate={searchAllStories} />)}
      </div>
    </>
  );
}
