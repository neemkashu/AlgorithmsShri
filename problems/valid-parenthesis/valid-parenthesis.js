// https://leetcode.com/problems/valid-parentheses/

const isOpeningBrace = (char) => ['(', '{', '['].includes(char)
const isOfSameType = (braceOpen, braceClose) => ['()', '{}', '[]'].includes(braceOpen + braceClose)

// export function isValid(str) {
function isValid(str) {
  const stack = [];

  for (let index = 0; index < str.length; index++) {
    const brace = str[index];
    if (isOpeningBrace(brace)) {
      stack.push(brace)
    } else {
      const braceLeft = stack.pop()
      if (!isOfSameType(braceLeft, brace)) {
        return false;
      }
    }
  }
  return stack.length < 1;
}
const tests = [
  '()',
  '(',
  ')',
  '(]',
  '((',
  '))',
  '([])',
  '(){}'
]
tests.forEach((test) => {
  console.log(test, isValid(test));
})