import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({size}) => {
    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator
                size = {size}
            />
        </View>
    )
};

const styles = {
    spinnerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
};

export { Spinner }