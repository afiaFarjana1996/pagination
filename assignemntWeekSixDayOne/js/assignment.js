var book=[
{
"bookId":1,
"title":"bookA",
"authorName":"AuthorA"
},
{
  "bookId":2,
  "title":"bookB",
  "authorName":"authorA"
},
{
  "bookId":3,
  "title":"bookC",
  "authorName":"authorB"
},
{
  "bookId":4,
  "title":"bookD",
  "authorName":"authorB"
},
{
  "bookId":5,
  "title":"bookE",
  "authorName":"authorA"
},
{
  "bookId":6,
  "title":"bookF",
  "authorName":"authorB"
},
{
  "bookId":7,
  "title":"bookG",
  "authorName":"authorC"
},
{
  "bookId":8,
  "title":"bookH",
  "authorName":"authorC"
},
{
  "bookId":9,
  "title":"bookI",
  "authorName":"authorC"
},
{
  "bookId":10,
  "title":"bookJ",
  "authorName":"authorD"
},
{
  "bookId":11,
  "title":"bookK",
  "authorName":"authorD"
},
{
  "bookId":12,
  "title":"bookL",
  "authorName":"authorE"
},
{
  "bookId":13,
  "title":"bookM",
  "authorName":"authorE"
},
{
  "bookId":14,
  "title":"bookN",
  "authorName":"authorF"
},
{
  "bookId":15,
  "title":"bookO",
  "authorName":"authorF"
},
{
  "bookId":16,
  "title":"bookP",
  "authorName":"authorF"
},
{
  "bookId":17,
  "title":"bookQ",
  "authorName":"authorG"
},
{
  "bookId":18,
  "title":"bookR",
  "authorName":"authorG"
},
{
  "bookId":19,
  "title":"bookS",
  "authorName":"authorG"
},
{
  "bookId":20,
  "title":"bookT",
  "authorName":"authorH"
}
];

var rows = 6;
var currentPage;
var numberOfPages = Math.ceil(book.length/rows);
document.addEventListener("DOMContentLoaded", function() {
  showTable(0,rows-1);
  currentPage=1;
  loadButtons();
});

function loadButtons() {
  var txt="";

  if(book.length<rows){
    txt += `<button id="button1" onclick="showTable(0,${book.length-1})" >1</button>
    `
    document.getElementById("buttonDiv").innerHTML = txt;
  }else{

    txt += `<button class="page btn btn-sm btn-info" onclick="previousPage()" >prev</button>`
  for(i=0;i<numberOfPages;i++){
    var start = i*rows;
    var end = start + rows -1;
    txt += `<button class="page btn btn-sm btn-info" onclick="showTable(${start},${end})" >${i+1}</button>
    `
  }
  txt += `<button class="page btn btn-sm btn-info" onclick="nextPage()" >next</button>`
  document.getElementById("pagination-wrapper").innerHTML = txt;
  }
}

function showTable(startIndex,endIndex){
  currentPage = (startIndex/rows) + 1;
  var txt="";
  if(endIndex>(book.length-1)){
    endIndex= book.length-1;
  }

  for(i = startIndex; i<=endIndex;i++){
    txt +=
    `<tr>
    <td>${book[i].bookId}</td>
    <td>${book[i].title}</td>
    <td>${book[i].authorName}</td>
    </tr>
      `
  }
  document.getElementById("tableBody").innerHTML = txt;
}

function nextPage(){
  if(currentPage!=numberOfPages){
  var start = currentPage*rows;
  var end = start + rows -1;
  showTable(start,end);
}
}
function previousPage(){
var start = (currentPage - 2) * rows;
var end = start + rows -1;
showTable(start,end);
}
