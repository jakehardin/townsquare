import { getStoryComments, getSingleStory } from './storiesData';
import { getTopicStories, getSingleTopic } from './topicsData';

const viewPostDetails = (storyFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleStory(storyFirebaseKey), getStoryComments(storyFirebaseKey)])
    .then(([storyObject, storyCommentsArray]) => {
      resolve({ ...storyObject, comments: storyCommentsArray });
    }).catch((error) => reject(error));
});

const viewTopicStories = (topicFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTopic(topicFirebaseKey), getTopicStories(topicFirebaseKey)])
    .then(([topicObject, topicStoriesArray]) => {
      resolve({ ...topicObject, stories: topicStoriesArray });
    }).catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { viewPostDetails, viewTopicStories };
