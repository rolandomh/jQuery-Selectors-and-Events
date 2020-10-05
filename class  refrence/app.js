'use strict';


// VanillaJS

// let button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', function(e) {
//     console.log('e', e.target.textContent);
//     console.log('hello world');
// })

// jQuery

$('button').on('click', function() {
    // console.log('hello world');

    // .text() ========= GETTER
    // console.log($(this).text());

    // .text('content') =========== SETTER
    // console.log($(this).text('Don\'t click me'));

    $('ul').toggle('hide');
    // $('h2').remove();
});


let $pets = $('.pets');
let $petTemplate = $('.pet-template');



$.ajax('./pets.json').then( data => {
    console.log('data:  ', data);

    data.forEach(pet => {
        let $newPet = $petTemplate.clone();
        // $newPet.removeAttr('class');
        $newPet.text(pet.name);
        $pets.append($newPet);
    })
})

// $().ready(() => {
//   const dataArray = [];

//   $.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON' })
//     .then((horns) => {
//       horns.forEach((horned) => {
//         new Pics(horned);
//       });
//       dropdown();
//       numsort();
//       dataArray.forEach((mammals) => {
//         $('main').append(mammals.createHTML());
//       });
//     }
//     );
//   function Pics(object) {
//     this.image_url = object.image_url;
//     this.title = object.title;
//     this.description = object.description;
//     this.keyword = object.keyword;
//     this.horns = object.horns;
//     dataArray.push(this);
//   };
// })