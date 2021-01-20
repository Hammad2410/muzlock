import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AddPhotos = () => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => alert('Pressed')}
                style={styles.addphotobtn}>
                <Icon
                    style={styles.addIconStyle}
                    name="add-circle" size={30} color="red" />
            </TouchableOpacity>
        </View>
    )
}
export default AddPhotos;

const styles = StyleSheet.create({
    addphotobtn:
    {
        borderWidth: 1, borderStyle: 'dashed',
        borderRadius: 5,
        width: wp('22%'), height: hp('25%'),
        backgroundColor: '#dce3de'
    },
    addIconStyle:
    {
        width: wp('100%'),
        marginLeft: 70, marginTop: 150,
        position: 'absolute'
    }
})