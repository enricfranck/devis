import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native/types";
import { TransactionAviProps, TransactionSectionProps } from "./types";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import {Ionicons} from '@expo/vector-icons';

const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center
`

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
return(
    <StyledView style={{backgroundColor: props.background}}>
        <Ionicons name={props.icon} size={25} color={colors.white}/>
    </StyledView>
   )
};
export default TransactionAvi;