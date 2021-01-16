import React from "react";
import { Image, View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { Content, Item, ListItem, Left, Icon, Right, Thumbnail, Body, Header } from 'native-base';
import { heightPercentageToDP, widthPercentageToDP } from "../components/React Native Responsive Screen/";

const Shield = ({ navigation }) => {
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
            <View style={styles.text}>
                <Text style={{ color: "#808080", fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>Muz Shield</Text>
                <Text style={{ color: "#808080", fontSize: 17, alignSelf: "center", textAlign: "center", marginTop: 10 }}>Have Piece of mind by avoiding unwanted guests using MuzShields.
                        You will appear in search of those only,who fall into your preffered criteria</Text>

                <ListItem noBorder >
                    <Item style={styles.list}>
                        <Icon style={{ color: "red" }} name={'help-outline'} />
                        <Text style={{ fontSize: 18, color: "#1A1A1A" }}>Ethnicity</Text>
                        <Text style={{ fontSize: 12, color: "#1A1A1A", marginLeft: 32, position: "absolute", paddingTop: 55 }}>Limit location by</Text>
                        <Icon style={{ position: "absolute", marginLeft: 300 }} name={'help-outline'} />
                    </Item>

                </ListItem>
                <ListItem noBorder >
                    <Item style={styles.list}>
                        <Icon style={{ color: "red" }} name={'help-outline'} />
                        <Text style={{ fontSize: 18, color: "#1A1A1A" }}>Age Group</Text>
                        <Text style={{ fontSize: 12, color: "#1A1A1A", marginLeft: 32, position: "absolute", paddingTop: 55 }}>Any Age</Text>
                        <Icon style={{ position: "absolute", marginLeft: 300 }} name={'help-outline'} />
                    </Item>

                </ListItem>
                <ListItem noBorder >
                    <Item style={styles.list}>
                        <Icon style={{ color: "red" }} name={'help-outline'} />
                        <Text style={{ fontSize: 18, color: "#1A1A1A" }}>Education</Text>
                        <Text style={{ fontSize: 12, color: "#1A1A1A", marginLeft: 32, position: "absolute", paddingTop: 55 }}>All</Text>
                        <Icon style={{ position: "absolute", marginLeft: 300 }} name={'help-outline'} />
                    </Item>

                </ListItem>
                <ListItem noBorder >
                    <Item style={styles.list}>
                        <Icon style={{ color: "red" }} name={'help-outline'} />
                        <Text style={{ fontSize: 18, color: "#1A1A1A" }}>Profession</Text>
                        <Icon style={{ position: "absolute", marginLeft: 300 }} name={'help-outline'} />
                    </Item>
                </ListItem>
            </View>
        </Content>
    )
}
const styles = StyleSheet.create({
    logoIconView:
    {
        flex: 1,
        alignItems: 'center',
    },

    text: {
        marginTop: '20%',
        position: 'absolute',
        justifyContent: 'center'
    },
    list: {
        marginTop: 35,
        borderBottomColor: 'transparent',

    }

})
export default Shield;