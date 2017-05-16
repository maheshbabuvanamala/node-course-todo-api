const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log(err);
  }
  console.log('connceted to MongoDB');
  //deleteMany
  //deltes many records which satisfies query
  db.collection('Users').deleteMany({name:'bannu'}).then((result)=>{
    console.log(result);
  })
  //deleteOne
  //delete single record
  db.collection('Todos').deleteOne({text:'something to do'}).then((result)=>{
    console.log(result);
  })

  //findOneAndDelete
  //find and deletes the record.and it will display deleted record
  db.collection('Todos').findOneAndDelete({text:'Maheshbabu Vanamala'}).then((result) =>{
    console.log(result);
  })
  //db.close();
});
