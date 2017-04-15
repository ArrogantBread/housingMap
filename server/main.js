import { Meteor } from 'meteor/meteor';
import { Houses } from '../imports/api/houses.jsx';

Meteor.startup(() => {
  //--- This locks the Houses database from direct client side updates.
  Houses.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
  });
});
