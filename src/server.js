var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/**
 * azk-projects-boilerplate ES6 class example
 */
class Server {

  /**
   * create a Server receiving an initial port
   * @param  {port} port           server initial port
   * @return {object}              Server Class instance
   */
  constructor(port) {
    this._port = port || 3000;
  }

  /**
   * get max number from received list and initial list concated
   * @param  {Array}    list    list to concat with this.initial_list
   * @return {Number}           max number
   */
  startServer() {
    this.configureExpress();
    this.configureRoutes();
    this._server = app.listen(this._port, function(port) {
      console.log('Express is listening to http://localhost:' + port);
    }(this._port));
  }

  configureExpress() {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }

  configureRoutes() {
    app.get('/', function(req, res) {
      res.send('Hello world!');
    });

    app.post('/github-webhook', function(req, res) {
      var github_response = req.body;
      console.log(github_response);
      res.send('Hello world!');
    });
  }
}

module.exports = Server;
