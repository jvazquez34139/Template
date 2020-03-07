const contentWrapper = $(".content_wrapper");
const ideaContainer = $(".idea-container").hide();
const ideaContainers = [];
const cards = $(".card");



let rowNum = 0;
cards.each((index, card) => {
    if(index%3 == 0){
      rowNum = index/3;
      const newIdeaCont = $("<div class='idea-container row'></div>");
      ideaContainers[rowNum] = newIdeaCont;
      // console.log(rowNum)
      // console.log(index);
      // console.log(ideaContainers.length);
      // console.log("==========================")
      // console.log(card);
      contentWrapper.append(ideaContainers[rowNum]);
    }
    ideaContainers[rowNum].append(cards[index]);
});

//# sourceMappingURL=app.js.map
