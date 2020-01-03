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
