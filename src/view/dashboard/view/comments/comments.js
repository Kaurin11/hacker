import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';
import { getStoryId } from '../../../../service/newsService';

import { getComment } from '../../../../service/newsService';
import CommentStory from '../../../../components/commentStory/commentStory';

const Comments = ({ match }) => {
  const [comment, setComments] = useState([]);
  const [currentId, setId] = useState();

  useEffect(async () => {
    const { id } = match.params;
    console.log(match.params);
    const { data } = await getStoryId(id);
    const backendCooments = data.kids;
    setId(backendCooments);

    console.log(data, 66);
    console.log(backendCooments, 44);

    const commentStory = backendCooments;
    Promise.all(commentStory.map((id) => getComment(id))).then((data) => {
      setComments(data.map((response) => response.data));
    });
  }, []);

  console.log(comment, 11111);

  return (
    <div class="section-comment">
      {comment.map((com) => {
        return (
          <CommentStory
            commentId={com.id}
            key={com.id}
            by={com.by}
            text={com.text}
            comment={com.kids}
          />
        );
      })}
    </div>
  );
};

export default withRouter(Comments);
