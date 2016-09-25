import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children})=>{
    const {buttonStyle, buttonText} = styles;

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#007aff',
        marginTop: 5,
        marginRight: 5,
    },
    buttonText: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
}

export { Button };