function solution(phone_number) {
  var answer = '';
  let split = phone_number.split('');
  for (let i = 0; i < split.length - 4; i++) {
    split[i] = '*';
  }
  answer = split.join('');
  return answer;
}
