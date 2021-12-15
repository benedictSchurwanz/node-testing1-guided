const { giveTrue, sum } = require('./car')

describe('learning unit testing', () => {
  it('giveTrue returns true', () => { // test
    const actual = giveTrue()
    const expected = true

    expect(actual).toBe(expected) // assertion
    expect(giveTrue()).not.toBe(false) // assertion
  })

  it('sum can add two numbers', () => {
    expect(sum(3,5)).toBe(8)
  })
})
