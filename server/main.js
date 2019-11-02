import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';

onPageLoad( sink => console.log( sink.request.url ) );

Meteor.startup(() => {
  // code to run on server at startup
});
