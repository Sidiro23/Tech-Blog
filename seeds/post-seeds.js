const { Post } = require('../models');

const postData = [{
        title: 'Bootcamp',
        content: 'I am attending the coding bootcamp',
        user_id: 1

    },
    {
        title: 'Coding',
        content: 'I love coding',
        user_id: 2
    },
    {
        title: 'Javascript',
        content: 'Algorithms are hard',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;