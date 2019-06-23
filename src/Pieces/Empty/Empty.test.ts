import Empty from './Empty';

it('Empty mock constructor correctly sets pic property', () => {
  let Empty = jest.fn().mockImplementationOnce(function(arg){
      return {pic: arg};
  })
  let sampleEmpty = new Empty('string');
  expect(sampleEmpty.pic).toBe('string');
})

it('Empty constructor correctly sets pic property', () => {
  let sampleEmpty = new Empty('--');
  expect(sampleEmpty.pic).toBe('--');
})

it('Empty.returnPic correctly retrieves pic property', () => {
  let sampleEmpty = new Empty('--');
  expect(sampleEmpty.returnPic()).toBe('--');
})

it('Empty.canMove correctly returns false', () => {
  let sampleEmpty = new Empty('--');
  expect(sampleEmpty.canMove()).toBe(false);
})