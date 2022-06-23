import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Styles from '../style/Styles';
import Constants from '../Constants';
import DisplayMoviesComponent from '../components/DisplayMoviesComponent';


import { Searchbar } from 'react-native-paper';

import {API_KEY, BASE_URL } from '../config';


const SearchScreen = (props, like_)  => {
  const [movies, setMovies] = useState();


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
          renderItem={item => DisplayMoviesComponent(item, props)}  />
      </View>
    </View>

    </View>
  );
}

export default SearchScreen;
