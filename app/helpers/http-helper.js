
export const asyncHelper = (url, callback) =>
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
          const data = JSON.parse(xmlHttp.responseText);
          callback(data);
      }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
};



export const toFar = (cel) => cel * 9 / 5 + 32;
