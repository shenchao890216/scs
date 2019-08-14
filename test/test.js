var assert = require('assert')

describe('Array', function () {
  describe('#indexOf', function () {
    it('返回-1', function () {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})