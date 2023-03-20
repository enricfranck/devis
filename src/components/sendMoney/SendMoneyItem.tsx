import React, {FunctionComponent, useRef} from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import RegularText from "../texts/RegularText";
import { colors } from "../colors";
import SmallText from "../texts/SmallText";
import { SendMoneyProps } from "./types";
import { ScreenWidth } from "../shared";
import Profile from "../header/profile";

const SendMoneyItemContainer = styled.TouchableHighlight`
    height: 130px;
    width: ${ScreenWidth * 0.27}px;
    padding: 10px; 
    border-radius: 15px;
    justify-content: space-around;
    margin: 0px 10px 10px 0px
`

const SendMoneyItem: FunctionComponent<SendMoneyProps> = (props) => {
return(
    <SendMoneyItemContainer
        underlayColor={colors.secondary}
        style={{backgroundColor: props.background}}
        onPress={()=> {alert("Send money")}}
    >
        <>
        <Profile img={props.img} imageContainerStyle={{marginBottom:10}}/>
            <SmallText textStyles={{
                textAlign: "left",
                color: colors.white,
                fontSize: 12
            }}>
                {props.name}
            </SmallText >
            <RegularText  textStyles={{
                textAlign: "left",
                color: colors.white,
                fontSize: 13
            }}>
                {props.amount}
            </RegularText>
        
        </>
    </SendMoneyItemContainer>
   )
};
export default SendMoneyItem;