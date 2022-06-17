import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Contato extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Em breve</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a6bb24',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Contato;
