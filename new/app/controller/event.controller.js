const Event = require("../model/master");
module.exports = {
  showAll: (req, res) => {
    Event.find({}, (err, allEvents) => {
      if (err) {
        res.status(404);
        res.send("not found");
      }
      res.render("pages/events", { title: "event", events: allEvents });
    });
  },
  createNew: (req, res) => {
    res.render("pages/create", { title: "create new" });
  },
  prossesOfCreate: (req, res) => {
    const event = new Event({
      name: req.body.name,
      description: req.body.description
    });
    event.save(err => {
      if (err) throw err;
      res.redirect(`/event`);
    });
  },
  showOne: (req, res) => {
    Event.findOne({ slug: req.params.slug }, (err, one) => {
      if (err) {
        res.status(404);
        res.send("Events Not Found");
      }
      res.render("pages/one", { event: one, title: "one event" });
    });
  },
  editOne: (req, res) => {
    Event.findOne({ slug: req.params.slug }, (err, event) => {
      res.render("pages/edit", { title: "edit page", event: event });
    });
  },
  processEdit: (req, res) => {
    Event.findOne({ slug: req.params.slug }, (err, event) => {
      (event.name = req.body.name), (event.description = req.body.description);
      event.save(err => {
        res.redirect(`/event`);
      });
    });
  },
  deletOne: (req, res) => {
    Event.deleteOne({ slug: req.params.slug }, err => {
      res.redirect(`/event`);
    });
  }
};
