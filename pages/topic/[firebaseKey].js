import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewTopicStories } from '../../api/mergedData';
import StoryCard from '../../components/StoryCard';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { useAuth } from '../../utils/context/authContext';

export default function ViewTopic() {
  const [topicStories, setTopicStories] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { firebaseKey } = router.query;

  const seeTheTopicStories = () => {
    viewTopicStories(firebaseKey).then(setTopicStories);
  };

  useEffect(() => {
    viewTopicStories(firebaseKey).then(setTopicStories);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap" />
      <div className="d-flex flex-wrap">
        {topicStories.stories?.map((story) => (
          <StoryCard key={story.topic_id} storyObj={story} onUpdate={seeTheTopicStories} isMine={story.uid === user.uid} />
        ))}
      </div>
    </>
  );
}
