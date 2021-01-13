import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const btn = StyleSheet.create({
    bottomBtn:
    {
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#eb3f50',
        width: wp('35%'),
        borderRadius: 20,
        height: 40,
        backgroundColor: '#f2384a'
    }
})