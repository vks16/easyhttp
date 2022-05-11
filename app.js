const http = new easyHTTP();
// http.get(
//     "https://jsonplaceholder.typicode.com/posts",
//  function(err, response) {
//      if(err){
//          console.error(err);
//      }else{
//     console.log(response)
//      }
// })

const data =  {
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
// POST

// http.post(
//     "https://jsonplaceholder.typicode.com/posts",
//    data,
//       function(err, response){
//           if(err){
//               console.error(err);
//           }else{
//               console.log(response)
//           }
//       }
// )

http.put(
    "https://jsonplaceholder.typicode.com/posts/1",
   data,
      function(err, response){
          if(err){
              console.error(err);
          }else{
              console.log(response)
          }
      }
)

http.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
 function(err, response) {
     if(err){
         console.error(err);
     }else{
    console.log(response)
     }
})