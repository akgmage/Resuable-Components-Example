import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h3>Warning</h3>
            <p>Are you sure want to do this?</p>
          </div>
        </ApprovalCard>
        <ApprovalCard> 
          <CommentDetail 
            author="Sam"
            timeAgo="Today at 4:50PM"
            commentText="Nice blog post!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Alex"
            timeAgo="Yesterdat at 6:50PM"
            commentText="Very bad"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Ben"
            timeAgo="Yesterday at 5:50PM"
            commentText="What a drag!"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );

};

ReactDom.render(<App />, document.querySelector('#root'));