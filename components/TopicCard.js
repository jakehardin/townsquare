import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
// eslint-disable-next-line import/named

export default function TopicCard({ topicObj }) {
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{topicObj.topic_name}</Card.Title>
          <Link href={`/topic/${topicObj.firebaseKey}`} passHref>
            <Button>View Stories</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

TopicCard.propTypes = {
  topicObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    topic_name: PropTypes.string,
  }).isRequired,
};
