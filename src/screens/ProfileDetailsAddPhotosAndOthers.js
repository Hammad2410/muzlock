import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../styles/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AddPhotos from '../components/AddPhotos';
import IconTextToggle from '../components/IconTextToggle';
import SettingComponent from '../components/SettingsComponent';


const ProfileDetails = ({ navigation }) => {
    const [BlurPhoto, setBlurPhoto] = useState(false);
    const [LinkInstaPhoto, setLinkInstaPhoto] = useState(false);
    const BlurMyPhoto = () => {
        setBlurPhoto(!BlurPhoto)
    }
    const LinkMyInstaPhoto = () => {
        setLinkInstaPhoto(!LinkInstaPhoto)
    }
    return (
        <ScrollView>
            <Content contentContainerStyle={{ flex: 1 }}>
                <Header style={{ backgroundColor: '#fff', elevation: 0 }}>
                    <Left style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                width: '50%',
                                flex: 1,
                                marginLeft: '4%',
                                alignContent: 'center', justifyContent: 'center'
                            }}>
                            <Icon name="close-outline" size={30} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Thumbnail square source={require('../assets/swipepageicons/header-logo.png')} style={{ alignSelf: 'center', flex: 1, resizeMode: 'contain' }} />
                    </Body>
                    <Right style={{ flex: 1 }} />

                </Header>
                <View style={{ backgroundColor: '#fff', paddingBottom: 5 }}>
                    <Text style={styles.profileText}>Profile</Text>
                </View>

                <View style={{ marginTop: '3%', borderWidth: 1, opacity: 0.5 }}></View>

                <View style={{
                    marginVertical: '5%',
                    // marginHorizontal: '4%',
                    justifyContent: 'space-around',
                    flexDirection: 'row'
                }}>

                    <AddPhotos />
                    <AddPhotos />
                    <AddPhotos />

                </View>

                <View style={{
                    marginVertical: '5%',
                    // marginHorizontal: '4%',
                    justifyContent: 'space-around',
                    flexDirection: 'row'
                }}>

                    <AddPhotos />
                    <AddPhotos />
                    <TouchableOpacity
                        onPress={() => alert('Pressed')}
                        style={{ justifyContent: 'center' }}
                    >
                        <Icon style={{ alignSelf: 'center' }}
                            name="alert-circle" size={30} />
                        <Text style={{ width: wp('20%') }}
                        >Tap Here For Other Photos Guide Lines</Text>
                    </TouchableOpacity>

                </View>

                <View style={{
                    marginTop: '3%', borderWidth: 1,
                    opacity: 0.5
                }}></View>

                <IconTextToggle icon="help" name="Blur My Photos"
                    itemState={BlurPhoto}
                    ToggleHandler={BlurMyPhoto}
                    size={20}
                    color="red"
                />
                <IconTextToggle icon="logo-instagram"
                    name="Link Instagram Photos "
                    itemState={LinkInstaPhoto} ToggleHandler={LinkMyInstaPhoto}
                    size={20}
                    color="red"
                />

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="videocam"
                        textName="Video Selfie Verification"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="menu"
                        textName="Basic Info"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>


                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="help"
                        textName="Education and Carrier"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="flag"
                        textName="Ethnicity"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>



                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="chatbox"
                        textName="Language"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>


                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="help"
                        textName="Life Style"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="help"
                        textName="Apearance"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="person"
                        textName="Marital Status"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="happy"
                        textName="Children"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>

                <View style={{ marginTop: '4%' }}>
                    <SettingComponent
                        iconLeft="help"
                        textName="Marriage Plans"
                        iconRight="chevron-forward"
                        iconLeftColor="red" iconRightColor="grey" />
                </View>



            </Content>
        </ScrollView>
    )
}
export default ProfileDetails;

const styles = StyleSheet.create({
    profileText:
    {
        fontSize: 20, fontWeight: 'bold',
        marginTop: '2%', textAlign: 'center'
    }
})