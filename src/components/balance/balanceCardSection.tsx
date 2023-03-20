import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ImageSourcePropType, GestureResponderEvent, StyleProp, ViewStyle, ImageStyle } from "react-native/types";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import {Ionicons} from '@expo/vector-icons';
import { BalanceCardProps } from "./types";
import BalanceCard from "./balanceCard";

const BalanceCardSectionBackground = styled.View`
    flex: 2;
    width: ${100}%;
    align-items: center;
    padding-horizontal: 25px;
    padding-top: 5px;
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${100}%;
`
const TransactionList = styled.FlatList`
    width: ${100}%;

`

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
return(
    <BalanceCardSectionBackground>
        <BalanceCard {...props}/>
    </BalanceCardSectionBackground>
   )
};
export default BalanceCardSection;