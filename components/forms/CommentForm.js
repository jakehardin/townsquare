import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createComment, updateComment } from '../../api/commentsData';

const initialState = {
  name: '',
  timestamp: '',
  description: '',
};

function CommentForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();
  const { firebaseKey } = router.query;

  useEffect(() => {
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
        .then(() => router.push(`/comment/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid, story_id: firebaseKey };
      createComment(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateComment(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Comment</h2>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TIMESTAMP INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Timestamp" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter an timestamp"
          name="timestamp"
          value={formInput.timestamp}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DESCRIPTION INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Comment</Button>
    </Form>
  );
}

CommentForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    timestamp: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    stor: PropTypes.string,
    uid: PropTypes.string,
  }),
};

CommentForm.defaultProps = {
  obj: initialState,
};

export default CommentForm;
