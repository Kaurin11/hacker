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
      <div class="kidsComents-reviews">
        <div class="kidsComents">
          <div class="kidsComents__text">"{text}"</div>

          <div class="kidsComents__author">
            <div class="kidsComents__author-box">
              author:
              <div class="kidsComents__author-name">
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
                      <Typography className={classes.heading}>
                        <div class="kidsComents__number">
                          {com
                            ? commentOfComment && commentOfComment.length
                            : 0}{' '}
                          comments
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <div class="kidsComents-reviews">
                          <div class="kidsComents">
                            <div class="kidsComents__text">
                              {kidsComments.map((kids) => (
                                <ul class="kidsComents__accordion">
                                  {' '}
                                  <li class="kidsComents__accordion--li">
                                    {kids.text}
                                  </li>
                                  <tr key={kids.text} />
                                  <td class="kidsComents__accordion--td kidsComents__author-comments">
                                    author: {kids.by}
                                  </td>
                                </ul>
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
