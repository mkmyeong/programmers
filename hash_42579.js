function solution(genres, plays) {
  console.log(`genres: ${genres}`);
  console.log(`plays: ${plays}`);
  let sum = genres.reduce((a, g, i) => {
    console.log(`g: ${g}, i: ${i}, plays[i]: ${plays[i]}`);

    if (!a[g]) {
      a[g] = {
        total: 0,
        list: [],
      };
    }

    a[g].total += plays[i];
    a[g].list.push([i, plays[i]]);

    // a[g] = a[g] ? a[g] + plays[i] : plays[i];
    return a;
  }, {});

  console.log(`sum: ${JSON.stringify(sum)}`);

  const sum_sort = Object.values(sum).sort((a, b) => {
    return b.total - a.total;
  });

  console.log(`sum sort: ${JSON.stringify(sum_sort)}`);

  const answer = sum_sort.reduce((a, c) => {
    c.list.sort((a, b) => {
      return b[1] - a[1];
    });
    console.log(`c: ${JSON.stringify(c)}`);

    a.push(c.list[0][0]);

    if (c.list.length > 1) {
      a.push(c.list[1][0]);
    }

    return a;
  }, []);

  console.log(`answer: ${JSON.stringify(answer)}`);

  return answer;
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

solution(genres, plays);
