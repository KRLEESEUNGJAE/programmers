function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    // commands[i][0], commands[i][1], commands[i][2]
    let start = commands[i][0] - 1;
    let end = commands[i][1];
    let pick = commands[i][2] - 1;

    let temp = array.slice(start, end).sort((a, b) => a - b)[pick];
    answer.push(temp);
  }
  return answer;
}
