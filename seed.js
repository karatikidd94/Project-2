require('dotenv').config();  // comment out if not using a .env file
require('./config/database');

const Project = require('./models/project');
// contains the seed data
const data = require('./data');

const p1 = Project.deleteMany({});

Promise.all([p1])
  .then(function (results) {
    console.log(results);
    return Project.create(data.project);
  })
  
  .then(process.exit);