import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewTopicStories } from '../../api/mergedData';
import StoryCard from '../../components/StoryCard';

export default function ViewTopic() {
  const [topicStories, setTopicStories] = useState({});
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
          <StoryCard key={story.topic_id} storyObj={story} onUpdate={seeTheTopicStories} />
        ))}
      </div>
    </>
  );
}
