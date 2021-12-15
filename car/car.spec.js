const { giveTrue } = require('./car')

describe('learning unit testing', () => {
  // tests
  it('works fine', () => { // test
    // assertions
    const actual = giveTrue()
    const expected = true

    expect(actual).toBe(expected) // assertion
    expect(giveTrue()).toBe(true)
  })
})
