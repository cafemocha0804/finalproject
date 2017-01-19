let data = [
  coordinate("コーデ1",
    ["学校", "赤"],
    "images/001.jpg"),
  coordinate("コーデ2",
    ["雨"],
    "images/002.jpg"),
  coordinate("コーデ3",
    ["学校", "秋", "雨"],
    "images/003.jpg"),
  coordinate("コーデ4",
    ["学校", "冬", "雨"],
    "images/004.jpg"),
  coordinate("コーデ5",
    ["学校", "冬", "雨", "緑", "寒い"],
    "images/005.jpg"),
];

function reset(){
  let tagInput = document.querySelector("#tag");
  tagInput.value = "";
  location.reload();
}


function coordinate(title, tag, image) {
  return {
    title: title,
    tag: tag,
    image: image
  };
}

function contains(tag, tagList){
  let i = 0;
  while(i < tagList.length){
    if(tagList[i] == tag){
      return true;
    }
    i = i + 1;
  }
  return false;
  
  //return true;
}

function li(children){
  let li =  document.createElement("li");
  let i = 0;
  while(i < children.length){
    let child = children[i];
    li.appendChild(child);
    i = i + 1;
  }  
  return li;
}

function img(url){
  let i = document.createElement("img");
  i.src = url;
  return i;
}

function span(text){
  let s = document.createElement("span");
  s.textContent = text;
  return s;
}

function searchResult(title, image){
  let pict = img(image);
  let t = span(title);  
  return li([pict, t])
}

function addReslut(item){
  let list = document.querySelector("#result");
  let result = searchResult(item.title, item.image);
  list.appendChild(result);
}

function doSearch(tag){
  let i = 0;
  while(i < data.length){
    let item = data[i];
    if(contains(tag, item.tag)){
      addReslut(item);
    }
    i = i + 1;
  }
}

function clearSearchResult(){
}

function beforeSearch(){
  clearSearchResult();
}

function afterSearch(){
}

function search(){
  let tagInput = document.querySelector("#tag");
  let tag = tagInput.value;
  console.log(`input: ${tag}`);
  beforeSearch();
  doSearch(tag);
  afterSearch();
}

function start(){
  let button = document.querySelector("#search");
  button.addEventListener("click", search);
}


start();
