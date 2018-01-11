const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if (err)
        return console.log('Unable to connect mongo server');
    console.log('Successfully connected to the mongo server');

/*
    ---------UPDATE TODOS COLLECTIONS------------
*/
    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('5a567064befb297767d0e76a')
    // },{
    //     $set:{
    //         completed : false
    //     }
    // },false).then((res) => {
    //     console.log(res);
    // })

/*
    ------------UPDATE USERS COLLECTIONS [INC AGE]-------------
*/
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5a56662be973c71a9f70b409')
    },{
      $set : {
          name : 'Inosha siriwardhana'
      },
      $inc : {
          age : 1
      }  
    },false).then((res) => {
        console.log(res);
    })
});