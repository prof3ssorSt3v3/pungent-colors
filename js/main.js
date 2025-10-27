(function init() {
  //when the HTML is ready this will run

  document.querySelector('header').addEventListener('click', function (ev) {
    let pop = document.getElementById('SomeContext');
    //don't nest your code in event listeners
    //bad. Steve is being bad. Don't do this.
    //Seriously. He should not be doing this.
    // I mean it.
    //ok. enough comments.
    console.log(pop);
    console.dir(pop);
    pop.hidePopover(); //showPopover() hidePopover()
  });
})();
