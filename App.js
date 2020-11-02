import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';

// Styles
import params from './src/params';

// Components
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import { createMinedBoard, cloneBoard, openField, hadExplosions, wonGame, showMines, invertFlag, flagsUsed } 
  from './src/logic';

const App = () => {
  const [state, setState] = useState({});

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  const createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return { 
      board: createMinedBoard(rows, cols, minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  const onOpenField = (row, column) => {
    const board = cloneBoard(state.board);
    openField(board, row, column);
    const lost = hadExplosions(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeeeeeeu!', 'Que buuuurro!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }

    setState({ ...state, board, lost, won });
  }

  const onSelectField = (row, column) => {
    const board = cloneBoard(state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }

    setState({ ...state, board, won });
  }

  const createNewGame = () => {
    // let newState = createState();
    // setState(newState);
    setState(createState());
  }

  const onLevelSelected = level => {
    params.difficultLevel = level;
    // let data = createState();
    // setState(data);
    setState(createState());
  }

  useEffect(() => { setState(createState()); }, []);

  if(!state.board) {
    return <Text>Loading</Text>
  } else {
    return (
        <SafeAreaView style={styles.container}>
          <LevelSelection isVisible={state.showLevelSelection} 
            onLevelSelected={onLevelSelected}
            onCancel={() => setState({ ...state, showLevelSelection: false })}            
          />
          <Header 
            flagsLeft={minesAmount() - flagsUsed(state.board)} 
            onNewGame={createNewGame}
            onFlagPress={() => setState({ ...state, showLevelSelection: true })} 
          />
          {/* <Field />
          <Field opened />
          <Field opened nearMines={1} />
          <Field opened nearMines={2} />
          <Field opened nearMines={3} />
          <Field opened nearMines={6} />
          <Field mined />
          <Field mined opened />
          <Field mined opened exploded />
          <Field flagged />
          <Field flagged opened /> */}
          <View style={styles.board}>
            <MineField board={state.board} 
              onOpenField={onOpenField} 
              onSelectField={onSelectField}
            />
          </View>
        </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },

  board: {
    alignItems: 'center',
    backgroundColor: '#aaa'
  }
});

export default App;
