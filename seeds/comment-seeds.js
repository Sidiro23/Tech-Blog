const { Comment } = require('../models');

const commentData = [{
        comment_text: "I just started coding",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is a sample comment",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I hope this works",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;