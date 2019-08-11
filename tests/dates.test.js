const D = require('../index')

test("Testing date creation", () => {
  myDate = new D('1/1/2000')
  expect(String(myDate.date)).toBe(String(new Date('1/1/2000')))
})

test("Testing time getters", () => {
  myDate = new D(2000, 1, 1, 0, 0, 0)
  expect(myDate.year).toBe(2000)
  expect(myDate.month).toBe("February")
  expect(myDate.monthNum).toBe(1)
  expect(myDate.day).toBe(1)
  expect(myDate.hour).toBe(0)
  expect(myDate.minute).toBe(0)
  expect(myDate.mili).toBe(0)
})

test("Testing .format()", () => {
  const d = new D(2017, 0, 2, 3, 4, 5)
  expect(d.format()).toBe('2017 January 02')
  expect(d.format('y/m/d')).toBe('17/Jan/2')
  expect(d.format('H:I:S')).toBe('03:04:05')
  expect(d.format('h:i:s')).toBe('3:4:5')
  expect(d.format('Y-M-D h:I:S')).toBe('2017-January-02 3:04:05')
})

test("Testing .when()", () => {
  const curr = new D(2019, 6, 27, 3, 4, 5)

  let d = new D(2019, 0, 2, 3, 4, 5)
  expect(d.when(curr)).toBe('6 months ago')
  d = new D(2019, 5, 2, 3, 4, 5)
  expect(d.when(curr)).toBe('1 month ago')
  d = new D(2019, 9, 2, 3, 4, 5)
  expect(d.when(curr)).toBe('3 months from now')
  d = new D(2024, 9, 2, 3, 4, 5)
  expect(d.when(curr)).toBe('5 years from now')
  d = new D(2019, 6, 30, 3, 4, 5)
  expect(d.when(curr)).toBe('3 days from now')
})