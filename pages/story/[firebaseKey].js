/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewPostDetails } from '../../api/mergedData';
import CommentCard from '../../components/CommentCard';
import CommentForm from '../../components/forms/CommentForm';
import { useAuth } from '../../utils/context/authContext';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { firebaseKey } = router.query;

  const seeThePostDetails = () => {
    viewPostDetails(firebaseKey).then(setPostDetails);
  };

  useEffect(() => {
    viewPostDetails(firebaseKey).then(setPostDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex">
          <img src={postDetails.image} alt={postDetails.title} style={{ height: '200px' }} />
          <h5>
            {postDetails.topic_id}
          </h5>
        </div>
        <div className="text-white ms-5 details">
          <h1>
            {postDetails.title}
          </h1>
          <h5>
            {postDetails.location}
          </h5>
          <h5>
            {postDetails.description}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {postDetails.comments?.map((comment) => (
          <CommentCard key={comment.story_id} commentObj={comment} onUpdate={seeThePostDetails} isMine={comment.uid === user.uid} />
        ))}
      </div>
      <div style={{
        backgroundColor: '#F8F8F8',
      }}
      >
        <CommentForm onUpdate={seeThePostDetails} />
      </div>
    </>
  );
}
