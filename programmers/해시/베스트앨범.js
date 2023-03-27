function solution(genres, plays) {
  let answer = [];

  const totalGenres = [];
  const tracks = [];
  for (let i = 0; i < genres.length; i++) {
    totalGenres.indexOf(genres[i]) === -1 && totalGenres.push(genres[i]);
    tracks[i] = { genre: genres[i], play: plays[i] };
  }

  const playCountsPerGenres = {};
  const trackIndexPerGenres = {};
  totalGenres.forEach((genre) => {
    playCountsPerGenres[genre] = 0;
    trackIndexPerGenres[genre] = [];
  });
  tracks.forEach(({ genre, play }, index) => {
    trackIndexPerGenres[genre].push(index);
    playCountsPerGenres[genre] += play;
  });

  for (key of Object.keys(trackIndexPerGenres)) {
    trackIndexPerGenres[key].sort((a, b) => {
      return plays[b] - plays[a];
    });
  }
  const rankingOfGenre = Object.entries(playCountsPerGenres)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: { playCounts: v, trackIndexListSortByPlayCount: trackIndexPerGenres[k] } }), {});

  for (key of Object.keys(rankingOfGenre)) {
    const sorted = rankingOfGenre[key].trackIndexListSortByPlayCount.splice(0, 2);
    console.log(sorted);
    answer = [...answer, ...sorted];
  }
  return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]);

//   console.log(Object.entries(playCountsPerGenres));
//   console.log(Object.entries(playCountsPerGenres).sort(([, a], [, b]) => b - a));
//   console.log(
//     Object.entries(playCountsPerGenres)
//       .sort(([, a], [, b]) => b - a)
//       .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
//   );
