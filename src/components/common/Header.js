//Import library for making a component
import React from 'react';
import ReactNative, {
    View,
    Text
} from 'react-native';

//Create a component
const Header = (props) =>{
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 3,
        position: 'relative'
    }
};

//Make the component available for other parts of the App
export { Header };