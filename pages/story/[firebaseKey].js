/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewPostDetails } from '../../api/mergedData';
import CommentCard from '../../components/CommentCard';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState({});
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
        <div className="d-flex flex-column">
          <img src={postDetails.image} alt={postDetails.first_name} style={{ height: '200px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {postDetails.first_name}{postDetails.last_name}
            {postDetails.favorite ? ' 🤍' : ''}
          </h5>
          Author Email: <a href={`mailto:${postDetails.email}`}>{postDetails.email}</a>
          <hr />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {postDetails.books?.map((comment) => (
          <CommentCard key={comment.firebaseKey} bookObj={comment} onUpdate={seeThePostDetails} />
        ))}
      </div>
    </>
  );
}
