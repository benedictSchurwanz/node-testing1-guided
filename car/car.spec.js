const { giveTrue } = require('./car')

describe('learning unit testing', () => {
  // tests
  it('giveTrue returns true', () => { // test
    const actual = giveTrue()
    const expected = true

    expect(actual).toBe(expected) // assertion
    expect(giveTrue()).not.toBe(false) // assertion
  })
})
