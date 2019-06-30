import React, { Component } from "react";

import MoviesList from "./MoviesList";

class MoviesLoader extends Component {
  state = {
    loading: false,
    movies: [],
    error: null
  };

  async componentDidMount() {
    try {
      const apiKey = "df208d46482e1688b23f88055413a881" || process.env.API_KEY;
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
      this.setState({ loading: true });
      const rsp = await fetch(url);

      if (rsp.ok) {
        const data = await rsp.json();
        console.log(data.results);
        this.setState({ movies: data.results });
      } else if (
        rsp.headers.get("Content-Type").startsWith("application/json")
      ) {
        const data = await rsp.json();
        this.setState({
          error: { message: data.status_message || rsp.statusText }
        });
      } else {
        this.setState({ error: { message: rsp.statusText } });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return <MoviesList {...this.state} />;
  }
}

export default MoviesLoader;
