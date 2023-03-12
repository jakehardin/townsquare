import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { getTopics } from '../../api/topicsData';
import { useAuth } from '../../utils/context/authContext';
import { createStory, updateStory } from '../../api/storiesData';

const initialState = {
  title: '',
  image: '',
  location: '',
  description: '',
};

function StoryForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [topics, setTopics] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getTopics(user.uid).then(setTopics);

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
      updateStory(formInput)
        .then(() => router.push(`/story/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createStory(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateStory(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Story</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* LOCATION INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Location" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter location"
          name="location"
          value={formInput.location}
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

      {/* TOPIC SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Topic">
        <Form.Select
          aria-label="topic"
          name="topic_id"
          onChange={handleChange}
          className="mb-3"
          value={obj.topic_id} // FIXME: modify code to remove error
          required
        >
          <option value="">Select a #Topic</option>
          {
            topics.map((topic) => (
              <option
                key={topic.firebaseKey}
                value={topic.firebaseKey}
              >
                {topic.topic_name}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Post</Button>
    </Form>
  );
}

StoryForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    topic_id: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
};

StoryForm.defaultProps = {
  obj: initialState,
};

export default StoryForm;
