const contentWrapper = $(".content_wrapper");
const ideaContainer = $(".idea-container").hide();
const ideaContainers = [];
const cards = $(".card");

//rearanging the cards
let rowNum = 0;
cards.each((index, card) => {
    if(index%3 == 0){
      rowNum = index/3;
      const newIdeaCont = $("<div class='idea-container row'></div>");
      ideaContainers[rowNum] = newIdeaCont;
      contentWrapper.append(ideaContainers[rowNum]);
    }
    ideaContainers[rowNum].append(cards[index]);
});

//giving them delete and edit buttons
