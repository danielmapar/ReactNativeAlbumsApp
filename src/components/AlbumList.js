import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

// functional components -> functions that return some JSX
/*const AlbumList = () => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text>Albuem List!!!</Text>
    </View>
  );
};*/

// class based
class AlbumList extends Component {
    constructor() {
        super();
        this.state = { albums: [] };
    }

    componentWillMount() {
      fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => this.setState({ albums: responseData }));
    }

    renderAlbums() {
      return this.state.albums.map((album) =>
        <AlbumDetail key={album.title} album={album} />
      );
    }

    render() {
      const { viewStyle } = styles;
      return (
        <ScrollView style={viewStyle}>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
}

const styles = {
  viewStyle: {
      flex: 0.6
  }
};

export default AlbumList;
