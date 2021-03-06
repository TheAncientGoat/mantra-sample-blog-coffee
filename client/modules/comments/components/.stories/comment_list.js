import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
const CommentList = require('../comment_list.coffee');

storiesOf('comments.CommentList', module)
  .add('no comments', () => {
    return (
      <CommentList comments={[]} passedAction={action('create comment')}/>
    );
  })
  .add('with comments', () => {
    const comments = [
      {_id: 'one', text: 'This is cool.', author: 'arunoda'},
      {_id: 'two', text: 'Yeah! I agree.', author: 'sacha'},
    ];
    return (
      <CommentList comments={comments}/>
    );
  })
  .add('saving a comment', () => {
    const comments = [
      {_id: 'one', text: 'This is a new comment.', author: 'arunoda', saving: true},
      {_id: 'two', text: 'Yeah! I agree.', author: 'sacha'},
    ];
    return (
      <CommentList comments={comments}/>
    );
  });
