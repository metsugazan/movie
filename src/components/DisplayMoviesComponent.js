import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { POSTER_IMAGE } from '../config';
import Styles from '../style/Styles';


export default function DisplayMoviesComponent({ item }, props) {
    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.push('Detail', { movieId: item.id });
            }}
            style={{ marginHorizontal: 10 }}>
            {(item.poster_path == null) &&
                <Image
                source={require('../images/travolta.gif')}
                    style={Styles.posterImage}
                />
            }


            {(item.poster_path != null) &&
                <Image
                    source={{ uri: `${POSTER_IMAGE}${item.poster_path}` }}
                    style={Styles.posterImage}
                />
            }
            {console.log('-----------' + item.title + '-----------')}
            <Text style={Styles.movieTitle}>{item.title}</Text>
        </TouchableOpacity>
    );
};

