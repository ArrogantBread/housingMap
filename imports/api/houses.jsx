import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Houses = new Mongo.Collection('houses');

Meteor.methods({
	'houses.insert'(lat, lng) {
		//--- Check the parameters
		check(lat, Number);
		check(lng, Number);

		//--- Can only add a house if they are authorized.
		//if (!Meteor.userId()) throw new Meteor.Error('not-authorized');

		Houses.insert({
			lat: lat,
			lng: lng
		});
	},
});
