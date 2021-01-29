import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Content, Header, Left, Body, Right, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp }
    from 'react-native-responsive-screen';
const Feedback = ({ navigation }) => {
    return (
        <Content style={{ flex: 1 }}>
            <Header style={{ backgroundColor: '#fff' }}>
                <Left >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-outline" size={30} />
                    </TouchableOpacity>
                </Left>
                <Body style={{ flex: 1, }}>
                    <Thumbnail square
                        source={require('../assets/swipepageicons/header-logo.png')} style={{
                            alignSelf: 'center', flex: 1,

                            resizeMode: 'contain'
                        }} />
                </Body>

                <Right style={{ flex: 1 }} />

            </Header>

            <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text style={{
                    fontFamily: 'Questrial-Regular',
                    fontSize: 22,
                    color: 'grey', textAlign: 'center'
                }}>Feedback</Text>
                <Text style={{ textAlign: 'center', fontSize: 15 }}>
                    Let us know why you are leaving us . We are always looking to improve
                    and welcome your honest feedback
</Text>


                <TouchableOpacity style={{ marginVertical: 5, flexDirection: 'row' }}>
                    <Thumbnail square
                        source={require('../assets/swipepageicons/header-logo.png')}
                        style={styles.btnImage} />
                    <Text style={styles.btnText}>I made a partner on muzlock</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 5, flexDirection: 'row' }}>
                    <Thumbnail square
                        source={require('../assets/swipepageicons/header-logo.png')}
                        style={styles.btnImage} />
                    <Text style={styles.btnText}>I made a partner elsewhere</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 5, flexDirection: 'row' }}>
                    <Thumbnail square
                        source={require('../assets/swipepageicons/header-logo.png')}
                        style={styles.btnImage} />
                    <Text style={styles.btnText}>I want to take a break</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert('not like muzlock ')}
                    style={{ marginVertical: 5, flexDirection: 'row' }}>
                    <Thumbnail square
                        source={require('../assets/swipepageicons/header-logo.png')}
                        style={styles.btnImage} />
                    <Text style={styles.btnText}>I didn't like muzlock</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => alert('not like muzlock ')}
                    style={{ marginVertical: 5, marginLeft: '5%', flexDirection: 'row' }}>
                    <Icon name="help-circle-outline" size={40} color="red" />
                    <Text style={styles.btnText}>I didn't like muzlock</Text>
                </TouchableOpacity>

                <Text style={{ marginLeft: '5%', fontSize: 20 }}>More Information</Text>
                <TextInput
                    style={{
                        shadowOffset: { width: 5, height: 10 },
                        shadowColor: 'red',
                        shadowOpacity: 0.8,
                        shadowRadius: 4,
                        marginTop: 5,
                        alignSelf: 'center',
                        borderRadius: 15,
                        backgroundColor: '#fff', width: wp('90%')
                    }}

                    numberOfLines={5}
                    multiline
                />



            </View>

            <Text style={{ marginTop: '5%', textAlign: 'center', fontSize: 20, color: '#bd0413' }}>
                Please select a reason why you are leaving
                </Text>

            <View style={{

                justifyContent: 'flex-end',
                flex: 1
            }}>
                <TouchableOpacity style={{
                    width: wp('40%'),
                    height: 40,
                    borderRadius: 18,
                    backgroundColor: '#bd0413', flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                        Submit
                </Text>
                </TouchableOpacity>
            </View>


        </Content>
    )
}
export default Feedback;

const styles = StyleSheet.create({
    btnText:
    {
        marginLeft: '5%',
        alignSelf: 'center',
        color: '#bd0413',
        fontSize: 20
    },
    btnImage:
    {
        alignSelf: 'center',
        marginLeft: '5%',
        resizeMode: 'contain'
    }
})