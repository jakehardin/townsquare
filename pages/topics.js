import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getTopics } from '../api/topicsData';
import TopicCard from '../components/TopicCard';

export default function ShowAuthors() {
  const [topics, setTopics] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getTopics(user.uid).then(setTopics);
  }, [user.uid]);
  return (
    <div>{topics.map((topic) => (
      <TopicCard key={topic.firebaseKey} topicObj={topic} />
    ))}
    </div>
  );
}
