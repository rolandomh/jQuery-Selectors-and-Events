'use strict';

$().ready(() => {
  const dataArray = [];

  $.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON' })
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
    this.image_url = object.image_url;
    this.title = object.title;
    this.description = object.description;
    this.keyword = object.keyword;
    this.horns = object.horns;
    dataArray.push(this);
  };
})
