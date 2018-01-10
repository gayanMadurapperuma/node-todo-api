const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if (err)
        return console.log('Unable to connect mongo server');
    console.log('Successfully connected to the mongo server');
    
/*
    -----------FETCH DATA BY COMPLETED : FALSE----------------
*/
    // db.collection('Todos').find({completed : false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     if (err)
    //         return console.log('unable to fetch data ', err);
    // })

/*
    ------------FETCH DATA BY _ID------------------
*/

    // db.collection('Todos').find({
    //     _id : new ObjectID('5a564c3b37331f0ef895d583')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     if (err)
    //         return console.log('Unable to fetch data, ', err)
    // })

/*
    ------------FETCH DATA BY NAME : GAYAN MADURAPPERUMA------------
*/

    db.collection('Users').find({
        name : 'gayan madurapperuma'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        if (err)
            return console.log('Unable to fetch data, ', err);
    })
});