import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author='Sam'
                    date='Today at 6:00'
                    text='Nice blog post!'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author='Jon'
                    date='Today at 7:00'
                    text='Nice blog post 2!'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
