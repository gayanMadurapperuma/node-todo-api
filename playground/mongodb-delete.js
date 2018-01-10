const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if (err)
        return console.log('Unable to connect mongo server');
    console.log('Successfully connected to the mongo server');
    
/*
    ----------DELETE MANY-------------
*/
    // db.collection('Todos').deleteMany({
    //     text : 'walk the dog'
    // }).then((res) => {
    //     console.log(res)
    // })

/*
    ----------DELETE ONE--------------
*/
    // db.collection('Todos').deleteOne({
    //     completed : false
    // }).then((res) => {
    //     console.log(res);
    // })

/*
    ----------FIND ONE AND DELETE----------
*/

});