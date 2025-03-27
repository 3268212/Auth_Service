const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const { User } = require('./models/index');
// const bcrypt = require('bcrypt');
//const UserRepository = require('./repository/user-repository');

const UserService = require('./services/user-service');


const app = express();

const prepareAndStartServer = () =>{
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended: true}));

      app.use('/api', apiRoutes);

      app.listen(PORT, async () => {
          console.log(`Server Started on PORT: ${PORT}`);
          // const repo = new UserRepository();
          // const response = await repo.getById(1);
          // console.log(response);
        //   const incomingpassword = await User.findBypk(3);
        //   const user = await User.findByPk(3);
        //   const response = bcrypt.compareSync(incomingpassword,user.password);
        //   console.log(response);
        const service = new UserService();
        // const newToken = service.createToken({email:"sam3268212@gmail.com", id: 1});
        // console.log("new Token is", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbTMyNjgyMTJAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTc0MzA5NzA0MSwiZXhwIjoxNzQzMTAwNjQxfQ.vmzy_K2T4ebjFaGbLYj46G6BgKk09BbIsMcVdQHNEcc'
        // const response = service.verifyToken(token);
        // console.log(response);
        
      });
}

prepareAndStartServer(); 