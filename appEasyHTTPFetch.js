const http = new EasyHTTP();

// http.get("https://jsonplaceholder.typicode.com/posts/1")
// .then(data => console.log(data));

const data =  {
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
http.post("https://jsonplaceholder.typicode.com/posts", data)
.then(res => console.log(res))