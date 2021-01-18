import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SearchScreenCardView = ({ imgurl, title, Question1, Question2, Question3,
    Question4, BtnTitle }) => {
    return (
        <View style={{
            backgroundColor: '#fff', marginTop: '4%',
            borderRadius: 20,
            height: 420,
            width: wp('90%'),
            alignSelf: 'center'
        }}>
            <Image
                // source={{ uri: { imgurl } }}
                source={imgurl}
                style={{ width: wp('50%'), height: '40%' }}
            />
            <View style={{

                flexDirection: 'row'
            }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>{title}  </Text>
                <Text style={{ marginTop: 5 }}>25 topics such as </Text>
            </View>
            <View style={{ marginTop: '4%' }}>
                <Text> {Question1}</Text>
                <Text>{Question2}</Text>
                <Text>{Question3}</Text>
                <Text>{Question4} </Text>
            </View>
            <TouchableOpacity style={styles.viewAllTopicsbtn}>
                <Text style={{ textAlign: 'center', color: 'red' }}>{BtnTitle}</Text>
            </TouchableOpacity>

        </View>
    )
}
export default SearchScreenCardView;

const styles = StyleSheet.create({
    viewAllTopicsbtn:
    {
        marginTop: '2%',
        height: 35,
        justifyContent: 'center',
        alignSelf: 'center', backgroundColor: '#fff',
        borderColor: 'grey',
        width: wp('30%'), borderWidth: 1,
        borderRadius: 25
    }
})