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
        width: 1000,
        height: 500,
        margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
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
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
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
            x: title.slice(0, 10),
            y: imdb_rating.slice(0, 10),
            text: title.slice(0, 10),
            textposition: 'auto',
            textangle: 90,
            type: 'bar',
            marker: { color: "#5f9ea0" }
          }],
          layout: {
            width: 1000,
            height: 500,
            margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
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
  handleClick1() {
    this.setState({
      data: [{
        x: this.state.titles.slice(0, 5),
        y: this.state.imdb_ratings.slice(0, 5),
        text: this.state.titles.slice(0, 5),
        textposition: 'auto',
        textangle: 90,
        type: 'bar',
        marker: { color: "#5f9ea0" }
      }],
      layout: {
        width: 1000,
        height: 500,
        margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
        paper_bgcolor: 'rgb(97, 92, 87)',
        plot_bgcolor: 'rgb(97, 92, 87)',
        font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
        xaxis: { showticklabels: false },
        yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)" }
      },
    })
  };
  handleClick2() {
    this.setState({
      data: [{
        x: this.state.titles.slice(0, 10),
        y: this.state.imdb_ratings.slice(0, 10),
        text: this.state.titles.slice(0, 10),
        textposition: 'auto',
        textangle: 90,
        type: 'bar',
        marker: { color: "#5f9ea0" }
      }],
      layout: {
        width: 1000,
        height: 500,
        margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
        paper_bgcolor: 'rgb(97, 92, 87)',
        plot_bgcolor: 'rgb(97, 92, 87)',
        font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
        xaxis: { showticklabels: false },
        yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)" }
      },
    })
  };
  handleClick3() {
    this.setState({
      data: [{
        x: this.state.titles.slice(0, 15),
        y: this.state.imdb_ratings.slice(0, 15),
        text: this.state.titles.slice(0, 15),
        textposition: 'auto',
        textangle: 90,
        type: 'bar',
        marker: { color: "#5f9ea0" }
      }],
      layout: {
        width: 1000,
        height: 500,
        margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
        paper_bgcolor: 'rgb(97, 92, 87)',
        plot_bgcolor: 'rgb(97, 92, 87)',
        font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
        xaxis: { showticklabels: false },
        yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)" }
      },
    })
  };
  handleClick4() {
    this.setState({
      data: [{
        x: this.state.titles.slice(0, 20),
        y: this.state.imdb_ratings.slice(0, 20),
        text: this.state.titles.slice(0, 20),
        textposition: 'auto',
        textangle: 90,
        type: 'bar',
        marker: { color: "#5f9ea0" }
      }],
      layout: {
        width: 1000,
        height: 500,
        margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
        paper_bgcolor: 'rgb(97, 92, 87)',
        plot_bgcolor: 'rgb(97, 92, 87)',
        font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
        xaxis: { showticklabels: false },
        yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)" }
      },
    })
  };
  handleClick5() {
    this.setState({
      data: [{
        x: this.state.titles.slice(0, 50),
        y: this.state.imdb_ratings.slice(0, 50),
        text: this.state.titles.slice(0, 50),
        textposition: 'auto',
        textangle: 90,
        type: 'bar',
        marker: { color: "#5f9ea0" }
      }],
      layout: {
        width: 1000,
        height: 500,
        margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
        paper_bgcolor: 'rgb(97, 92, 87)',
        plot_bgcolor: 'rgb(97, 92, 87)',
        font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
        xaxis: { showticklabels: false },
        yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)" }
      },
    })
  };

  render() {
    return (
      <section>
        <p className='pltttle'>Neftlix IMDB Ratings</p>
        <div className='plottyboi'>
          <Plot
            data={this.state.data}
            layout={this.state.layout}
            config={this.state.config}
            onInitialized={(figure) => this.setState(figure)}
            onUpdate={(figure) => this.setState(figure)}
          />
        </div>
        <div className='btns'>
          <p className='btntitle'>How many movies would you like to compare?</p>
          <ul>
            <button className='btn1' onClick={this.handleClick1}>5</button>
            <button className='btn2' onClick={this.handleClick2}>10</button>
            <button className='btn3' onClick={this.handleClick3}>15</button>
            <button className='btn4' onClick={this.handleClick4}>20</button>
            <button className='btn5' onClick={this.handleClick5}>50</button>
          </ul>
        </div>
      </section>
    );
  }
}
export default Graph;
