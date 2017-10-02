var pageContents = [
  '#memory',
  '#relativeMemory',
  '#majorStroke',
  '#minorStroke',
  '#sad',
  '#pictures',
  '#final'
];

var page = 0;

function classAssigner(element, classNameParam) {
  //finds the element and assigns it the proper class, or an empty string
  var curElement = document.querySelector(element);

  curElement.style.display = classNameParam;

}

//this function gets called dueto the onclick attribute in the html on the button
function pageChanger() {
  //calls classAssigner for each item in the curPage index of the pageContent array
  classAssigner(pageContents[page], 'none');
  page++;
  classAssigner(pageContents[page], 'block');

  if(page >= pageContents.length - 1){
    classAssigner('#nextPage-button', 'none');
    classAssigner('#instructions', 'none');
  }
}
