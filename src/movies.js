// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    const theDirectors = moviesArray.map(movie => movie.director);
    return theDirectors
     }
 
 // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
 function howManyMovies(moviesArray) {
     const dramaMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
     0;
     return dramaMovies.length
     } 
     
 // Iteration 3: All scores average - Get the average of all scores with 2 decimals
 function scoresAverage(moviesArray) {
     if (!moviesArray.length) {
     return 0;
     }
     const score = moviesArray.reduce((sum, movies) =>{
       if (movies.score) {
         return sum + movies.score;
       } else {
         return sum;
       }
     }, 0); 
 
     return Math.ceil((score * 100) / moviesArray.length) / 100;
 }
 
 
 // Iteration 4: Drama movies - Get the average of Drama Movies
 function dramaMoviesScore(moviesArray) {
     if (!moviesArray.length) {
         return 0;
         }
         const score = moviesArray.reduce((sum, movies) =>{
           if (movies.genre.includes('Drama')) {
             return sum + movies.score;
           } else {
             return 0;
           }
         }, 0); 
     
         return Math.ceil((score * 100) / moviesArray.length) / 100;
     }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  
    let sortedMovies = moviesArray.slice(0);
  
  sortedMovies.sort(function (a, b) {
    return a.year - b.year || a.title.localeCompare(b.title)
  });
  return sortedMovies
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  let sortedArray = [...moviesArray].sort((a, b) => {
      return a.title.localeCompare(b.title)
    });
  if(moviesArray.length > 20) {
      let arr = sortedArray.slice(0,20)
      let defArr = arr.map((movie)=>movie.title)
      return defArr
  } 
  else {
      let arr = sortedArray.map((movie)=>movie.title)
      return arr
  }

}
 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


