const express = require('express');

const routerApi = require('./routes/index');
const cors = require('cors');

const app = express();


const port = process.env.PORT || 3000;

// para poder manejar datos tipo json
app.use(express.json());

const whitelist = ['http://localhost:3000','http://myapp.com'];
const options = {
  origin: (origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true);
    }else{
      callback(new Error('acceso no permitido'));
    }
  }
}

app.use(cors());



routerApi(app);



app.listen(port, ()=>{
  console.log('Mi port'+port);
});

