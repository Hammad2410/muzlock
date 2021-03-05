import React, { useState } from 'react';
import { View, Text, Image, FlatList, Modal, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default premiumModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.modalMainView}>

                <View >
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>Upgrade to Salams Premium</Text>

                    <View style={{ height: hp('30%') }}>
                        <Swiper style={styles.wrapper}
                        >
                            <View style={styles.slide1}>

                                <Text style={styles.text}>
                                    Increased Privacy</Text>
                                <Text style={{ textAlign: 'center' }}>
                                    With Stealth Mode, only those you can like can see you , Hide your age too if you want
                                </Text>
                            </View>
                            <View style={styles.slide2}>

                                <Text style={styles.text}>Undo Swipes</Text>
                                <Text style={{ textAlign: 'center' }}>
                                    Accidentaly swiped left when you meant to swipe right ? undo it with premium !
                                </Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>Advanced Search Filters</Text>
                                <Text style={{ textAlign: 'center' }}>
                                    Filter by family origin, education , and more so that youcan find the one quicker !
                                </Text>
                            </View>



                            <View style={styles.slide3}>
                                <Text style={styles.text}>See who Likes You</Text>
                                <Text style={{
                                    textAlign: 'center', marginHorizontal: '8%',
                                }}>
                                    Instantly match with the people you like and privately pass on the ones you don't
                                </Text>
                            </View>

                            <View style={styles.slide3}>

                                <Text style={{
                                    fontWeight: 'bold',
                                    textAlign: 'center', marginHorizontal: '8%',
                                }}>
                                    Premium Members are More Likely to find their future Spouse. Here's Why...
                                </Text>
                            </View>
                        </Swiper>
                    </View>



                    <View style={{
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: 'grey',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: hp('25%')
                    }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                            }}>
                            <Text style={{
                                textAlign: 'center',
                                borderBottomColor: 'grey',
                                borderBottomWidth: 1
                            }}>
                                Best Value
         </Text>
                            <Text style={{ textAlign: 'center', color: 'grey', fontSize: 30, fontWeight: 'bold' }}>
                                12
         </Text>
                            <Text style={{

                                // justifyContent: 'center',
                                alignSelf: 'center', textAlign: 'center'
                            }}>
                                months
         </Text>

                            <Text style={{
                                alignSelf: 'center',
                                borderColor: 'grey',
                                textAlign: 'center', borderWidth: 1,
                                borderRadius: 20,
                                width: wp('20%')
                            }}>
                                70.99
         </Text>
                            <Text style={{

                                // justifyContent: 'center',
                                alignSelf: 'center',
                                textAlign: 'center'
                            }} >
                                5.91/mon
</Text>
                            <Text style={{
                                color: '#fff', padding: 5,
                                alignSelf: 'center', backgroundColor: 'red', borderWidth: 1
                            }}>
                                Save 70%
           </Text>

                        </TouchableOpacity>




                        <TouchableOpacity style={{
                            height: hp('20%'),
                            elevation: 3,
                            flex: 1,
                            // width: wp('25%'),
                            borderColor: '#175aeb',
                            borderWidth: 1,
                        }}>
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                borderBottomColor: 'grey',
                                borderBottomWidth: 1,
                                backgroundColor: '#175aeb'
                            }}>
                                Most Popular
         </Text>
                            <Text style={{ textAlign: 'center', color: 'grey', fontSize: 30, fontWeight: 'bold' }}>
                                12
         </Text>

                            <Text style={{

                                // justifyContent: 'center',
                                alignSelf: 'center', textAlign: 'center'
                            }}>
                                months
</Text>

                            <Text style={{
                                alignSelf: 'center',
                                borderColor: 'grey',
                                textAlign: 'center', borderWidth: 1,
                                borderRadius: 20,
                                width: wp('20%')
                            }}>
                                38.99
         </Text>
                            <Text style={{

                                // justifyContent: 'center',
                                alignSelf: 'center',
                                textAlign: 'center'
                            }} >
                                5.91/mon
</Text>
                            <Text style={{
                                color: '#fff', padding: 5,
                                alignSelf: 'center', backgroundColor: 'red', borderWidth: 1
                            }}>
                                Save 70%
</Text>

                        </TouchableOpacity>



                        <TouchableOpacity style={{

                            // backgroundColor: 'ora',
                            flex: 1
                            , marginHorizontal: '2%'
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                borderBottomColor: 'grey',
                                borderBottomWidth: 1
                            }}>

                            </Text>
                            <Text style={{ textAlign: 'center', color: 'grey', fontSize: 30, fontWeight: 'bold' }}>
                                1
         </Text>
                            <Text style={{

                                // justifyContent: 'center',
                                alignSelf: 'center', textAlign: 'center'
                            }}>
                                months
         </Text>

                            <Text style={{
                                alignSelf: 'center',
                                borderColor: 'grey',
                                textAlign: 'center', borderWidth: 1,
                                borderRadius: 20, width: wp('20%')
                            }}>
                                19.49
                             </Text>

                        </TouchableOpacity>
                    </View>

                    <TouchableHighlight
                        style={{
                            marginVertical: '4%',
                            width: wp('70%'),
                            height: 40,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderWidth: 1, borderRadius: 20,
                            backgroundColor: '#175aeb',
                            borderColor: '#175aeb'
                        }}>
                        <Text style={{
                            textAlign: "center",
                            color: '#fff'
                        }}>CONTINUE</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={{
                            alignSelf: 'center',
                            marginBottom: 5
                        }}
                        // style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            props.setModalVisible(!props.modalVisible);
                        }}
                    >
                        <Text
                            style={{ color: 'grey' }}
                        >NO THANKS</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalMainView:
    {
        // marginTop: '15%',
        height: hp('75%'),
        width: '90%',
        alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#fff',
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})