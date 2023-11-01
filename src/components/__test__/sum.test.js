import { sum } from "../sum"

test('sum function should calculate the sum of tow number ', () => {

  const reuslt = sum(5 , 3);
  expect(reuslt).toBe(8);
})
