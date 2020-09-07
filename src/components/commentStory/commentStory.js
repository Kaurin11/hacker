import React from 'react';

import { getCommentUrl } from '../../utils/constants/routerConstants';

const CommentStory = ({ commentId, comment, text, by, history }) => {
  const com = comment && comment.length;

  //   const toggleHandler = () => {
  //     //e.preventDefault();

  //     console.log('toggle');
  //     history.push(getCommentUrl(commentId));
  //   };
  return (
    <div>
      <div class="comments-reviews">
        <div class="comments">
          <div class="comments__text">"{text}"</div>

          <div class="comments__author">
            <div class="comments__author-box">
              author:
              <div class="comments__author-name">
                <div> {by} </div>
              </div>
              <p
                // onClick={() => toggleHandler()}
                class="comments__author-comments"
              >
                {com ? comment && comment.length : 0} comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentStory;
