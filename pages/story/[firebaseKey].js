/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewPostDetails, viewStoryTopic } from '../../api/mergedData';
import CommentCard from '../../components/CommentCard';
import CommentForm from '../../components/forms/CommentForm';
import { useAuth } from '../../utils/context/authContext';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState({});
  const [topic, setTopic] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { firebaseKey } = router.query;

  const seeThePostDetails = () => {
    viewPostDetails(firebaseKey).then(setPostDetails);
  };

  useEffect(() => {
    viewPostDetails(firebaseKey).then(setPostDetails);
  }, [firebaseKey]);
  useEffect(() => {
    viewStoryTopic(firebaseKey).then(setTopic);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="">
          <h1>
            {postDetails.title}
          </h1>
          <img src={postDetails.image} alt={postDetails.title} style={{ height: '500px' }} />
          <h5>
            {topic.topicObject?.topic_name}
          </h5>
        </div>
        <div className="">
          <div className="d-flex">
            <h5>
              {postDetails.location}
            </h5>
          </div>
          <div className="d-flex">
            <h5>
              {postDetails.timestamp}
            </h5>
          </div>
          <h5>
            {postDetails.name}
          </h5>
          <h5 style={{ fontWeight: 'bold' }}>
            {postDetails.description}
          </h5>
        </div>
      </div>
      <hr />
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
