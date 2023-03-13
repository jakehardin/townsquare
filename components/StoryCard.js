import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, DropdownButton, Dropdown,
} from 'react-bootstrap';
import Link from 'next/link';
// eslint-disable-next-line import/named
import { deleteStory } from '../api/storiesData';

export default function StoryCard({ storyObj, onUpdate, isMine }) {
  const deleteThisStory = () => {
    if (window.confirm(`Delete ${storyObj.title}?`)) {
      deleteStory(storyObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '25rem', margin: '10px' }}>
        <Card.Img variant="top" src={storyObj.image} alt={storyObj.title} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{storyObj.title}</Card.Title>
          <Card.Text>{storyObj.location}</Card.Text>
          <Card.Text>{storyObj.name}</Card.Text>
          <Link href={`/story/${storyObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          {isMine
            ? (
              <DropdownButton className="position-absolute top-0 end-0" id="dropdown-basic-button" title="" size="sm" variant="light">
                <Dropdown.Item href={`/story/edit/${storyObj.firebaseKey}`}>Edit</Dropdown.Item>
                <Dropdown.Item onClick={deleteThisStory}>Delete</Dropdown.Item>
              </DropdownButton>
            )
            : ('')}
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
    name: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
};
