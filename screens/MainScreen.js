import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class MainScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main Screen</Text>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        justifyContent: "center"
    }
})