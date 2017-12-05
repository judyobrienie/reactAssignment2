var mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost/modelListdb');
var Cage = require('../api/cages/cage.model');
var Post = require('../api/posts/post.model');

  Cage.find({}).remove(function() {
      Cage.create({
          price: '400',
          imageUrl: 'four-door-cage',
          image: 'images/cages/cage.jpg',
          name: 'Four Door Cage',
          snippet: 'Stainless Steel Four Door Cage.'
      },
      {
          price: '200',
          imageUrl: 'two-door-crates',
          image: 'images/cages/dogcrates.jpg',
          name: 'Two Door Dog Crates',
          snippet: 'Stainless Steel Two Door Dog Crates.'
      },
      {
          price: '300',
          imageUrl: 'stainless-steel-van-floor',
          image: 'images/cages/dogvan.jpg',
          name: 'Stainless Steel Van Floor',
          snippet: 'Stainless Steel Van Floor.'
      },
      {
          price: '500',
          imageUrl: 'four-door-cage',
          image: 'images/cages/fourdoorcage.jpg',
          name: 'Four Door Cage',
          snippet: 'Stainless Steel Four Door Cage.'
      },
      {
          price: '100',
          imageUrl: 'two-door-greyhound-cage',
          image: 'images/cages/greyhoundcage.jpg',
          name: 'Two Greyhound Cage',
          snippet: 'Stainless Steel Two Door Greyhound Cage.'
      },
      {
          price: '600',
          imageUrl: 'puppies-cage',
          image: 'images/cages/puppycages.jpg',
          name: 'Puppies Cage',
          snippet: 'Stainless Steel Six Puppies Cage.'
      },
      {
          price: '350',
          imageUrl: 'side-door-cage',
          image: 'images/cages/sidedoorcage.jpg',
          name: 'Side Door Cage',
          snippet: 'Stainless Steel Side Door Cage.'
      },
      {
          price: '100',
          imageUrl: 'standalone-cage',
          image: 'images/cages/standalone.jpg',
          name: 'Standalone Cage',
          snippet: 'Stainless Steel Standalone Two Door Cage.'
      },
      {
          price: '380',
          imageUrl: 'two-door-cage',
          image: 'images/cages/twodoorcage.jpg',
          name: 'Two Doors Cage',
          snippet: 'Stainless Steel Four Door Cage.'
      },  function () {
        process.exit()
    });

 });
  

  Post.find({}).remove(function () {
      Post.create({
          title: 'Greyhound Cages Ireland.',
          link: 'http://www.transcagesireland.com/',
          comments: [],
          upvotes: 0
      }, {
          title: 'Roof Vents and Roof Fans.',
          link: 'http://www.transcagesireland.com/roof-vents-ireland/',
          comments: [],
          upvotes: 0
          },
      {
          title: 'Dog Crates',
          link: 'http://www.transcagesireland.com/dog-crates-ireland/',
          comments: [],
          upvotes: 0
      }, function () {
         process.exit()
      });

  });