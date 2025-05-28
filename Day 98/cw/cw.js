function Movie(name, genre, year, imdb, review) {
    this.name = name;
    this.genre = genre;
    this.year = year;
    this.imdb = imdb;
    this.review = review;

    this.daxasiateba = function() {
        return `${this.name} is ${this.genre} genre flim, was released ${this.year} year. its IMDB rating is ${this.imdb}. ratng: ${this.review}`;
  };
}

const movie1 = new Movie("Inception", "sci-fi", 2010, 8.8, "Great movie!");
const movie2 = new Movie("The Godfather", "drama/criminal", 1972, 9.2, "great characters and a classic");
const movie3 = new Movie("Parasite", "thriller", 2019, 8.5, "Brilliant movie with a lot of action");

console.log(movie1.daxasiateba());
console.log(movie2.daxasiateba());
console.log(movie3.daxasiateba());