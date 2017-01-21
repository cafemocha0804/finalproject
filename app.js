let data = [
  coordinate("コーデ1",
    ["女子会", "デート",　"スカート", "冬"],
    "images/001.jpg"),
  coordinate("コーデ2",
    ["学校", "女子会", "ガウチョ","モノクロ", "秋", "冬" ],
    "images/002.jpg"),
  coordinate("コーデ3",
    ["学校", "女子会", "ワンピース", "秋", "冬"],
    "images/003.jpg"),
  coordinate("コーデ4",
    ["デート", "スカート", "冬"],
    "images/004.jpg"),
  coordinate("コーデ5",
    ["学校", "夏", "ショートパンツ"],
    "images/005.jpg"),
  coordinate("コーデ6",
    ["デート","ワンピース", "帽子", "夏"],
    "images/006.jpg"),
  coordinate("コーデ7",
    ["学校", "夏", "ショートパンツ","ボーダー"],
    "images/007.jpg"),
  coordinate("コーデ8",
    ["デート", "春", "花柄","スカート"],
    "images/008.jpg"),
  coordinate("コーデ9",
    ["学校", "秋", "スカート", "春"],
    "images/009.jpg"),
  coordinate("コーデ10",
    ["学校", "春", "女子会", "ワンピース",　"花柄",　"デート", ],
    "images/010.jpg"),
];



function skirt(){
  return　doSearch("スカート");
}

function dress(){
  return　doSearch("ワンピース");
}

function shorts(){
  return　doSearch("ショートパンツ");
}

function school(){
  return　doSearch("学校");
}

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
