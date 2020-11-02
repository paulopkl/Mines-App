import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';

export default props => {
    
    const rows = props.board.map((row, indexRow) => {
        const columns = row.map((field, indexColumn) => {
            return <Field {...field} key={indexColumn} 
                onOpen={() => props.onOpenField(indexRow, indexColumn)} 
                onSelect={e => props.onSelectField(indexRow, indexColumn)}
            />
        });
        return <View style={{ flexDirection: 'row' }} key={indexRow}>{columns}</View>
    });

    return (
        <View style={styles.container}>{rows}</View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})