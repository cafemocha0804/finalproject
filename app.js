let data = [ //データは配列で書く
  coordinate("コーデ1",
    ["学校", "冬", "雨", "赤", "寒い"],
    "images/001.jpg"),
  coordinate("コーデ2",
    ["学校", "秋", "雨"],
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

function coordinate(title, tag, image) { //それぞれに名前をつける
  return {
    title: title,
    tag: tag,
    image: image
  };
}

function contains(tag, tagList){ //タグが一つしかないので、スペースで区切られたタグをどうやって文字列から配列にするか
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

function img(url){ //
  let i = document.createElement("img");
  i.src = url;
  return i;
}

function span(text){
  let s = document.createElement("span");
  s.textContent = text;
  return s;
}

function searchResult(title, image){ //データのタイトルとデータをもらってリスト(表示場所)に返す
  let pict = img(image);
  let t = span(title);  
  return li([pict, t])
}

function doSearch(tag){ //検索を行う　タグ…与えられた検索条件
  let i = 0;
  while(i < data.length){ //前から見ていくよ
    let item = data[i];
    if(contains(tag, item.tag)){ //検索されたタグのあるアイテムがあれば //contains…結果に合っているかどうか、タグが条件位含まれているかの判断
      addReslut(item); //結果についか //addResult…画面に出力
    }
    i = i + 1; //なければ次に行く
  }
} 

function addReslut(item){ //検索結果を表示
  let list = document.querySelector("#result");
  let result = searchResult(item.title, item.image);　
  list.appendChild(result); //対象リストの子要素にする
}

function clearSearchResult(){　//ここで検索前に前の検索結果をリセットする
}

function beforeSearch(){
  clearSearchResult(); //ここで検索前に前の検索結果をリセットする
}

function afterSearch(){ //ここで検索後の処理を行う
}

function search(){ //検索を行う
  let tagInput = document.querySelector("#tag"); //HTMLの中に入力されたタグを引っ張ってくる
  let tag = tagInput.value;
  console.log(`input: ${tag}`);
  beforeSearch();
  doSearch(tag);
  afterSearch();
}

function start(){ //最初にやること
  let button = document.querySelector("#search"); 
  button.addEventListener("click", search); //ボタンがクリックされたら検索をはじめる
}

start();