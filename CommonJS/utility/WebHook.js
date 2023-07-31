const request = require("request");
module.exports = class Webhook {
  /**
   * Call any web hook from this class
   */
  constructor() {}
  /**
   * Send the request to any webhook
   * @param {Url} url - Request URL
   * @param {String} method - Request method
   * @param {String} headers - Request headers
   * @param {String} data - Request body
   */
  callWebHook(url, method, headers, data) {
    return new Promise((resolve, reject) => {
      const options = {
        method: method,
        url: url,
        headers: headers,
        body: method == "HEAD" ? null : data,
        json: typeof data == "object" ? true : false,
        rejectUnauthorized: false,
      };
      request(options, (error, response) => {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(`Status for the request ${response.statusCode}`);
        }
      });
    });
  }
};
