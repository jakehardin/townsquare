import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
// eslint-disable-next-line import/named
import { deleteStory } from '../api/storiesData';

export default function StoryCard({ storyObj, onUpdate }) {
  const deleteThisStory = () => {
    if (window.confirm(`Delete ${storyObj.title}?`)) {
      deleteStory(storyObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={storyObj.image} alt={storyObj.title} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{storyObj.title}</Card.Title>
          <Card.Text>{storyObj.location}</Card.Text>
          <Link href={`/story/${storyObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE Author DETAILS  */}
          <Link href={`/story/edit/${storyObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisStory} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

StoryCard.propTypes = {
  storyObj: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
    location: PropTypes.string,
    timestamp: PropTypes.string,
    title: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
