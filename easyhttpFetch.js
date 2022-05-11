/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Vishal Kumar Sharma
 * @license MIT
 * 
 */

class EasyHTTP {
    get(url){
       return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
       })
    }

    post(url, data){
        return new Promise((resolve, reject) => {
         fetch(url, {
             method: "POST",
             headers: {
                 "Content-type": "application/json"
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err))
        })
     }

     put(url, data){
        return new Promise((resolve, reject) => {
         fetch(url, {
             method: "PUT",
             headers: {
                 "Content-type": "application/json"
             },
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(data => resolve(data))
         .catch(err => reject(err))
        })
     }

     delete(url, data){
        return new Promise((resolve, reject) => {
         fetch(url, {
             method: "DELETE",
             headers: {
                 "Content-type": "application/json"
             }
         })
         .then(res => res.json())
         .then(data => resolve("Resource Deleted"))
         .catch(err => reject(err))
        })
     }
}