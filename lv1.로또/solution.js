function solution(lottos, win_nums) {
  var answer = [];
  let zeroCount = lottos.filter((el) => el === 0).length;
  let matchCount = lottos.filter((el) => win_nums.includes(el)).length;

  let max = matchCount + zeroCount < 2 ? 6 : 7 - (matchCount + zeroCount);
  let min = matchCount < 2 ? 6 : 7 - matchCount;
  return [max, min];
}
