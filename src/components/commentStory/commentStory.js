import React, { useState, useEffect } from 'react';

import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getCommentUrl } from '../../utils/constants/routerConstants';
import { getStorys, getStoryId } from '../../service/newsService';

const CommentStory = ({ commentId, comment, text, by, history }) => {
  console.log(comment);
  const com = comment && comment.length;

  const [kidsComments, setKidsComments] = useState([]);
  const [kidsCommentsId, setKidsCommentsId] = useState([]);

  const toggleHandler = () => {
    //e.preventDefault();

    console.log('toggle');
    history.push(getCommentUrl(commentId));
    console.log(commentId, 'IdCom');
    console.log(kidsComments, 'ajajaja');
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const classes = useStyles();

  const handleChange = async (event, isExpanded) => {
    const { data } = await getStorys();
    const newsComStoriesIds = data;
    setKidsCommentsId(newsComStoriesIds);

    const newsComRequests = comment.map((id) => getStoryId(id));

    Promise.all(newsComRequests).then((promiseAllResponse) => {
      const allDataCom = promiseAllResponse.map((response) => response.data);
      setKidsComments(allDataCom);
    });

    console.log(kidsCommentsId, 'kids kids');
  };

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
              <div>
                <div className={classes.root}>
                  <Accordion
                    onChange={(event, expanded) => {
                      if (expanded && comment && comment.length !== 0) {
                        handleChange();
                      }
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {com ? comment && comment.length : 0} comments
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {kidsComments.map((kids) => kids.text)}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <p
                    onClick={() => toggleHandler()}
                    class="comments__author-comments"
                  >
                    gidra
                  </p>
                </div>
                {/* <p
                  onClick={() => toggleHandler()}
                  class="comments__author-comments"
                >
                  {com ? comment && comment.length : 0} comments
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CommentStory);
