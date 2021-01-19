import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';
import { getStoryId } from '../../../../service/newsService';

import { getComment } from '../../../../service/newsService';
import CommentStory from '../../../../components/commentStory/commentStory';

const Comments = ({ match }) => {
  const [commentOfStory, setCommentOfStory] = useState([]);
  const [currentId, setId] = useState();

  useEffect(() => {

    const getData = async() => {
      const { id } = match.params;
      const { data } = await getStoryId(id);
      const backendComments = data.kids;
      setId(backendComments);
      console.log(currentId);
  
      const commentStory = backendComments;
      Promise.all(commentStory.map((id) => getComment(id))).then((data) => {
        setCommentOfStory(data.map((response) => response.data));
      });
    };

    getData();
   
  }, []);

  return (
    <div className="section-comment">
      {commentOfStory.map((coment) => {
        return (
          <CommentStory
            commentId={coment.id}
            key={coment.id}
            by={coment.by}
            text={coment.text}
            commentOfComment={coment.kids}
          />
        );
      })}
    </div>
  );
};

export default withRouter(Comments);
