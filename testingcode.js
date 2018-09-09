

//for each list item, add a title of an object for that day in mongodb

//db.daysymptoms.query({
  date // fix syntax
})


for (var key in jsonResponse) {
    if (jsonResponse.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
        if (p[key] == 1) {
          list[i]
        }
    }
}

//still need to query for the right element by date

var p = jsonResponse[7];
var ul = document.getElementById("list");
var li = document.createElement("li");
for (var key in p) {
    if (p.hasOwnProperty(key) && p[key] == 1) {
        li.appendChild(document.createTextNode(key));
        ul.appendChild(li);
    }
}
