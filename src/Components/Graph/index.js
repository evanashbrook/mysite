import React from "react";
import Plot from "react-plotly.js";
import axios from 'axios';
import './style.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: 'bar',
          x: [],
          y: [],
          width: [1, 1, 1]
        }],
      layout: {
        paper_bgcolor: 'rgb(97, 92, 87)',
        plot_bgcolor: 'rgb(97, 92, 87)',
        font: { family: "Arial", size: "15px", color: "rgb(253, 237, 165)" },
        xaxis: { showticklabels: false },
        yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)", dtick: .5 }
      },
      config: { responsive: true },
      titles: [],
      years: [],
      age_ratings: [],
      imdb_ratings: [],
      on_netflixs: []
    };
  }

  componentDidMount() {
    axios.get('https://ea-mysite-backend.herokuapp.com/api/')
      .then(res => {
        const nflix = res.data;
        const title = [];
        const year = [];
        const age_rating = [];
        const imdb_rating = [];
        const on_netflix = [];
        nflix.map((movie) => (
          title.push(movie.title),
          year.push(movie.year),
          age_rating.push(movie.age_rating),
          imdb_rating.push(movie.imdb_rating),
          on_netflix.push(movie.on_netflix)
        ));
        this.setState({
          data: [{
            x: title.slice(0, 50),
            y: imdb_rating.slice(0, 50),
            text: title.slice(0, 50),
            textposition: 'auto',
            textangle: 90,
            type: 'bar',
            marker: { color: "rgb(255, 208, 0)" }
          }],
          layout: {
            paper_bgcolor: 'rgb(97, 92, 87)',
            plot_bgcolor: 'rgb(97, 92, 87)',
            font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
            xaxis: { showticklabels: false },
            yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)" }
          },
          style: { width: "100%", height: "100%" },
          config: { responsive: true },
          titles: title,
          years: year,
          age_ratings: age_rating,
          imdb_ratings: imdb_rating,
          on_netflixs: on_netflix
        });
      })
  }

  render() {
    return (
      <section>
        <p className='pltttle'>Neftlix IMDB Ratings</p>
        <div style={{ width: "100%", height: "100%" }}>
          <Plot
            data={this.state.data}
            layout={this.state.layout}
            config={this.state.config}
            onInitialized={(figure) => this.setState(figure)}
            onUpdate={(figure) => this.setState(figure)}
          />
        </div>
      </section>
    );
  }
}
export default Graph;
