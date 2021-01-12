import React from 'react'
import { View, Text } from 'react-native'
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';


export default function gradientText(props) {
    return (

        <MaskedView
            style={{ height: 20, flexDirection: 'row' }}
            maskElement={
                <View
                    style={{
                        // Transparent background because mask is based off alpha channel.
                        backgroundColor: 'transparent',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >

                    <Text
                        style={{
                            fontSize: 24,
                            color: 'black',
                            fontWeight: 'bold'
                        }}
                    >
                        {props.text}
                    </Text>

                </View>
            }
        >
            {/* Shows behind the mask, you can put anything here, such as an image */}
            < LinearGradient
                // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                // locations={[0, 0.5, 1]}
                colors={['blue', 'red']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            />
        </MaskedView >

    )
} 
