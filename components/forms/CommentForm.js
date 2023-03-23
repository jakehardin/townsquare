import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, FloatingLabel, Form, Stack,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createComment, updateComment } from '../../api/commentsData';
import { getStories } from '../../api/storiesData';

const initialState = {
  description: '',
};

export default function CommentForm({ obj, onUpdate }) {
  const [formInput, setFormInput] = useState(initialState);
  const [, setStories] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { firebaseKey } = router.query;

  const time = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
  });

  useEffect(() => {
    getStories().then(setStories);
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateComment(formInput)
        .then(() => router.push('/'));
    } else {
      const payload = {
        ...formInput, uid: user.uid, timestamp: time, name: user.displayName, story_id: firebaseKey,
      };
      createComment(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateComment(patchPayload).then(() => {
          onUpdate();
          setFormInput(initialState);
        });
      });
    }
  };

  return (
    <Card id="footer" style={{ height: '75px', width: '100%' }}>
      <Form onSubmit={handleSubmit}>
        <Stack direction="horizontal" gap={3}>
          <FloatingLabel style={{ width: '90%' }} className="mb-3" label="Comment" controlId="description">
            <Form.Control
              type="text"
              placeholder="Send"
              name="description"
              value={formInput.description}
              style={{ height: '75px' }}
              onChange={handleChange}
              required
            />
          </FloatingLabel>

          <Button variant="dark" type="submit"> Send
          </Button>
        </Stack>
      </Form>
    </Card>
  );
}

CommentForm.propTypes = {
  obj: PropTypes.shape({
    message: PropTypes.string,
    // channel_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  onUpdate: PropTypes.func,
};

CommentForm.defaultProps = {
  obj: initialState,
  onUpdate: () => {},
};
