function solution(participant, completion) {
  var answer = '';
  const total = participant.length;
  participant.sort();
  completion.sort();

  for (let i = 0; i < total; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}
