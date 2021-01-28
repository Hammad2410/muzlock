import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Content, Thumbnail, ScrollableTab, Tab, Tabs, Header, Left, Right, Body, Container } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PrivacyPolicyAccount from '../components/PrivacyPolicyAccount';


const PrivacyPolicy = ({ navigation }) => {
    const [Discoverability, setDiscoverability] = useState(false);
    const [messagePreview, setMessagePreview] = useState(false);
    const [StealthMode, setStealthMode] = useState(false);
    const [HideOnlineStatus, setHideOnlineStatus] = useState(false);
    const [hideAge, setHideAge] = useState(false);
    const DiscoverabilityHandler = () => {
        setDiscoverability(!Discoverability)
    }
    const MessagePreviewHandler = () => {
        setMessagePreview(!messagePreview)
    }
    const StealthModeHandler = () => {
        setStealthMode(!StealthMode)
    }
    const HideOnlineStatusHandler = () => {
        setHideOnlineStatus(!HideOnlineStatus)
    }
    const HideAgeHandler = () => {
        setHideAge(!hideAge)
    }

    return (
        <Content contentContainerStyle={{ flex: 1 }}>
            <Header style={{ backgroundColor: '#fff', elevation: 0 }}>
                <Left style={{ flex: 1 }} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            width: '50%',
                            flex: 1,
                            marginLeft: '4%',
                            alignContent: 'center', justifyContent: 'center'
                        }}>
                        <Icon name="arrow-back-outline"
                            color="black"
                            size={40} />
                    </TouchableOpacity>
                </Left>

                <Body style={{ flex: 1, marginLeft: '-10%' }}>
                    <Text style={{ fontSize: 20 }}>Account</Text>
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>

            <View style={{ backgroundColor: '#f2f2f2', height: 60, justifyContent: 'center' }}>
                <Text style={{
                    fontSize: 20,
                    paddingHorizontal: '5%',
                    fontWeight: 'bold'

                }}>Basic Privacy</Text>
            </View>
            <PrivacyPolicyAccount title="Discoverability" details="Allow people 
            to see your profile while swipping
            " toggleHandler={DiscoverabilityHandler} state={Discoverability} />


            <PrivacyPolicyAccount title="Show message preview" details="Show message text in notification
            " toggleHandler={MessagePreviewHandler} state={messagePreview} />


            <PrivacyPolicyAccount title="Stealth Mode" details="Only b show to people you like
            " toggleHandler={StealthModeHandler} state={StealthMode} />


            <View style={{
                backgroundColor: '#f2f2f2',
                height: hp('14%')
                ,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Text style={{
                    flex: 1, paddingHorizontal: '5%',
                    fontSize: 20, fontWeight: 'bold',

                }}>Premium Privacy</Text>

                <TouchableOpacity

                    style={styles.upgradeAccessBtn}>
                    <Text style={{ textAlign: 'center', color: '#fff' }}>Upgrade to Access</Text>
                </TouchableOpacity>

            </View>




            <PrivacyPolicyAccount title="Hide Online Status" details="Prevent others from seeing if you are online
            " toggleHandler={HideOnlineStatusHandler} state={HideOnlineStatus} />

            <PrivacyPolicyAccount title="Hide Age" details="Hide your age on your profile
            " toggleHandler={HideAgeHandler} state={hideAge} />



        </Content>
    )
}
export default PrivacyPolicy;
const styles = StyleSheet.create({
    upgradeAccessBtn:
    {
        width: wp('35%'),
        height: hp(
            '6%'
        ),
        borderRadius: 25,
        backgroundColor: '#294be3',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#294be3'
    }
})