let url = "https://https://script.google.com/macros/s/AKfycbz5Z28i_uAV9wPF-zgGrOeb2mnXRybnZ4SaD8iOUViI0iQPIs_8iv4Z8m9fmSyw7V2-0A/exec";

function addURLParam(url, name, value) {
  url += (url.indexOf("?") == -1 ? "?" : "&");
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
};

async function getResponse(lesson_value) {
  url = addURLParam(url, "lesson", lesson_value);
  let response = await fetch(url).then((response) => response.json());
  return response;
};

function showDB() {
  var wordsDB = getResponse(lesson);
  wordsDB.then((data) => {
    for (let index = 0; index < data.dictionary.length; index++) {
      const element = data.dictionary[index];
      console.log(element.lesson, element.english, element.uzbek, element.cardid);
    }
  })
}

function clickme() {
  document.getElementById("okay").addEventListener("click", showDB, false)
}

window.addEventListener("load", clickme, false);
