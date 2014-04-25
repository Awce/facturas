export default Ember.Route.extend({
  model: function() {
    return { date: Date() };
  }
});