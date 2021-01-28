import React, { useState } from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Swiper from '../components/Swiper';
import { Content } from 'native-base';
import { Colors } from '../styles/colors';
import { heightPercentageToDP, widthPercentageToDP } from "../components/React Native Responsive Screen/";
import PremiumModal from '../components/premiumModal';



const Premium = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <Swiper
                style={{ height: heightPercentageToDP("50%") }}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activedot} />}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='cover' source={require('../assets/premiummatchpage/dating.jpg')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='contain' source={require('../assets/premiummatchpage/dating1.jpg')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='contain' source={require('../assets/premiummatchpage/dating2.jpg')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode='contain' source={require('../assets/premiummatchpage/dating3.jpg')} />
                </View>
            </Swiper>
            <View style={styles.text}>


                <Text style={styles.TextStyle}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s with the </Text>
                <Content>
                    <TouchableOpacity style={styles.bottomBtn} onPress={() => setModalVisible(true)}>
                        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Try Premium For Free</Text>
                    </TouchableOpacity>
                </Content>
            </View>
            <PremiumModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        </Content>

    )
}
const styles = StyleSheet.create({
    text: {
        marginTop: '120%',
        position: 'absolute',
        justifyContent: 'center'
    },
    TextStyle: {
        textAlign: "center",
        color: "#808080",
        fontSize: 15,
        borderBottomWidth: 0.5,
        borderColor: '#808080',
        paddingBottom: 10,

    },
    bottomBtn:
    {
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: widthPercentageToDP('90%'),
        borderRadius: 30,
        height: 45,
        backgroundColor: '#F2384A',
    },
    btn: {
        marginTop: '120%',
        position: 'absolute',
        justifyContent: 'center'
    },
    dot: {
        backgroundColor: '#FFF',
        borderColor: '#070707',
        width: 8,
        height: 8,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: heightPercentageToDP("55%"),
        borderWidth: 1
    },
    activedot: {
        backgroundColor: Colors.button,
        width: 12,
        height: 12,
        borderRadius: 6,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: heightPercentageToDP("55%"),
    },

})
export default Premium;