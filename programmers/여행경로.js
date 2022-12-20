function solution(tickets) {
  let answer = "";

  const dfs = (leftTickets, course) => {
    if (leftTickets.length === 0) return answer === "" && course;

    const canGo = [];
    leftTickets.forEach((ticket, index) => {
      if (ticket[0] === course[course.length - 1]) canGo.push([ticket[1], index]);
    });
    canGo.sort();
    canGo.forEach((next) => {
      const _course = [...course, next[0]];
      const _leftTickets = [...leftTickets];
      _leftTickets.splice(next[1], 1);
      dfs(_leftTickets, _course);
    });
  };

  dfs(tickets, ["ICN"]);

  console.log(answer);
}

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
