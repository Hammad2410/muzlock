import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs, Header, Left, Right, Body, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
const LockOnExit = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>

                <View style={{
                    //  justifyContent: 'center',
                    marginVertical: 10
                }}>
                    <Text style={{
                        fontSize: 30, fontWeight: 'bold',
                        color: 'grey', textAlign: 'center'
                    }}> Lock on exit</Text>
                </View>

                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 15 }}>
                    Set up a PIN to enable the app Lock on exit
    </Text>
                <View style={{ marginTop: '5%' }}>
                    <CodeField

                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        // onEndEditing={() => navigation.navigate('DateOfBirth')}


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



            </Content>
        </Container>
    )
}
export default LockOnExit;

const styles = StyleSheet.create({
    cell: {
        marginHorizontal: 10,
        width: wp('20%'),
        height: 60,

        lineHeight: 45,
        fontSize: 24,
        borderBottomWidth: 3,
        borderColor: '#fca503',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#fca503',
    },
});