// const meat = $('.content');
//     $(document.body).on('click', () => {
//       // console.log('1' + document.body.scrollWidth);
//       // console.log('3' + document.body.offsetWidth);
//     });
//     $(document.documentElement).on('click', () => {
//       // console.log('2' + document.documentElement.scrollWidth);
//       // console.log('4' + document.documentElement.offsetWidth);
//       // console.log('5' + document.documentElement.clientWidth);
//       console.log(document.outerWidth)
//     });

//
// console.log('Width:  ' +  getWidth() );
// console.log('Height: ' + getHeight() );
// console.log(document);

const $tab = $('.skillDesc');
const $modal = $('.modal');
const $meat = $('.meat');
const $card = $('.card');
const $cardHeader = $('.card-header')
const $cardContent = $('.card-content')
const $textContents = $('.textContent');

let modalData = '';


$textContents.each((i, element) => {
  $(element).hide();
})
// $modal.hide();
$tab.on('click', (e) => {
  console.log(modalData);
  detectSection(e.target)
  console.log(modalData);
});

const detectSection = (element) => {
  if(element.tagName === 'SECTION'){
    // console.log(element);
    modalData = element;
    // console.log(modalData);
  }else{
    detectSection(element.parentNode);
  }
  // return modalData;
}

//# sourceMappingURL=app.js.map
