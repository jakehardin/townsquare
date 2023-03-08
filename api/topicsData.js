import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTopics = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/topics.json`, {
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

const getSingleTopic = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/topics/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getTopicStories = (topicFirebaseKey) => new Promise((resolve, reject) => {
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
  getTopics,
  getSingleTopic,
  getTopicStories,
};
