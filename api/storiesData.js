import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getStories = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stories.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getMyStories = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stories.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleStory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stories/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createStory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stories.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const updateStory = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stories/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const deleteStory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stories/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getStoryComments = (storyFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/comments.json?orderBy="story_id"&equalTo="${storyFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getStoryTopic = (topicFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stories.json?orderBy="topic_id"&equalTo="${topicFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applications.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getStories,
  getSingleStory,
  createStory,
  updateStory,
  deleteStory,
  getStoryComments,
  getMyStories,
  getStoryTopic,
};
