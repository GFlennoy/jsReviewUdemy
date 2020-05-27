let movies = [
  {
    title: "12 Monkeys",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Parasite",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Phantom Menace",
    rating: 2.5,
    hasWatched: true,
  },
  {
    title: "Godfather III",
    rating: 0,
    hasWatched: true,
  },
  {
    title: "Casablanca",
    rating: 5,
    hasWatched: false,
  },
  {
    title: "The Birds",
    rating: 5,
    hasWatched: false,
  },
];

movies.forEach(function (movie) {
  console.log(buildString(movie));
});
//clean it up by putting loop logic into separate function
function buildString(movie) {
  // loop logic line 40-49
  var result = "You have ";
  //   you had 'movies.hasWatched' instead of 'movie.hasWatched'
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + " stars";
  return result;
}
