module.exports = function(app) {
  app.controller('AlbumController', ['$scope', function() {

    // have a directive for each one.
    // show each album of thumbnails, click on thumbnail, show it full size and hide all the other thumbnails in THAT album. show/hide list of descriptions with radio buttons?
    this.sloths = {};
    this.sloths.title = 'Sloths';
    this.sloths.description = 'The slowest and the cutest';
    this.sloths.images = ['http://i.imgur.com/yLQVpWg.jpg', 'http://i.imgur.com/vwPNvtT.jpg', 'http://i.imgur.com/PyMOoJn.jpg', 'http://i.imgur.com/p1zI1rv.jpg', 'http://i.imgur.com/0tA76mt.jpg', 'http://i.imgur.com/5AnQqFq.jpg'];

    this.redPandas = {};
    this.redPandas.title = 'Red Pandas';
    this.redPandas.description = 'Like pandas, but cuter.';
    this.redPandas.images = ['http://i.imgur.com/Bui0wgS.jpg', 'http://i.imgur.com/eziiTe1.jpg', 'http://i.imgur.com/CVsYUNQ.jpg', 'http://i.imgur.com/QuKhUoR.jpg', 'http://i.imgur.com/0YXORaB.jpg', 'http://i.imgur.com/IM5yOVz.jpg', 'http://i.imgur.com/ANsdnaH.jpg'];

    this.kittens = {};
    this.kittens.title = 'Kittens';
    this.kittens .description = 'Nothing needs to be said.';
    this.kittens.images = ['http://i.imgur.com/ozEaj1Z.png', 'http://i.imgur.com/LBfAioO.jpg', 'http://i.imgur.com/a4ZxA5u.jpg', 'http://i.imgur.com/MLsKJLZ.jpg', 'http://i.imgur.com/EqxkgdR.jpg', 'http://i.imgur.com/KBHvE1c.jpg', 'http://i.imgur.com/si8LnGy.jpg'];

    this.animals = [this.sloths, this.redPandas, this.kittens];
  }]);
};