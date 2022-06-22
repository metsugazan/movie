import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import { POSTER_IMAGE } from '../config';
import { GET, Search } from '../API';
import Styles from '../style/Styles';




export const SearchMoviesComponents = props => {
  const [Searchmovies, setSearchMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await Search(props.query);
      setSearchMovies(data.results);
    };

    getMovies();
  }, []);

  return (
    <View>
      {console.log(Searchmovies)}
      <View>
        <Text style={Styles.title}>{props.title}</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={Searchmovies}
          numColumns={2}

          style={{ alignSelf: 'center', marginVertical: 10 }}
          renderItem={item => displayMovies(item, props)}
        />
      </View>
    </View>
  );
};


const displayMovies = ({ item }, props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push('Detail', { movieId: item.id });
      }}
      style={{ marginHorizontal: 10 }}>
      <Image
        source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
        style={Styles.posterImage}
      />
      {console.log('-----------' + item.original_title + '-----------')}
      <Text style={Styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default SearchMoviesComponents;
