const { giveTrue, sum, buildUser, Car } = require('./car')

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
  it('takes username and returns object with username', () => {
    const actual = buildUser('jacob')
    const expected = { username: 'jacob', foo: 'bar'}
    // expect(actual).toBe(expected) // DOES NOT WORK unless truly same object
    expect(actual.username).toBe('jacob')
    expect(actual).toHaveProperty('username')
    expect(actual).toHaveProperty('username', 'jacob')
    expect(actual).toEqual(expected)
    expect(actual).toMatchObject(expected) // more resilient
  })
})

describe('Car class', () => {
  it('constructs cars with make and model', () => {
    // jacob
    const car = new Car('toyota', 'camry')
    expect(car).toHaveProperty('make', 'toyota')
    expect(car).toHaveProperty('model', 'camry')
    // david
    const actual = new Car("Tesla", "Model 3")
    const expected = { make: 'Tesla', model: 'Model 3' }
    // expect(actual).toEqual(expected)
    expect(actual).toMatchObject(expected)
  })
  it('constructs cars with odometer set at zero', () => {
    const car = new Car('toyota', 'camry')
    expect(car).toMatchObject({ odometer: 0 })
  })
  it('cars have a drive method that take distance and increase odometer', () => {
    const car = new Car('toyota', 'camry')
    car.drive(5)
    car.drive(7)
    expect(car.odometer).toBe(12)
    expect(car).toHaveProperty('odometer', 12)
  })
})
