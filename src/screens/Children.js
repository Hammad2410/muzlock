
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Content, Container, Header, Left, Body, Right, Thumbnail } from 'native-base';
import {
    widthPercentageToDP as wp, heightPercentageToDP
        as hp
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientText from '../components/GradientText';
import { RadioButton } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
import ScreenInsideProfileHeader from '../components/ScreensInsideProfileHeader';

const Childrens = ({ navigation }) => {
    const [NoOfChildren, setNoOfChildren] = useState('One');
    return (
        <Container>
            <Content style={{ flex: 1 }}>
                <ScreenInsideProfileHeader text="Children" navigation={navigation} />

                <View style={styles.ItemsView}>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            value="One "
                            color="red"
                            status={NoOfChildren === 'One' ? 'checked' : 'unchecked'}
                            onPress={() => setNoOfChildren('One')}
                        />
                        <Text style={{ marginTop: 8 }}>One </Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Two "
                            status={NoOfChildren === 'Two' ? 'checked' : 'unchecked'}
                            onPress={() => setNoOfChildren('Two')}
                        />
                        <Text style={{ marginTop: 8 }}>Two</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Three "
                            status={NoOfChildren === 'Three' ? 'checked' : 'unchecked'}
                            onPress={() => setNoOfChildren('Three')}
                        />
                        <Text style={{ marginTop: 8 }}>Three </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Four "
                            status={NoOfChildren === 'Four ' ? 'checked' : 'unchecked'}
                            onPress={() => setNoOfChildren('Four ')}
                        />
                        <Text style={{ marginTop: 8 }}>Four</Text>
                    </View>


                    <View style={{ flexDirection: 'row', marginLeft: 25 }}>
                        <RadioButton
                            color="red"
                            value="Five "
                            status={NoOfChildren === 'Five' ? 'checked' : 'unchecked'}
                            onPress={() => setNoOfChildren('Five')}
                        />
                        <Text style={{ marginTop: 8 }}>Five </Text>
                    </View>



                </View>



            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    ItemsView:
    {
        width: wp('100%'),
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10
        // height: 100
    }
})
export default Childrens;