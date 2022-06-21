import React from 'react';
import {View} from 'react-native';
import SliderComponent from '../components/SliderComponent';
import Styles from '../style/Styles';
import TrendMoviesComponents from '../components/TrendMoviesComponents';

const HomeScreens = props => {
  return (
    <View style={Styles.sectionBg}>
      <SliderComponent navigation={props.navigation} />
      <TrendMoviesComponents
        title="Films en tendance"
        url="/movie/top_rated"
        navigation={props.navigation}
      />
    </View>
  );
};

export default HomeScreens;


