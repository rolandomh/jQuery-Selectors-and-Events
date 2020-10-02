'use strict' 

$().ready
$.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON'}).then((data) => {
  for(let i = 0; i < data.length; i++){
      <img href= ('data[i].image_url');>
      <h2> "data[i].title"</h2>
      keyword
      Description 
      horns
  }
console.log('data:', data);
})



//   function Animal(object) {
//     this.title = object.title;
//     this.description = object.description;
//     this.keyword = object.keyword;
//     this.horns = object.horns;
//     this.image_url = object.image_url;
//     animalsArray.push(this);
//   }


get with ajax  create array

scroll through array 

push array to html

{forEach .append }