import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
Messages = new Meteor.Collection('messages');
});
