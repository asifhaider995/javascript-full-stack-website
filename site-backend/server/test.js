var models = require('./server.js').models;

/////////  Creating Profiles  ////////////////

// models.Profile.create({name: 'Nick'}, (err, profile) => {
//   console.log("Profile?: ", err, profile);
// })

// models.Profile.upsert({name: "Asif"}, (error, profile) => {
//   console.log("Created? ", err, profile);
// }) // Updates

// models.Profile.findOrCreate({name: "Asif"}, (error, profile) => {
//   console.log("Created? ", err, profile);
// }) // Used mostly for Updates


/////////  Updating Profiles  ////////////////

// models.Profile.findOrCreate({name: "Asif"}, (error, profile) => {
//   if(error) {
//     console.error("Error Occured")
//   } else if(profile) {
//     profile.updateAttributes({
//       email: 'asif.haider@northsouth.edu'
//     }, (updateErr, updated) => {
//       console.log("Updated?: ", updateErr, updated)
//     })
//   }
// }) // Updates profile


// models.Profile.findOrCreate({name: "Asif"}, (error, profile) => {
//   if(error) {
//     console.error("Error Occured")
//   } else if(profile) {
//     profile.email = "asif.haider@northsouth.edu",
//     profile.save((updateErr, updated) = {
//       console.log("Updated?: ", updateErr, updated);
//     });
//   }
// }) // Updates profile

/////////  Finding Model Instances  ////////////////

// var toSave = [
//   {name: "Nick", email: "nick@germain.com"},
//   {name: "Nico", email: "nico@germ.com"},
//   {name: "Fariha", email: "fariha@noshin.com"},
//   {name: "Asif", email: "asif@germain.com"},
//   {name: "Haider", email: "haider@germain.com"},
//   {name: "Asif", email: "asif@haider.com"},
//   {name: "Ishmam", email: "ishmam@germain.com"},
// ]
//
// toSave.map( items => {
//   models.Profile.create(items, (err, created) => {
//     console.log("Created? : ", err, created);
//   })
// })

var filter = {
  where: {
    name: {like: "F"}
  },
  order: 'date ASC', //
  limit: 10
}
//
// var filter2 = {
//   where: {
//     name: {like: "F"}
//   },
//   order: 'date ASC', //
//   limit: 10,
//   skip: 0,
//   fields: {
//     email: true  // Returns only email
//   }
// }

// models.Profile.findOne({where: {name: 'Asif'}, order: 'id DESC'}, (err, found) => {
//   console.log("Found?: ", err, found)
// })

// models.Profile.find({where: {name: 'Asif'}, order: 'id DESC'}, (err, found) => {
//   console.log("Found?: ", err, found)
// })

// models.Profile.findOne(filter2, (err, found) => {
//   console.log("Found?: ", err, found)
// })

/////////  Deleting Model Instances  ////////////////

// models.Profile.findById("5f50dab03a05169d85ede980", (err, found) => {
//   console.log('Found?: ', err, found);
//   if(found) {
//     found.destroy();
//   }
// })

// models.Profile.destroyById("5f50dab03a05169d85ede980", (err, found) => {
//   console.log('Found?: ', err, found);
//   if(found) {
//     found.destroy();
//   }
// })


models.Profile.destroyAll(filter.where , (err, destroyed) => {
  console.log('Destroyed? ',err,destroyed);
})

// models.Profile.findById("5f50dab03a05169d85ede980", {include: 'Posts'}, (err, found) => {
//   console.log('Found?: ', err, found);
//   if(found) {
//     found.Posts.destroyAll({date: {lte: new Date('2019-02-04')}})
//   }
// })  // Destroys all post prior to a specific date, from user of Id ...
