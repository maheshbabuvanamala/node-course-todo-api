const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log(err);
  }
  console.log('connceted to MongoDB');
  db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log("Not able to fetch",err);
  });

  db.collection('Users').find({name:'Bhavitha'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));

  },(err) => {
    console.log('Noa able to find',err);
  })
  //db.close();
});
