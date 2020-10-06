import React from 'react';

const CommentDetail = (props) => {
    const {avatar, author, date, text} = props;
    return (
        <div className='comment'>
            <a className='avatar' href='/'>
                <img src={avatar} alt='avatar' />
            </a>
            <div className='content'>
                <a className='author' href='/'>
                    {author}
                </a>
                <div className='metadata'>
                    <span className='date'>{date}</span>
                </div>
                <div className='text'>{text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
