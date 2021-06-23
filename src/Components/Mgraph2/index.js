import React from 'react'
import Plot from "react-plotly.js";
import axios from 'axios';
import './style.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class Mgraph2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    type: 'scatter3d',
                    x: [],
                    y: [],
                    z: [],
                }],
            layout: {
                width: 450,
                height: 400,
                margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
                paper_bgcolor: 'rgb(97, 92, 87)',
                plot_bgcolor: 'rgb(97, 92, 87)',
                font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
                scene: {
                    xaxis: { range: [1990, 2021], zerolinecolor: "rgb(253, 237, 165)", title: 'Release Year' },
                    yaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)", title: 'Title' },
                    zaxis: { range: [0, 10], zerolinecolor: "rgb(253, 237, 165)", title: 'IMDB Rating' },
                },
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
                        x: year.slice(0, 10),
                        y: title.slice(0, 10),
                        z: imdb_rating.slice(0, 10),
                        type: 'scatter3d',
                        mode: 'markers',
                        marker: {
                            color: "#5f9ea0"
                        }
                    }],
                    layout: {
                        width: 450,
                        height: 400,
                        margin: { l: 20, r: 20, t: 10, b: 10, pad: 0 },
                        paper_bgcolor: 'rgb(97, 92, 87)',
                        plot_bgcolor: 'rgb(97, 92, 87)',
                        font: { family: "Arial", size: "15", color: "rgb(253, 237, 165)" },
                        scene: {
                            xaxis: { range: [1990, 2021], zerolinecolor: "rgb(253, 237, 165)", gridcolor: "rgb(253, 237, 165)", title: "Release Year" },
                            yaxis: { showticklabels: false, zerolinecolor: "rgb(253, 237, 165)", gridcolor: "rgb(253, 237, 165)", title: "Title" },
                            zaxis: { range: [5, 10], zerolinecolor: "rgb(253, 237, 165)", gridcolor: "rgb(253, 237, 165)", title: "IMDB Rating" },
                            aspectmode: 'manual',
                            aspectratio: { x: 2, y: 1, z: 1 },
                            camera: {
                                center: {
                                    x: 0, y: -.5, z: -.5
                                },
                                eye: {
                                    x: -.5, y: 1.0, z: 1.2
                                },
                                up: {
                                    x: 0, y: 0, z: 1
                                }
                            },
                        }
                    },
                    config: { responsive: true },
                    titles: title,
                    years: year,
                    age_ratings: age_rating,
                    imdb_ratings: imdb_rating,
                    on_netflixs: on_netflix
                }
                );
            })
    }
    handleClick1() {
        this.setState({
            data: [{
                x: this.state.years.slice(0, 5),
                y: this.state.titles.slice(0, 5),
                z: this.state.imdb_ratings.slice(0, 5),
                type: 'scatter3d',
                mode: 'markers',
                marker: { color: "#5f9ea0" }
            }]
        })
    };
    handleClick2() {
        this.setState({
            data: [{
                x: this.state.years.slice(0, 10),
                y: this.state.titles.slice(0, 10),
                z: this.state.imdb_ratings.slice(0, 10),
                type: 'scatter3d',
                mode: 'markers',
                marker: { color: "#5f9ea0" }
            }]
        })
    };
    handleClick3() {
        this.setState({
            data: [{
                x: this.state.years.slice(0, 15),
                y: this.state.titles.slice(0, 15),
                z: this.state.imdb_ratings.slice(0, 15),
                type: 'scatter3d',
                mode: 'markers',
                marker: { color: "#5f9ea0" }
            }]
        })
    };
    handleClick4() {
        this.setState({
            data: [{
                x: this.state.years.slice(0, 20),
                y: this.state.titles.slice(0, 20),
                z: this.state.imdb_ratings.slice(0, 20),
                type: 'scatter3d',
                mode: 'markers',
                marker: { color: "#5f9ea0" }
            }]
        })
    };
    handleClick5() {
        this.setState({
            data: [{
                x: this.state.years.slice(0, 50),
                y: this.state.titles.slice(0, 50),
                z: this.state.imdb_ratings.slice(0, 50),
                type: 'scatter3d',
                mode: 'markers',
                marker: { color: "#5f9ea0" }
            }]
        })
    };
    render() {
        return (
            <section>
                <p className='m-pltttle2'>Neftlix IMDB Ratings</p>
                <div className='m2-plottyboi'>
                    <Plot
                        data={this.state.data}
                        layout={this.state.layout}
                        config={this.state.config}
                        onInitialized={(figure) => this.setState(figure)}
                        onUpdate={(figure) => this.setState(figure)}
                    />
                </div>
                <div className='m2-btns'>
                    <p className='m2-btntitle'>How many movies would you like to compare?</p>
                    <ul>
                        <button className='m2-btn1' onClick={this.handleClick1}>5</button>
                        <button className='m2-btn2' onClick={this.handleClick2}>10</button>
                        <button className='m2-btn3' onClick={this.handleClick3}>15</button>
                        <button className='m2-btn4' onClick={this.handleClick4}>20</button>
                        <button className='m2-btn5' onClick={this.handleClick5}>50</button>
                    </ul>
                </div>
            </section>
        );
    }
}
export default Mgraph2;