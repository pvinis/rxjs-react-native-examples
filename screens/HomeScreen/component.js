import * as WebBrowser from 'expo-web-browser'
import React, { useState } from 'react'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet, Text,
    Button,
    TouchableOpacity,
    View,
} from 'react-native'

import { MonoText } from '../../components/StyledText'
import OrientationIndicator from '../../components/OrientationIndicator'
import Nav from '../../components/Nav'


const HomeScreenComponent = (props) => {
    return (
        <>
            <Nav navigation={props.navigation}
                navs={[props.navToLinks]}
            />
            <View style={styles.container}>

                <View style={styles.helpContainer}>
                    <OrientationIndicator />
                </View>

                <Button title='go to links' onPress={props.linksPressed} />

            </View>
        </>
    )
}
HomeScreenComponent.navigationOptions = {
    header: null,
}
export default HomeScreenComponent


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 300,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
})
