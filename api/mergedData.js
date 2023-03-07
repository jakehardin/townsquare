import { getStoryComments, getSingleStory } from './storiesData';

const viewPostDetails = (storyFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleStory(storyFirebaseKey), getStoryComments(storyFirebaseKey)])
    .then(([storyObject, storyCommentsArray]) => {
      resolve({ ...storyObject, comments: storyCommentsArray });
    }).catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { viewPostDetails };
