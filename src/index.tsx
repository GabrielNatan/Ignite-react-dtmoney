import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from "miragejs";

createServer({
  models:{
    transitions:Model
  },
  seeds(server){
    server.db.loadData({
      transitions:[
        {
          id:1,
          title:'Freelance de web',
          type:'deposit',
          category: 'Desenvolvimento',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:35:45'),
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api';

    this.get('/transitions',()=>{
      return this.schema.all('transitions')
    })

    this.post('/transitions',(schema,request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transitions',data)
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


