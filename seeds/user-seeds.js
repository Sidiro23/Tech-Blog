const { User } = require('../models');

const userData = [{
        username: 'bob',
        password: 'bobbob'

    },
    {
        username: 'bill',
        password: 'billy'
    },
    {
        username: 'Maria',
        password: 'maria'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;