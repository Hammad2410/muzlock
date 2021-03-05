import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
    Content, Card, Thumbnail, Title, Paragraph,
    ScrollableTab, Tab, Tabs
} from 'native-base';
import { Avatar } from 'react-native-paper';
import SearchScreenCardView from '../components/SearchScreenCardComp';
const SearchForAnswer = ({ navigation }) => {
    return (
        <ScrollView>
            <Content contentContainerStyle={{ flex: 1 }}>

                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 40, backgroundColor: '#fff'
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            marginHorizontal: '4%',
                            marginVertical: '2%'
                        }}>
                        <Icon name="arrow-back-outline" size={20} />
                    </TouchableOpacity>


                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Image source={require('../assets/logo.png')}
                            resizeMode="contain"
                            style={{
                                width: 55, height: 37,
                                marginLeft: '40%',
                                //  justifyContent: 'center',
                                // alignSelf: 'center',
                                justifyContent: 'center'
                                // marginLeft: '30%'
                            }} />
                    </View>

                    <TouchableOpacity onPress={() => alert('Shared')}>
                        <Icon name="share-social" size={40} color="grey" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon name="cloud-download" size={40} color="grey" />
                    </TouchableOpacity>
                </View>

                {/* Search View */}
                <View style={{
                    flexDirection: 'row', height: 45, width: wp('80%'),
                    alignSelf: 'center', borderWidth: 1,
                    borderRadius: 20, marginTop: '3%',

                    backgroundColor: '#fff', borderColor: 'grey'
                }}>
                    <Icon style={{ marginLeft: '3%', alignSelf: 'center' }}
                        name="search" size={20} />
                    <TextInput placeholder="Search for answers "
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            textAlign: 'center',

                        }} />
                </View>

                <SearchScreenCardView
                    imgurl={require('../assets/intro/slide-1.png')}
                    title="Basics"
                    Question1="What is Muzlock ?"
                    Question2="How does muzlock works ?"
                    Question3="How does muzlock cost ?"
                    Question4="How do i Sign up for muzlock ?"
                    BtnTitle="View All Topics"
                />

                <SearchScreenCardView
                    imgurl={require('../assets/intro/slide-1.png')}
                    title="Account"
                    Question1="Do i hve to upload a photo ?"
                    Question2="What is selfie verification ?"
                    Question3="How do i change my gender ?"
                    Question4="How do i delte my muzlock account ?"
                    BtnTitle="View All Topics"
                />


                <SearchScreenCardView
                    imgurl={require('../assets/intro/slide-1.png')}
                    title="Matching"
                    Question1="How do i match or chat with someone on muzlock ?"
                    Question2="What is instant chat ?"
                    Question3="How do I filter the profile you show me ?"
                    Question4="How do i filter by distance or country ?"
                    BtnTitle="View All Topics"
                />

                <SearchScreenCardView
                    imgurl={require('../assets/intro/slide-1.png')}
                    title="Explore"
                    Question1="What is explore ?"
                    Question2="What is number n binoculars or red dot next to 
                    profile in explore ?"
                    Question3="What is Explore's visited you ?"
                    Question4="If i favorite someone , do they know ?"
                    BtnTitle="View All Topics"
                />

                <SearchScreenCardView
                    imgurl={require('../assets/intro/slide-1.png')}
                    title="Privacy"
                    Question1="Why does your app need my location ?"
                    Question2="How oftendo you get my location ?"
                    Question3="Why does my city name show up on my profile ?"
                    Question4="I don't want to be discoverable any more ,
                    how do i go offline ?"
                    BtnTitle="View All Topics"
                />



            </Content >
        </ScrollView>
    )
}
export default SearchForAnswer;