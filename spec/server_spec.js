import h from './spec-helper';
import Server from '../src/server';

/**
 * azk-projects-boilerplate spec example
 * uses mocha and chai
 */
describe("Server", function() {
  var server;

  beforeEach(function () {
    server = new Server(3000);
  });

  it("should return a server with port 3000", function() {
    var result = server._port;
    h.expect(result).to.equal(3000);
  });

  // it("should getMaxNumber() get max number from new list", function() {
  //   var result = sampleClass.getMaxNumber([-1, -2, 7, 0]);
  //   h.expect(result).to.equal(7);
  // });
  //
  // it("should getMaxNumber() get max number from two concated lists, initial_list wins", function() {
  //   sampleClass = new SampleClass([1, 2, 3, 4]);
  //   var result = sampleClass.getMaxNumber([-4, -3, -2, -1]);
  //   h.expect(result).to.equal(4);
  // });
  //
  // it("should getMaxNumber() get max number from two concated lists, new list wins", function() {
  //   sampleClass = new SampleClass([1, 2, 3, 4]);
  //   var result = sampleClass.getMaxNumber([-4, -3, -2, -1, 5]);
  //   h.expect(result).to.equal(5);
  // });
  //
  // it("should getMaxNumber() get null when there are no lists", function() {
  //   sampleClass = new SampleClass();
  //   var result = sampleClass.getMaxNumber();
  //   h.expect(result).to.equal(null);
  // });
});
