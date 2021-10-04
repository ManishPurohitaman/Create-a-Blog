const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });
BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite moneytopics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerderyopens up. You know those bullet-point lists. You start spotting them everything at this time of year.They go like this:'
}, (error, blogpost) => {})
BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite moneytopics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerderyopens up. You know those bullet-point lists. You start spotting them everything at this time of year.They go like this:'
}, (error, blogpost) => {})
BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite moneytopics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerderyopens up. You know those bullet-point lists. You start spotting them everything at this time of year.They go like this:'
}, (error, blogpost) => {})
BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite moneytopics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerderyopens up. You know those bullet-point lists. You start spotting them everything at this time of year.They go like this:'
}, (error, blogpost) => {})

const myobj = 0;
const id = "6159b175262e1f265fb7ef55";
BlogPost.find({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite moneytopics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerderyopens up. You know those bullet-point lists. You start spotting them everything at this time of year.They go like this:'
}, (error, blogspot) => {
    console.log(error, blogspot);
})