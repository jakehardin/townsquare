import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, DropdownButton, Dropdown,
} from 'react-bootstrap';
import Link from 'next/link';
import { deleteStory } from '../api/storiesData';

export default function StoryCard({ storyObj, onUpdate, isMine }) {
  const deleteThisStory = () => {
    if (window.confirm(`Delete ${storyObj.title}?`)) {
      deleteStory(storyObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="shadow mb-5 bg-white rounded" style={{ width: '100%', height: '600px' }}>
      <Card.Img variant="top" src={storyObj.image} alt={storyObj.title} style={{ height: '400px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="fw-bold h4">{storyObj.title}</Card.Title>
        <Card.Text className="mb-2">{storyObj.location}</Card.Text>
        <Card.Text className="text-muted mb-2">{storyObj.name}</Card.Text>
        <Card.Subtitle className="text-muted mb-3">{storyObj.timestamp}</Card.Subtitle>
        <Link href={`/story/${storyObj.firebaseKey}`} passHref>
          <Button variant="info" className="me-3">
            Read Story
          </Button>
        </Link>
        {isMine && (
          <DropdownButton
            className="position-absolute top-0 end-0"
            id="dropdown-basic-button"
            title=""
            size="sm"
            variant="light"
          >
            <Dropdown.Item href={`/story/edit/${storyObj.firebaseKey}`}>Edit</Dropdown.Item>
            <Dropdown.Item onClick={deleteThisStory}>Delete</Dropdown.Item>
          </DropdownButton>
        )}
      </Card.Body>
    </Card>
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
    name: PropTypes.string,
    topic_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
};
