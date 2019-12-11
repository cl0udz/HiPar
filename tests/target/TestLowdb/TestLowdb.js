const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

var data = {
    posts:{
        id: 1,
        title: 'lowdb is awesome'
    },
    uname: 'typicode',
    cname: 'count'
};

function test(input){
    // Set some defaults (required if your JSON file is empty)

    db.defaults({ posts: [], user: {}, count: 0  })
       .write();

    // Add a post

    db.get('posts')
      .push(data.posts)
      .write();

    // Set a user using Lodash shorthand syntax

    db.set('user.name', data.uname)
      .write();
           
    // Increment count

    db.update(data.cname, n => n + 1)
      .write();
}

var utils = require("../TestcaseUtils.js");
utils.entry(test, data, __dirname);
