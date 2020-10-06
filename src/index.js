import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail
                avatar={Faker.image.avatar()}
                author='Sam'
                date='Today at 6:00'
                text='Nice blog post!'
            />
             <CommentDetail
                avatar={Faker.image.avatar()}
                author='Jon'
                date='Today at 7:00'
                text='Nice blog post 2!'
            />
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));
