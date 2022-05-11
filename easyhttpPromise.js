function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url) {
    let self = this;
    return new Promise(function (resolve, reject) {
        self.http.open('GET', url, true);


        self.http.onload = function () {
            if (self.http.status === 200) {
                resolve(self.http.responseText);
            } else {
                reject("Error: " + self.http.status);
            }
        }

        self.http.send();
    })

}
// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  let self = this;
  return new Promise(function(resolve, reject) {
    self.http.open("POST", url, true);
    self.http.setRequestHeader("Content-type", 'application/json');

    self.http.onload = function () {

        resolve(self.http.responseText);

    }


    self.http.send(JSON.stringify(data));
  })
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
    let self = this;
  return new Promise(function(resolve, reject) {
    self.http.open("PUT", url, true);
    self.http.setRequestHeader("Content-type", 'application/json');

    self.http.onload = function () {

        resolve(self.http.responseText);

    }


    self.http.send(JSON.stringify(data));
  })
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
    let self = this;
    return new Promise(function (resolve, reject) {
        self.http.open('DELETE', url, true);


        self.http.onload = function () {
            if (self.http.status === 200) {
                resolve("POST Deleted");
            } else {
                reject("Error: NOt Deleted");
            }
        }

        self.http.send();
    })
}