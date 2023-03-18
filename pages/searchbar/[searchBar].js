import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getStories } from '../../api/storiesData';
import StoryCard from '../../components/StoryCard';

export default function SearchBar() {
  const [searchMessages, setSearchMessages] = useState([]);

  const router = useRouter();
  const { searchBar } = router.query;

  const searchAllMessages = () => {
    getStories().then((messages) => {
      const filteredMessages = messages.filter((message) => message.message.toLowerCase().includes(searchBar) || message.name.toLowerCase().includes(searchBar) || message.timestamp.includes(searchBar));

      setSearchMessages(filteredMessages);
    });
  };

  useEffect(() => {
    searchAllMessages();
    return () => {
      setSearchMessages([]);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBar]);

  return (
    <>
      <div>
        {searchMessages.map((aim) => <StoryCard key={aim.firebaseKey} messageObj={aim} onUpdate={searchAllMessages} />)}
      </div>
    </>
  );
}
