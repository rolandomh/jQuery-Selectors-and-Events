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
  };


  Animal.prototype.createHTML = function () {
    let myTemplate = $('#template').html();
    let html = Mustache.render(myTemplate, this);

    $('main').append(html);
  };

  function dropDown() {

    let keywords = [];
    //grab drop down ID

    animalsArray.forEach((Animal) => {
      let nameOfKey = Animal.keyword;
      // ! - does the opposite
      if (!keywords.includes(nameOfKey)) {
        keywords.push(nameOfKey);
      }
    })

    // add event listener to dropdown
    $('#dropDown').on('change', function () {
      $('.animal').remove();
      animalsArray.forEach(Animal => {
        if (Animal.keyword === this.value) {
          Animal.template();
        }
      })
    })
  }

});