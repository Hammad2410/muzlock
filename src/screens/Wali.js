import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs, Header, Left, Right, Body, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Wali = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={{ marginVertical: 10, textAlign: 'center', fontSize: 28, color: 'grey', fontWeight: 'bold' }}>
                Enable Wali
          </Text>

            <Text style={{
                width: wp('90%'), fontSize: 18,
                color: 'grey',
                textAlign: 'center'
            }}>
                We believe in making Muzlock to be Halal and Safe place for all our members to find their life partners.We
                offer optional Wali(guardian) feature on your chats.
            </Text>

            <Text style={{
                marginVertical: 15,
                width: wp('90%'), fontSize: 18,
                color: 'grey',
                textAlign: 'center'
            }}>
                To enable Wali(Guardian) feature , enter an email address below.
                Once confirmed they will receive weekly transcripts of your chats on Muzlock
            </Text>

            <View style={styles.EmailTextInput} >
                <TextInput placeholder="Enter Email"
                    keyboardType="email-address"
                    style={{ paddingLeft: 10, alignContent: 'center' }}
                />

            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 15 }}>
                <TouchableOpacity
                    onPress={() => alert('Confirm')}
                    style={[styles.EmailTextInput, {
                        backgroundColor: 'red',

                        marginVertical: 10, alignSelf: 'center',

                    }]}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20 }}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </Content>
    )
}
export default Wali;

const styles = StyleSheet.create({
    EmailTextInput:
    {
        borderWidth: 1, width: wp('90%'),
        alignSelf: 'center', borderColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        height: hp('8%')
    }
})