import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteComment } from '../api/commentsData';

function CommentCard({ commentObj, onUpdate }) {
  const deleteThisComment = () => {
    if (window.confirm(`Delete ${commentObj.name}?`)) {
      deleteComment(commentObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card id="message-card" className="border-0 hover-overlay ripple shadow-1-strong" style={{ width: '91%', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{commentObj.name}</Card.Title>
        <Card.Text>{commentObj.description}</Card.Text>
        <Button variant="danger" onClick={deleteThisComment} className="m-2">
          DELETE
        </Button>
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
};

export default CommentCard;
