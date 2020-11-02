import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';

import ButtonOpacity from '../components/ButtonOpacity';

const styles = StyleSheet.create({
    frame: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    container: {
        backgroundColor: '#EEE',
        padding: 15,

        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    button: {
        marginTop: 10,
        padding: 5,
    },

    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },

    bgEasy: {
        backgroundColor: '#49b65d'
    },

    bgMedium: {
        backgroundColor: '#2765F7'
    },
    
    bgHard: {
        backgroundColor: '#F26337'
    }
})

const screens = ({ onCancel, isVisible, onLevelSelected }) => {

    const { frame, container, title, button, bgEasy, buttonLabel, bgMedium, bgHard } = styles;

    return (
        <Modal onRequestClose={onCancel} visible={isVisible} animationType="slide" transparent>
            <View style={frame}>
                <View style={container}>
                    <Text style={title}>Select Difficulty</Text>
                    <ButtonOpacity style={[button, bgEasy]} onPress={() => onLevelSelected(0.1)} 
                        styleText={buttonLabel} text="Easy" />                    
                    <ButtonOpacity style={[button, bgMedium]} onPress={() => onLevelSelected(0.2)} 
                        styleText={buttonLabel} text="Medium" />                    
                    <ButtonOpacity style={[button, bgHard]} onPress={() => onLevelSelected(0.3)} 
                        styleText={buttonLabel} text="Hard" />                    
                    {/* <TouchableOpacity style={[button, bgEasy]} onPress={() => onLevelSelected(0.1)}>
                        <Text style={buttonLabel}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[button, bgMedium]} onPress={() => onLevelSelected(0.3)}>
                        <Text style={buttonLabel}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[button, bgHard]} onPress={() => onLevelSelected(0.5)}>
                        <Text style={buttonLabel}>Hard</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </Modal>
    );
}

export default screens;