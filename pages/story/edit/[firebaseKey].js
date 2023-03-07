import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleStory } from '../../../api/storiesData';
import StoryForm from '../../../components/forms/StoryForm';

export default function EditStory() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleStory(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<StoryForm obj={editItem} />);
}
