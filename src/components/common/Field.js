import React from 'react';
import {
    Text,
    TextInput,
    View
} from 'react-native';

const Field = (props) => {
    const { label, onChangeText, secureTextEntry, placeholder } = props;
    const { inputContainer, inputLabel, inputField } = styles;
    return (
        <View style={inputContainer}>
            <Text style={inputLabel}>{label}</Text>
            <TextInput
                style={inputField}
                onChangeText = {onChangeText}
                autoCorrect={false}
                secureTextEntry = {secureTextEntry}
                placeholder = {placeholder}
            />
        </View>
    )
};

const styles = {
    inputContainer: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        flex: 1
    },
    inputLabel: {
        color: '#000',
        flex: 1,
        fontSize: 14,
        paddingLeft: 15,
    },
    inputField: {
        color: '#000',
        flex: 3,
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 23,
    }
}

export { Field };