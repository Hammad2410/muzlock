import React from "react";
import { Image, View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { Content, Item, ListItem, Header, Left, Right, Body, Icon, Thumbnail } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Matches = ({ navigation }) => {
    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
                <Left style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Icon name="chevron-back" size={30} />
                    </TouchableOpacity>
                </Left>
                <Body style={{ flex: 1 }}>
                    <Thumbnail square source={require('../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                </Body>


                <Right style={{ flex: 1 }} >
                    <TouchableOpacity  >
                        <Text style={{ fontSize: 16, color: 'red' }}>Clear All</Text>
                    </TouchableOpacity>
                </Right>

            </Header>
            {/* <View style={styles.logoIconView}>
                <Image
                    style={{ alignContent: 'center', width: wp('35%'), height: hp('10%') }}
                    source={require('../assets/logo.png')} />
            </View> */}
            <View>
                <Text style={styles.txt}>Premium Matches</Text>
                <Text style={styles.txt1}>We recommend following peoples to be best suited as per you history with us</Text>
            </View>
            <ScrollView>
                <ListItem noBorder >
                    <Item style={styles.list}>
                        <ImageBackground
                            style={{
                                borderRadius: 15,
                                overflow: "hidden",
                                width: wp('40%'), height: hp('40%'),
                                opacity: 0.7
                            }}
                            resizeMode={"cover"}
                            source={require('../assets/loginpageslider/3.jpg')}
                        />
                        <View style={styles.card}>
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Mina,26</Text>
                            <Text style={{ fontSize: 18, color: '#FFFF00', fontWeight: 'bold' }}>4h left</Text>
                            <Image
                                style={{
                                    alignContent: 'center', position: "absolute", alignItems: "flex-end",
                                    width: wp('13%'), height: hp('5%'), marginLeft: 100, marginTop: 230
                                }}
                                source={require('../assets/swipepageicons/star.png')} />

                        </View>
                    </Item>
                    <Item style={styles.list} >
                        <ImageBackground
                            style={{
                                borderRadius: 15,
                                overflow: "hidden",
                                width: wp('40%'), height: hp('40%'),
                                opacity: 0.7
                            }}
                            resizeMode={"cover"}
                            source={require('../assets/loginpageslider/1.jpg')}
                        />
                        <View style={styles.card}>
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Mina,26</Text>
                            <Text style={{ fontSize: 18, color: '#FFFF00', fontWeight: 'bold' }}>4h left</Text>
                            <Image
                                style={{
                                    alignContent: 'center', position: "absolute", alignItems: "flex-end",
                                    width: wp('13%'), height: hp('5%'), marginLeft: 100, marginTop: 230
                                }}
                                source={require('../assets/swipepageicons/star.png')} />
                        </View>
                    </Item>
                </ListItem>
                <ListItem noBorder >
                    <Item style={styles.list}>
                        <ImageBackground
                            style={{
                                borderRadius: 15,
                                overflow: "hidden",
                                width: wp('40%'), height: hp('40%'),
                                opacity: 0.7
                            }}
                            resizeMode={"cover"}
                            source={require('../assets/loginpageslider/3.jpg')}
                        />
                        <View style={styles.card}>
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Mina,26</Text>
                            <Text style={{ fontSize: 18, color: '#FFFF00', fontWeight: 'bold' }}>4h left</Text>
                            <Image
                                style={{
                                    alignContent: 'center', position: "absolute", alignItems: "flex-end",
                                    width: wp('13%'), height: hp('5%'), marginLeft: 100, marginTop: 230
                                }}
                                source={require('../assets/swipepageicons/star.png')} />

                        </View>
                    </Item>
                    <Item style={styles.list} >
                        <ImageBackground
                            style={{
                                borderRadius: 15,
                                overflow: "hidden",
                                width: wp('40%'), height: hp('40%'),
                                opacity: 0.7
                            }}
                            resizeMode={"cover"}
                            source={require('../assets/loginpageslider/1.jpg')}
                        />
                        <View style={styles.card}>
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Mina,26</Text>
                            <Text style={{ fontSize: 18, color: '#FFFF00', fontWeight: 'bold' }}>4h left</Text>
                            <Image
                                style={{
                                    alignContent: 'center', position: "absolute", alignItems: "flex-end",
                                    width: wp('13%'), height: hp('5%'), marginLeft: 100, marginTop: 230
                                }}
                                source={require('../assets/swipepageicons/star.png')} />
                        </View>
                    </Item>
                </ListItem>
                <ListItem noBorder >
                    <Item style={styles.list}>
                        <ImageBackground
                            style={{
                                borderRadius: 15,
                                overflow: "hidden",
                                width: wp('40%'), height: hp('40%'),
                                opacity: 0.7
                            }}
                            resizeMode={"cover"}
                            source={require('../assets/loginpageslider/3.jpg')}
                        />
                        <View style={styles.card}>
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Mina,26</Text>
                            <Text style={{ fontSize: 18, color: '#FFFF00', fontWeight: 'bold' }}>4h left</Text>
                            <Image
                                style={{
                                    alignContent: 'center', position: "absolute", alignItems: "flex-end",
                                    width: wp('13%'), height: hp('5%'), marginLeft: 100, marginTop: 230
                                }}
                                source={require('../assets/swipepageicons/star.png')} />

                        </View>
                    </Item>
                    <Item style={styles.list} >
                        <ImageBackground
                            style={{
                                borderRadius: 15,
                                overflow: "hidden",
                                width: wp('40%'), height: hp('40%'),
                                opacity: 0.7
                            }}
                            resizeMode={"cover"}
                            source={require('../assets/loginpageslider/1.jpg')}
                        />
                        <View style={styles.card}>
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Mina,26</Text>
                            <Text style={{ fontSize: 18, color: '#FFFF00', fontWeight: 'bold' }}>4h left</Text>
                            <Image
                                style={{
                                    alignContent: 'center', position: "absolute", alignItems: "flex-end",
                                    width: wp('13%'), height: hp('5%'), marginLeft: 100, marginTop: 230
                                }}
                                source={require('../assets/swipepageicons/star.png')} />
                        </View>
                    </Item>
                </ListItem>
            </ScrollView>

        </Content>
    )
}
const styles = StyleSheet.create({
    logoIconView:
    {
        justifyContent: 'center', alignSelf: 'center'
    },
    txt: {
        color: "black",
        fontWeight: "bold",
        fontSize: 28,
        // marginTop: '20%',
        // position: 'absolute',
        alignSelf: 'center', justifyContent: 'center'

    },
    txt1: {
        color: "black",
        fontSize: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: "center",
        padding: 5

    },
    list: {
        marginLeft: 15,
        borderBottomColor: 'transparent',
        justifyContent: "space-evenly"

    },
    card: {
        paddingTop: 230,
        paddingLeft: 10,
        position: 'absolute',
        alignContent: 'flex-end',
    },


})
export default Matches;