import React, { useRef, useState } from 'react';
import { Content, Button, Container } from 'native-base';
import Swiper from '../../components/Swiper';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import GradientText from '../../components/GradientText';
import { heightPercentageToDP, widthPercentageToDP } from "../../components/React Native Responsive Screen";


function welcome(props) {

    const [idActive, setIdActive] = useState()

    const swiper = useRef(null)

    const onPressNext = () => {
        if (idActive == 3) {
            //  _onDone();

            return
        }
        swiper.current.scrollBy(1);
    }

    const onPressBack = () => {

        swiper.current.scrollBy(-1);
    }


    return (

        <Content contentContainerStyle={{ flex: 1 }}>
            <Swiper
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activedot} />}
                loop={false}
                ref={swiper}
                onIndexChanged={(index) => setIdActive(index)}>
                <View style={styles.IntroView}>

                    <Image
                        resizeMode="contain"
                        source={require("../../assets/logo.png")}
                        style={{ height: heightPercentageToDP('10%'), width: widthPercentageToDP("25%") }}
                    />
                    <Text style={styles.title}>MuzLock</Text>
                    <Image
                        resizeMode="contain"
                        source={require("../../assets/intro/slide-1.png")}
                        style={{ height: heightPercentageToDP("35%"), width: widthPercentageToDP("50%") }}
                    />

                    <GradientText text={"Discover"} />
                    <Text style={styles.title}>Discover & Meet Single Muslims Nearby</Text>




                </View>


                <View style={styles.IntroView}>
                    <Image
                        resizeMode="contain"
                        source={require("../../assets/logo.png")}
                        style={{ height: heightPercentageToDP('10%'), width: widthPercentageToDP("25%") }}
                    />
                    <Text style={styles.title}>MuzLock</Text>
                    <Image
                        resizeMode="contain"
                        source={require("../../assets/intro/slide-2.png")}
                        style={{ height: heightPercentageToDP("35%"), width: widthPercentageToDP("50%") }}
                    />

                    <GradientText text={"Match"} />
                    <Text style={styles.title}>If other user also like your request then its a match</Text>

                </View>

                <View style={styles.IntroView}>
                    <Image
                        resizeMode="contain"
                        source={require("../../assets/logo.png")}
                        style={{ height: heightPercentageToDP('10%'), width: widthPercentageToDP("25%") }}
                    />
                    <Text style={styles.title}>MuzLock</Text>
                    <Image
                        resizeMode="contain"
                        source={require("../../assets/intro/slide-3.png")}
                        style={{ height: heightPercentageToDP("35%"), width: widthPercentageToDP("50%") }}
                    />

                    <GradientText text={"Audio/Video Calls"} />
                    <Text style={styles.title}>Unlimited Audio/Video Calls without compromising your privacy</Text>
                </View>

                <View style={styles.IntroView}>
                    <Image
                        resizeMode="contain"
                        source={require("../../assets/logo.png")}
                        style={{ height: heightPercentageToDP('10%'), width: widthPercentageToDP("25%") }}
                    />
                    <Text style={styles.title}>MuzLock</Text>
                    <Image
                        resizeMode="contain"
                        source={require("../../assets/intro/slide-4.png")}
                        style={{ height: heightPercentageToDP("35%"), width: widthPercentageToDP("50%") }}
                    />

                    <GradientText text={"Premium Club"} />
                    <Text style={styles.title}>Go premium for an extra boost</Text>

                </View>
            </Swiper>
            <View style={{ flexDirection: 'row', marginVertical: 50, justifyContent: 'space-around' }}>
                {idActive != 0 && <Button
                    onPress={() => onPressBack()}
                    rounded
                    block
                    style={styles.IntroBtn}>
                    <Text style={styles.IntroText}>{'Previous'}</Text>
                </Button>}
                <Button
                    onPress={() => onPressNext()}
                    rounded
                    block
                    style={styles.IntroBtn}>
                    <Text style={styles.IntroText}>{idActive === 3 || idActive === 0 ? 'Get Started' : 'Next'}</Text>
                </Button>
            </View>
            {/* <TouchableOpacity onPress={() => _onDone()}>
                    <Text style={[styles.skipText]}>Skip</Text>
                </TouchableOpacity> */}
        </Content>
    )
}

export default welcome