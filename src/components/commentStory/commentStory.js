import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getStorys, getStoryId } from '../../service/newsService';

const CommentStory = ({ commentOfComment, text, by }) => {
  const com = commentOfComment && commentOfComment.length;

  const [kidsComments, setKidsComments] = useState([]);
  const [kidsCommentsId, setKidsCommentsId] = useState([]);

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

    const newsComRequests = commentOfComment.map((id) => getStoryId(id));

    Promise.all(newsComRequests).then((promiseAllResponse) => {
      const allDataCom = promiseAllResponse.map((response) => response.data);
      setKidsComments(allDataCom);
    });
  };

  return (
    <div>
      <div className="kidsComents-reviews">
        <div className="kidsComents">
          <div className="kidsComents__text">"{text}"</div>

          <div className="kidsComents__author">
            <div className="kidsComents__author-box">
              author:
              <div className="kidsComents__author-name">
                <div> {by} </div>
              </div>
              <div>
                <div className={classes.root}>
                  <Accordion
                    onChange={(event, expanded) => {
                      if (
                        expanded &&
                        commentOfComment &&
                        commentOfComment.length !== 0
                      ) {
                        handleChange();
                      }
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography component={'span'} variant={'body2'} className={classes.heading}>
                        <div className="kidsComents__number">
                          {com
                            ? commentOfComment && commentOfComment.length
                            : 0}{' '}
                          comments
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={'span'} variant={'body2'}>
                        <div className="kidsComents-reviews">
                          <div className="kidsComents">
                            <div className="kidsComents__text">
                              {kidsComments.map((kids) => (
                                <div key={kids.id} className="kidsComents__accordion">
                                  
                                  <div className="kidsComents__accordion--li">
                                    {kids.text}
                                  </div>
                                  
                                  <div key={kids.text} className="kidsComents__accordion-div kidsComents__author-comments">
                                    author: {kids.by}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CommentStory);
