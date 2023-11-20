function getMovies(movieTokens) {
  let movies = [];

  let getDesiredToken = (tokens, commandTokenIndex) => {
    let movieName = tokens.slice(0, commandTokenIndex).join(" ");

    let desiredToken = tokens
      .slice(commandTokenIndex + 1, tokens.length)
      .join(" ");

    return [movieName, desiredToken];
  };

  for (let i = 0; i < movieTokens.length; i++) {
    let tokens = movieTokens[i].split(" ");

    let movie = {};

    if (tokens[0] === "addMovie") {
      movie.name = tokens.slice(1).join(" ");

      movies.push(movie);

      continue;
    }

    let directedByIndex = tokens.findIndex((t) => t === "directedBy");

    if (directedByIndex > -1) {
      let [movieName, directorName] = getDesiredToken(tokens, directedByIndex);

      let movieIndex = movies.findIndex((movie) => movie.name === movieName);

      if (movieIndex > -1) movies[movieIndex].director = directorName;

      continue;
    }

    let onDateIndex = tokens.findIndex((t) => t === "onDate");

    if (onDateIndex > -1) {
      let [movieName, date] = getDesiredToken(tokens, onDateIndex);

      let movieIndex = movies.findIndex((movie) => movie.name === movieName);

      if (movieIndex > -1) movies[movieIndex].date = date;
    }
  }

  movies = movies.filter(
    (m) =>
      m.name !== undefined && 
      m.director !== undefined && 
      m.date !== undefined
  );

  for (let i = 0; i < movies.length; i++) {
    console.log(JSON.stringify(movies[i]));
  }
}
