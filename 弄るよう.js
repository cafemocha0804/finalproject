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

function contains(tag, tagList) { //containsの定義付け
  let i = 0;
  while (i < tagList.length) {
    if (tagList[i] == tag) {
      return true;
    }
    i = i + 1;
  }
  return false;

  //return true;
}

function li(children) {
  let li = document.createElement("li");
  let i = 0;
  while (i < children.length) {
    let child = children[i];
    li.appendChild(child);
    i = i + 1;
  }
  return li;
}

function img(url) { //
  let i = document.createElement("img");
  i.src = url;
  return i;
}

function span(text) {
  let s = document.createElement("span");
  s.textContent = text;
  return s;
}

function searchResult(title, image) { //データのタイトルとデータをもらってリスト(表示場所)に返す
  let pict = img(image);
  let t = span(title);
  return li([pict, t])
}

function addReslut(item) { //検索結果を表示
  let list = document.querySelector("#result");
  let result = searchResult(item.title, item.image);
  list.appendChild(result); //対象リストの子要素にする
}

function delet() {
  return;
}

function doSearch(tag) { //複数検索するよ
  var words = tag.split("　"); //文字列を区切って配列にするよ
  let i = 0;
  while (i < data.length) { //前から見ていくよ
    let item = data[i];
    console.log(words);
    let matched = words.map(word => contains(word, item.tag))
      .reduce((a, b) => a && b);
    if(matched){
      addReslut(item);
    }
    /*
  for(word of words){ //配列の中の文字列を延々検証する
      if(!contains(word,item.tag)){ //全部含まないにすると含まないものだけが表示される
        //delet();
        //addReslut(item);
        //return; ここでreturnを入れると最初に引っかかったやつだけの表示になる

      }else{
        addReslut(item);
      }
  }
  
  //return; //ここに入れると何も起こらない
  */
  i = i + 1;
  }
} //「タグを含む回数」分写真が表示されてるよ 多分一単語ずつaddResultが動いてるからだよ


/*function doSearch(tag){ //複数検索するよ
var words = tag.split("　"); //文字列を区切って配列にするよ
let i = 0;
while(i < data.length){ //前から見ていくよ
  let item = data[i];
  for( word of words){ //配列の中の文字列を延々検証する
      if(!contains(word,item.tag)){ //検索条件を含まないものがあれば
        return; //さよなら
      }
  }
  addReslut(item); //生き残った検索条件全てを含むものが表示される
  return;
}
} //こーで1しか表示されないからそこを治そうね */


    /*function doSearch(tag){
    var words = tag.split("　"); //文字列を区切って配列にするよ
    while(i < data.length){ //前から見ていくよ
        let item = data[i];
        if(contains(words, item.words)){ //検索されたタグのあるアイテムがあれば //contains…結果に合っているかどうか、タグが条件に含まれているかの判断
          addList(Fitem);//その結果からもう一度二語めのタグを探す
          //addReslut(item); //結果についか //addResult…画面に出力する関数
        }
        i = i + 1; //なければ次に行く
    }*/


    /*function doSearch(tag){ //検索を行う　タグ…与えられた検索条件 
      let words = tag.split("　")
      let i = 0;
      while(i < data.length){ //前から見ていくよ
        let item = data[i];
        if(contains(tag, item.tag)){ //検索されたタグのあるアイテムがあれば //contains…結果に合っているかどうか、タグが条件位含まれているかの判断
          addReslut(item); //結果についか //addResult…画面に出力
        }
        i = i + 1; //なければ次に行く
      }
    }*/

    /*function doSearch(tag){ //検索を行う　タグ…与えられた検索条件
      let i = 0;
      while(i < data.length){ //前から見ていくよ
        let item = data[i];
        if(contains(tag, item.tag)){ //検索されたタグのあるアイテムがあれば //contains…結果に合っているかどうか、タグが条件位含まれているかの判断
          addReslut(item); //結果についか //addResult…画面に出力
        }
        i = i + 1; //なければ次に行く
      }
    } */


    function clearSearchResult() {　//ここで検索前に前の検索結果をリセットする
    }

    function beforeSearch() {
      clearSearchResult(); //ここで検索前に前の検索結果をリセットする
    }

    function afterSearch() { //ここで検索後の処理を行う
    }

    function search() { //検索を行う
      let tagInput = document.querySelector("#tag"); //HTMLの中に入力されたタグを引っ張ってくる
      let tag = tagInput.value;
      console.log(`input: ${tag}`);
      beforeSearch();
      doSearch(tag);
      afterSearch();
    }

    function start() { //最初にやること
      let button = document.querySelector("#search");
      button.addEventListener("click", search); //ボタンがクリックされたら検索をはじめる
    }

    start();
