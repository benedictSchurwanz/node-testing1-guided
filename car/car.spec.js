const { giveTrue, sum, buildUser } = require('./car')

describe('giveTrue function', () => {
  it('giveTrue returns true', () => { // test
    const actual = giveTrue()
    const expected = true

    expect(actual).toBe(expected) // assertion
    expect(giveTrue()).not.toBe(false) // assertion
  })
})

describe('sum', () => {
  it('sum can add two numbers', () => {
    expect(sum(3, 5)).toBe(8)
    expect(sum(1, 2)).toBe(3)
    expect(sum(3, -5)).toBe(-2)
  })
  it('sum returns message if either arg is not a num', () => {
    expect(sum('a', 4)).toBe("don't be ridiculous")
    expect(sum('2', '2')).toBe("don't be ridiculous")
    expect(sum(2, '2')).toBe("don't be ridiculous")
    // expect(sum(2, NaN)).toBe("don't be ridiculous")
  })
})

describe('buildUser', () => {
  it('takes username and returns object', () => {
    const actual = buildUser('jacob')
    const expected = { username: 'jacob'}
    // expect(actual).toBe(expected)
    expect(buildUser('jacob').username).toBe('jacob')
    expect(actual).toEqual(expected)
    expect(actual).toStrictEqual
  })
})
