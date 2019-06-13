
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { DeviceMotion } from 'expo-sensors'


const useOrientation = (fn) => {
    useEffect(() => {
        DeviceMotion.addListener((event) => fn(event.orientation))
        return () => DeviceMotion.removeAllListeners()
    }, [])
}


const OrientationIndicator = (props) => {
    useOrientation(props.orientation)

    return (
        <View>
            <Text style={{
                transform: [{ rotateZ: props.textRotation }],
            }}>
                orientation: {props.text}
            </Text>
        </View>
    )

}
export default OrientationIndicator
