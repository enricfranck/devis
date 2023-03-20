import React, {FunctionComponent, useRef} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native/types";
import { ScreenWidth } from "../shared";
import { colors } from "../colors";

import card_bg from "./../../../assets/bgs/background_transparent.png"
import RegularText from "../texts/RegularText";
import { View } from "react-native";
import SmallText from "../texts/SmallText";
import { CardProps } from "../Cards/types";
import { BalanceCardProps } from "./types";

const CardBackground = styled.ImageBackground`
    height: ${85}%;
    width: ${100}%;
    border-radius: 25px;
    background-color: ${colors.accent}
    overflow: hidden;
`

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`
const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${100}%;
`
const Logo = styled.Image`
    width: ${100}%;
    height: ${80}%;
    resize-mode: contain;
    flex: 1;
`

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {


return(
    <CardBackground source={card_bg} >
            <TouchableView>
                <CardRow>
                    <RegularText textStyles={{color: colors.white}}>
                        ****** {props?.accountNo?.slice(6,10)}
                    </RegularText>
                </CardRow>
                <CardRow>
                    <View style={{flex: 3}}>
                        <SmallText textStyles={{marginBottom: 5, color: colors.white}}>
                            Total Balance
                        </SmallText>
                        <RegularText textStyles={{fontSize: 19, color: colors.white}}>
                            ${props.balance}
                        </RegularText>
                    </View>
                    <Logo source={props.logo}/>
                </CardRow>
            </TouchableView>
    </CardBackground>
  
   )
};
export default BalanceCard;