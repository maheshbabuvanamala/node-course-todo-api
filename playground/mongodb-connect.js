const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log(err);
  }
  console.log('connceted to MongoDB');
//  db.collection('Todos').insertOne({
//    text:'something to do',
//    completed:false
//  },(err,result) => {
//    if(err){
//      return console.log('Unable to insert Todo');
  //  }
  //  console.log(JSON.stringify(result.ops,undefined,2));
  //});

  db.collection('Users').insertOne({
    name:'Maheshbabu Nani',
    age:23,
    location:'Banglore'
  },(err,result) => {
    if(err){
      return console.log('Unable to insert User');
    }
    console.log(result.ops[0]._id.getTimestamp());
  });


  db.close();
});
