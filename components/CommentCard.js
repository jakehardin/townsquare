import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, DropdownButton, Dropdown,
} from 'react-bootstrap';
import { deleteComment } from '../api/commentsData';

function CommentCard({ commentObj, onUpdate, isMine }) {
  const deleteThisComment = () => {
    if (window.confirm(`Delete ${commentObj.name}?`)) {
      deleteComment(commentObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card id="message-card" className="border-0 hover-overlay ripple shadow-1-strong" style={{ width: '91%', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{commentObj.name}</Card.Title>
        <Card.Subtitle>{commentObj.timestamp}</Card.Subtitle>
        <Card.Text>{commentObj.description}</Card.Text>
        {isMine
          ? (
            <DropdownButton className="position-absolute top-0 end-0" id="dropdown-basic-button" title="" size="sm" variant="light">
              <Dropdown.Item onClick={deleteThisComment}>Delete</Dropdown.Item>
            </DropdownButton>
          )
          : ('')}
      </Card.Body>
    </Card>
  );
}

CommentCard.propTypes = {
  commentObj: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.string,
    uid: PropTypes.bool,
    timestamp: PropTypes.string,
    firebaseKey: PropTypes.string,
    story_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default CommentCard;
