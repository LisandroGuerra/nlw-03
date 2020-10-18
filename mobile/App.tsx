import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';


export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={{
          latitude: -30.040694,
          longitude: -51.1261291,
          latitudeDelta: 0.0018,
          longitudeDelta: 0.0018,
        }}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
