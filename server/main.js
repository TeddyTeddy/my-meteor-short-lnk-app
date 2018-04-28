import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup
// const petSchema = new SimpleSchema({
//   name: {
//     type: String,
//     min: 1,
//     max: 200,
//     optional: true
//   },
//   age: {
//     type: Number,
//     min: 0
//   },
//   contactNumber: {
//     type: String,
//     optional: true,
//     regEx: SimpleSchema.RegEx.Phone
//   }
// });
//
// petSchema.validate({
//   age: 21,
//   contactNumber: 'abcd233#'
// });

// employeeSchema
// name - a string between 1 to 200 chars
// hourlyWage - a number greater than zero
// email: should be e-mail format
const employeeSchema = new SimpleSchema({
   name: {
     type: String,
     min: 1,
     max: 200
   },
   hourlyWage: {
     type: Number,
     min: 0
   },
   email: {
     type: String,
     regEx: SimpleSchema.RegEx.Email
   }
});

employeeSchema.validate({
  name: 'Hakan',
  hourlyWage: 200,
  email: 'hakan@gmail.com'
});

});
