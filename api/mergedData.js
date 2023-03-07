import { getStoryComments, getSingleStory } from './storiesData';

const viewPostDetails = (storyFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleStory(storyFirebaseKey), getStoryComments(storyFirebaseKey)])
    .then(([authorObject, authorBooksArray]) => {
      resolve({ ...authorObject, books: authorBooksArray });
    }).catch((error) => reject(error));
});

// eslint-disable-next-line import/prefer-default-export
export { viewPostDetails };
