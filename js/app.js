'use strict';

$().ready(() => {
  const animalsArray = [];
  $.ajax('data/page-1.json', { method: 'GET', dataType: 'JSON' }).then((data) => {
    data.forEach(hornedAnimal => {
      var newAnimal = new Animal(hornedAnimal);
      newAnimal.createHTML();

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
  // Animal.prototype.createRender = function () {
  //   const $templateClone = $('#photo-template').clone();
  //   $templateClone.css('display', 'block');
  //   $templateClone.find('section').attr('class', this.keyword);
  //   $templateClone.find('h2').text(this.title);
  //   $templateClone.find('img').attr('src', this.image_url);
  //   $templateClone.find('p').text(this.description);
  //   $('main').append($templateClone)
  // };

  // function renderHello() {
  //   // fetch('template.mustache')
  //   //   .then((response) => response.text())
  //   //   .then((template) => {
  //       let template = $('template').html();
  //       var rendered = Mustache.render(template, {});

  //       document.getElementById('photo-template').innerHTML = rendered;
  //     });
  // }
  Animal.prototype.createHTML = function () {
    let myTemplate = $('#template').html();
    let html = Mustache.render(myTemplate, this);

    $('main').append(html);
  };
});

