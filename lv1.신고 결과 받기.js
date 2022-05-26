function solution(id_list, report, k) {
  const answer = new Array(id_list.length);
  answer.fill(0);

  const report_list = {};
  id_list.map((el) => {
    report_list[el] = [];
  });

  report.map((el) => {
    const [reporter, reported] = el.split(' ');

    if (!report_list[reported].includes(reporter)) {
      report_list[reported].push(reporter);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((el) => {
        answer[id_list.indexOf(el)]++;
      });
    }
  }
  return answer;
}
