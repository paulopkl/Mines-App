import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

// Styles
import params from './src/params';

// Components
import Field from './src/components/Field';
// import Flag from './src/components/Flag';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Start the Mines!</Text>
      <Text style={styles.introductions}>
        Glade Size:
        {params.getRowsAmount()} x {params.getColumnsAmount()}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  introductions: {
    fontSize: 18
  }
});

export default App;
