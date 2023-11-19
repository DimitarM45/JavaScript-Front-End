function getMovies(movieTokens) {
  let movies = [];

  let getDesiredToken = (tokens, commandTokenIndex) => {
    let movieName = tokens.slice(0, commandTokenIndex + 1).join(" ");

    let desiredToken = tokens
      .slice(commandTokenIndex + 1, tokens.length)
      .join(" ");

    return { movieName, desiredToken };
  };

  for (let i = 0; i < movieTokens.length; i++) {
    let tokens = movieTokens[i].split(" ");

    let movie = {};

    if (tokens[0] === "addMovie") {
      movie.name = tokens.slice(1).join(" ");

      movies.push(movie);

      continue;
    }

    let directedByIndex = tokens.findIndex(t => t === "directedBy");

    if (directedByIndex > -1) {
      let { movieName, directorName } = getDesiredToken(tokens, directedByIndex);

      let movieIndex = movies.findIndex((movie) => movie.name === movieName);

      if (movieIndex > -1) movies[movieIndex].director = directorName;

      continue;
    }

    let onDateIndex = tokens.findIndex(t => t === "onDate");

    if (onDateIndex > -1) {
      let { movieName, date } = getDesiredToken(tokens, onDateIndex);

      let movieIndex = movies.findIndex((movie) => movie.name === movieName);

      if (movieIndex > -1) movies[movieIndex].date = date;
    }
  }

  movies = movies.filter(
    (m) =>
      m.name == undefined ||
      m.directorName == undefined ||
      m.date == undefined
  );

  console.log(JSON.stringify(movies));
}

getMovies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
