const { User } = require('../models');

const userData = [{
        username: 'Kim',
        password: '123456'

    },
    {
        username: 'Monica',
        password: '123456'
    },
    {
        username: 'Josh',
        password: '123456'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;