import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-movie-list',
  template: `
    <div>
      <h2>Popular Movies</h2>
      <ul>
        <li *ngFor="let movie of movies">
          {{ movie.title }}
          <button (click)="showMovieDetails(movie.id)">Show Details</button>
        </li>
      </ul>
    </div>
  `,
})
export class MovieListComponent implements OnInit {
  movies = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe((response) => {
      this.movies = response.results;
    });
  }

  showMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe((response) => {
      console.log(response);
    });
  }
}
