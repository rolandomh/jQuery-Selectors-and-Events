'use strict';

$().ready(() => {
  const dataArray = [];

  $.ajax('data/page-1.json', { method: 'GET', dataType: 'JSON' })
    .then((horns) => {
      horns.forEach((horned) => {
        new Pics(horned);
      });
      dropdown();
      numsort();
      dataArray.forEach((mammals) => {
        $('main').append(mammals.createHTML());
      });
    }
    );
  function Pics(object) {
    this.title = object.title;
    this.description = object.description;
    this.keyword = object.keyword;
    this.horns = object.horns;
    this.image_url = object.image_url;
    dataArray.push(this);
  }

  const dropdown = () => {
    const keywordArray = [];
    dataArray.forEach((Pics) => {
      if (keywordArray.includes(Pics.keyword) === false) {
        keywordArray.push(Pics.keyword);
      }
    });
    keywordArray.forEach((keyword) => {
      const $selector = $(`<option value="${keyword}">${keyword}</option>`);
      $('select').append($selector);
    });
  };

  $('').on('change', eventHandler);
  function eventHandler(event) {
    $('section').hide();
    dataArray.forEach((object) => {
      if (event.target.value === object.keyword) {
        console.log(object);
        $(`section[class = ${object.keyword}]`).show();
      }
    });
  }

  $('#sorter').on('change', sortHandler);
  function sortHandler(event) {
    $('main').empty();
    if (event.target.value === 'alphabetical') {
      //call alphabet sort function
      nameSort();
    } else if (event.target.value === 'number-horns') {
      //call number sort function
      numsort();
    }
    dataArray.forEach((critter) => {
      $('main').append(critter.createHtml());
    });
  }
  const numsort = () => {
    dataArray.sort((a, b) => {
      a = a.horns;
      b = b.horns;
      return a - b;
    });
  };
  const nameSort = () => {
    dataArray.sort((a, b) => {
      a = a.title.toLowerCase();
      b = b.title.toLowerCase();
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  Pics.prototype.createHTML = function () {
    let myTemplate = $('#mustacheHelp').html();
    let html = Mustache.render(myTemplate, this);
    return html;
  };
});