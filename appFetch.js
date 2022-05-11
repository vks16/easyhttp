document.getElementById("button1")
.addEventListener(
    "click",
    getText
);
document.getElementById("button2")
.addEventListener(
    "click",
    getJSON
);

document.getElementById("button3")
.addEventListener(
    "click",
    getAPIData
);

function getText() {
    fetch('test.txt')
    .then(function(res) {
        return res.text();
    }).then(function(txt){
        document.getElementById("output").innerHTML = `<h1>${txt}</h1>`
    }).catch(function(err){
        console.error(err)
    })
}

function getJSON() {
    fetch('test.json')
    .then(function(res) {
        return res.json();
    }).then(function(json){
        document.getElementById("output").innerHTML = `<h1>${json.text}</h1>`
    }).catch(function(err){
        console.error(err)
    })
}

function getAPIData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        document.getElementById("output").innerHTML = `<h1>${data.body}</h1>`
    }).catch(function(err){
        console.error(err)
    })
}