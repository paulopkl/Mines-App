import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Flag from './Flag';

export default function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>New Game</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        paddingTop: 20,
        paddingHorizontal: 20,
        
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    
    flagContainer: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    
    button: {
        backgroundColor: '#999',
        padding: 5,
        
        flex: 3,
        alignItems: 'center',
    },
    
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },

    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
    }
})