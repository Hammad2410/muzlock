import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 6;
const ComingSoon = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <Content contentContainerStyle={{ flex: 1 }}>

            <View style={{
                flexDirection: 'row', justifyContent: 'center',
                marginTop: '2%'
            }}>
                <Text style={{ fontSize: 14 }}>Coming Soon</Text>

            </View>

        </Content >
    )
}
export default ComingSoon;

const styles = StyleSheet.create({
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 1,
        borderColor: '#fca503',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#fca503',
    },
});