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
const ConfirmationCode = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}>
            <Image
                style={{

                    justifyContent: 'center', alignSelf: 'center'
                }}
                resizeMode="contain"
                source={require('../assets/otpverificationpage/otp-image.png')}

            />
            <View style={{
                flexDirection: 'row', justifyContent: 'center',
                marginTop: '2%'
            }}>
                <Text style={{ fontSize: 14 }}>Enter the code sent to</Text>
                <Text style={{
                    color: 'red', fontWeight: 'bold',
                    fontSize: 15
                }}>  +44xxxxxxx</Text>
            </View>


            <View style={{ marginTop: '2%' }}>
                <CodeField

                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    onEndEditing={() => navigation.navigate('DateOfBirth')}


                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '6%' }}>
                <Text>Didn't recieved the code ?</Text>
                <TouchableOpacity><Text style={{ color: '#21eda2' }}> RESEND</Text></TouchableOpacity>
            </View>




        </Content >
    )
}
export default ConfirmationCode;

const styles = StyleSheet.create({
    cell: {
        marginHorizontal: 10,
        width: 37,
        height: 40,
        lineHeight: 35,
        fontSize: 24,
        borderBottomWidth: 1,
        borderColor: '#fca503',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#fca503',
    },
});