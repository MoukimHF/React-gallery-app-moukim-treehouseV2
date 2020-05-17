import React,{Component} from 'react';
import Photos from './components/Photos';
import './App.css';
import axios from 'axios';
import Load from './components/load.js';
import Search from './components/Search';
import Nav from './components/Nav';
import propTypes from 'prop-types';
import apiKey from './config';
export default class Main extends Component {

  constructor() {
    super();
    this.state={
      photos: [],
      loading:true,
      query: ''
    };
  } 
  componentDidMount() {

    this.performSearch(this.props.match.params.text);
    
    }
    componentWillReceiveProps(nextProp) {
      this.setState({ query: nextProp.match.params.text,
      loading:true
    });
      this.performSearch(nextProp.match.params.text);
    }
    

  performSearch = (query) =>{
    this.setState({ loading: true });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
      photos: response.data.photos.photo,
      loading:false
    });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  


render() {
  return (
    <div className="container">
    <div className="photo-container">
    <Search match={this.props.match} history={this.props.history} onSearch={this.performSearch} load={this.state.loading}/>
    <Nav />
      {
        (this.state.loading)
          ? <Load />
          : <Photos data={this.state.photos} query={this.state.query} />
      }
  </div>
</div>
)
}




}
Main.propTypes={
  query:propTypes.string,
}