// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

console.log(Object.keys(app.models))

app.models.user.find((error, result)=>{
  if (result.length === 0) {
    const user = {
      email: 'asif@asif.com',
      password: 'test',
      username: 'asif',
    };

    app.models.user.create(user, (error, result) => {
      console.log("Tried to create user", error, result)
    });
  }
})

app.models.user.afterRemote('create', (ctx, user, next) => {
    console.log("New User: ", user);
    app.models.Profile.create({
      "first_name": user.username,
      "created_at": new Date(),
      "userId": user.id
    }, (error, result) => {
      if(!error && result) {
        console.log("New Profile created ", result);
      } else {
        console.log(error)
      }
    })
    next();
})


/// Role mapping -> 'admin' Role creation
// Filter used inside find()
app.models.Role.find({where: {name: 'admin'}}, (err, role) => {
  if(!err && role) {
    console.log("Role present, role is ", role);
    if(role.length === 0) {
      app.models.Role.create({
        name: 'admin',
      }, (roleErr, roleRes) => {
        if(!roleErr && roleRes) {
          console.log("Role created, result: ",roleRes);
          app.models.user.findOne( (userErr, user) => {
            if(!userErr && user) {
              roleRes.principals.create({
                principalType: app.models.RoleMapping.USER,
                principalId: user.id,
              }, (principalErr, principal) => {
                console.log('Created principal?', principalErr, principal);
              })
            }
          })
        }
      })
    }
  }
});


app.models.Role.find({where: {name: 'editor'}}, (roleErr, role) => {
  if( !roleErr && role) {
    if(role.length === 0) {
      app.models.Role.create({
        name: 'editor',
      }, (createErr, created) => {
        if(!createErr && created) {
          console.log("Created?", createErr, created);
        }
      })
    }
  }
})
