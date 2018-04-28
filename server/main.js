import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.validateNewUser((user)=>{
    // console.log('this is the user', user);
    // I20180428-17:31:27.112(3)? this is the user { createdAt: 2018-04-28T14:31:27.108Z,
    // I20180428-17:31:27.112(3)?   _id: 'm9bffxqur2P79hK6B',
    // I20180428-17:31:27.113(3)?   services:
    // I20180428-17:31:27.113(3)?    { password:
    // I20180428-17:31:27.113(3)?       { bcrypt: '$2a$10$zjPnHTHfp./VIzlaKkz7Bulk2pJLmxMXTX31UCukNCqzRPVLLUc4e' } },
    // I20180428-17:31:27.114(3)?   emails: [ { address: 'hakan@example.com', verified: false } ] }
    const email = user.emails[0].address;
    try {
      new SimpleSchema({
        email: {
          type: String,
          regEx: SimpleSchema.RegEx.Email
        }
      }).validate({email});
    } catch(e) {
      console.log('Thrown exception:', e);
      throw new Meteor.Error(400, e.details[0].message);
    }


    return true;
  });
});
