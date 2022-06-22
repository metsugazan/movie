import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Styles from '../style/Styles';
import Constants from '../Constants';


export default function FavScreen() {

  return (
    <View style={Styles.sectionBg}>
      <Text style={Styles.title}>Vos favoris</Text>


    </View>
  );
}