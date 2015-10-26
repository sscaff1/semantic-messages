Template.messageList.helpers({
	messages: function() {
		return Messages.collection.find();
	}
});

Template.messageItem.onRendered(function() {
  var messageCurrent = this.data;
  Meteor.setTimeout(function () {
    Messages.collection.remove(messageCurrent._id);
  }, 3000);
});
