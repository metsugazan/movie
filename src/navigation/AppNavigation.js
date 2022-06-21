import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constants from '../Constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavScreen from '../screens/FavScreen';
import SearchScreen from '../screens/SearchScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = "Accueil";
const favName = "Favoris";
const searchName = "Recherche";


export default function AppNavigation() {
    return (
        <NavigationContainer>      
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Detail"component={DetailScreen} options={{ title:'Détails du film', headerTintColor: Constants.textColor, headerStyle: { backgroundColor: Constants.baseColor },
                headerTitleStyle: { color: Constants.textColor } }} />
        </Stack.Navigator>
</NavigationContainer>
    )
}

const TabNavigation = () => {
    return (
            <Tab.Navigator screenOptions={({ route }) => ({
                        tabBarStyle: { backgroundColor: Constants.baseColor, paddingBottom: 5 },
                        tabBarLabelStyle: {
                          fontSize: 10,
                          fontWeight: 'bold',
                        },
                        tabBarActiveTintColor: Constants.secondaryColor,
                        tabBarInactiveTintColor: Constants.fadedColor,
                        headerTitleAlign: 'center',
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
                          let rn = route.name;
                
                          if (rn === homeName) {
                            iconName = Platform.OS === 'ios' ? `home${focused ? '' : 'home'}` : 'home';
                          } else if (rn === favName) {
                            iconName = Platform.OS === 'ios' ? `cards-heart${focused ? '' : 'cards-heart'}` : 'cards-heart';
                          } else if (rn === searchName) {
                            iconName = Platform.OS === 'ios' ? `card-searcht${focused ? '' : 'card-search'}` : 'card-search';
                          }
                
                          return <MaterialCommunityIcons name={iconName} size={size} color={focused ? '#9F8236' : '#adabab'} style={{ marginTop: 5 }} />
                
                
                        }
            })}>
                <Tab.Screen name="Accueil" options={{ headerShown: false }}  component={HomeScreen} />
                <Tab.Screen name="Favoris" options={{title: 'Favoris', headerShown: false}} component={FavScreen} />
                <Tab.Screen name="Recherche" options={{ headerShown: false }} component={SearchScreen} />
            </Tab.Navigator>
    );
}


const headerStyle = {
    title: 'Film',
    headerStyle: { backgroundColor: Constants.baseColor },
    headerTitleStyle: { color: Constants.textColor },
};