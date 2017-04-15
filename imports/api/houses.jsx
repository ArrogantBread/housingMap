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
			lng: lng,
			playerName: "",
			groupName: ""
		});
	},
	'houses.remove'(id) {
		check(id, String);

		//--- Can only add a house if they are authorized.
		//if (!Meteor.userId()) throw new Meteor.Error('not-authorized');

		//--- The true means that we can only delete ONE document.
		Houses.remove(id);
	},
	'houses.update'(id, playerName, groupName) {
		check(id, String);
		check(playerName, String);
		check(groupName, String);

		//--- Can only add a house if they are authorized.
		//if (!Meteor.userId()) throw new Meteor.Error('not-authorized');

		Houses.update(id, {
			$set: {
				playerName: playerName,
				groupName: groupName
			}
		});
	},
});
