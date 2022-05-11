/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Vishal Kumar Sharma
 * @license MIT
 * 
 */

class EasyHTTP {
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    async post(url, data){
        const response = await fetch(url, {
             method: "POST",
             headers: {
                 "Content-type": "application/json"
             },
             body: JSON.stringify(data)
         })
         const resData = await response.json();
         return resData;
     }

    async put(url, data){
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
     }

    async delete(url, data){
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })
        const resData = await response.json();
        return resData;
     }
}