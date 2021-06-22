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
                width: 500,
                height: 400,
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
                        x: year.slice(0, 50),
                        y: title.slice(0, 50),
                        z: imdb_rating.slice(0, 50),
                        type: 'scatter3d',
                        mode: 'markers',
                        marker: {
                            color: "rgb(255, 208, 0)"
                        }
                    }],
                    layout: {
                        width: 500,
                        height: 400,
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
                                    x: -.5, y: 1.5, z: 1.2
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
    render() {
        return (
            <section>
                <p className='pltttle2'>Neftlix IMDB Ratings</p>
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
export default Mgraph2;