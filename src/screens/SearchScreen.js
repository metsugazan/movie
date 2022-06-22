import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Styles from '../style/Styles';
import Constants from '../Constants';

import { Searchbar } from 'react-native-paper';

import {API_KEY, BASE_URL, POSTER_IMAGE } from '../config';


const SearchScreen = props => {

  const [query, setSearchQuery] = useState(``);
  const [Data, setData] = useState([]);

  const data = async () => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}&page=1&include_adult=false`);
    const json = await response.json();
    console.log(JSON.stringify(json))
    return json;
}

const datainit = async () => {
    await data().then(data => {
        setData(data);
        console.log(data);
       
    }
    )
        .catch(error => {
            console.log(error);
        }
        )
}
useEffect(() => {
  datainit();

}
  , [])

  return (
    <View style={Styles.sectionBg}>
      <Searchbar
        placeholder="Rechercher un film"
        onChangeText={text => { setSearchQuery(text) }}
        value={query}
        onBlur={() => datainit()}
        color={Constants.baseColor}
        placeholderTextColor={Constants.fadedColor}
        iconColor={Constants.secondaryColor}
        style={Styles.searchbar}
      />
      <Text style={Styles.title}>Votre recherche : {query}</Text>
<View>
      <View>
        <Text style={Styles.title}>{props.title}</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={Data.results}
          numColumns={2}
          style={{ alignSelf: 'center', marginBottom: 5}}
          renderItem={item => displayMovies(item, props)}
        />
      </View>
    </View>

    </View>
  );
}


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

export default SearchScreen;
