'use strict';

$().ready(() => {
  const animalsArray = [];
  $.ajax('data/page-1.json', { method: 'GET', dataType: 'JSON' }).then((data) => {
    data.forEach(hornedAnimal => {
      var newAnimal = new Animal(hornedAnimal);
      newAnimal.createRender();

    });
  });
  function Animal(object) {
    this.title = object.title;
    this.description = object.description;
    this.keyword = object.keyword;
    this.horns = object.horns;
    this.image_url = object.image_url;
    animalsArray.push(this);
  }
  Animal.prototype.createRender = function () {
    const $templateClone = $('#photo-template').clone();
    $templateClone.css('display', 'block')
    $templateClone.find('h2').text(this.title);
    $templateClone.find('img').attr('src', this.image_url);
    $templateClone.find('p').text(this.description);
    $('main').append($templateClone)
  };
});