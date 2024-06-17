import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-movie-detail',
  template: `
    <div>
      <h2>Movie Details</h2>
      <p>Movie Title: {{ movie.title }}</p>
      <p>Movie Overview: {{ movie.overview }}</p>
    </div>
  `,
})
export class MovieDetailComponent implements OnInit {
  movie = {};

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  showMovieDetails(id: string): void {
    this.movieService.getMovieDetails(id).subscribe((response) => {
      this.movie = response;
    });
  }
}
