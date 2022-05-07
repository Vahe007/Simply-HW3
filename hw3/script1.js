const finished = [
  [0, 1],
  [1, 2],
  [2, 0],
];

function helper(i, finishedMatches) {
  const pair = [];

  finishedMatches.forEach((row) => {
    if (row.includes(i)) {
      pair.push(
        ...row.filter((item, index) => {
          return item !== i;
        })
      );
    }
  });
  return pair;
}

const solution = (chessPlayers, finishedMatches) => {
  if (Number.isNaN(chessPlayers) || !Array.isArray(finishedMatches)) {
    throw new Error("Incorrect argument input");
  }

  const res = [];
  const excluded = [];

  for (let i = 0; i < chessPlayers; i++) {
    if (helper(i, finishedMatches).length > 0) {
      excluded.push([i, ...helper(i, finishedMatches)]);
    }
  }

  const players = [];
  for (let i = 0; i < chessPlayers; i++) {
    players.push(i);
  }

  for (let i = 0; i < chessPlayers; i++) {
    const item = helper1(i, excluded, players);
    if (item && item.length > 0) {
      for (let j = 0; j < item.length; j++) {
        res.push(item[j]);
      }
    }
  }

  return res;
};

console.log(solution(4, finished));

function helper1(chessPlayer, excludedOpponents, chessPlayers) {
  const res = [];
  if (!excludedOpponents[chessPlayer]) {
    chessPlayers.forEach((player) => {
      if (player > chessPlayer) {
        res.push([chessPlayer, player]);
      } else if (player < chessPlayer) {
        res.push([player, chessPlayer]);
      }
    });
    return res;
  }

  const free = chessPlayers.filter((item) => {
    return !excludedOpponents[chessPlayer].includes(item);
  });
  for (let i = 0; i < free.length; i++) {
    if (!excludedOpponents[free[i]]) {
      excludedOpponents.push([]);
    }
    excludedOpponents[free[i]].push(chessPlayer);
    const pair = [];
    if (chessPlayer < free[i]) {
      res.push([chessPlayer, free[i]]);
    } else if (free[i] < chessPlayer) {
      res.push([free[i], chessPlayer]);
    }
  }
  return res;
}

// for (let i = 0; i < free.length; i++) {
//   if (!excludedOpponents[free[i]]) {
//     excludedOpponents.push([]);
//   }
//   excludedOpponents[free[i]].push(chessPlayer);
//   if (chessPlayer < free[i]) {
//     return [chessPlayer, free[i]];
//   } else if (free[i] < chessPlayer) {
//     return [free[i], chessPlayer];
//   }
// }
