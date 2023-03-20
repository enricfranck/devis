import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { colors } from "../components/colors";
import { Container } from "../components/shared";

import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Project/Project";
import { CardProps } from "../components/Cards/types";

import logo_1 from "./../../assets/cards/mc.png"
import logo_2 from "./../../assets/cards/visa_white.png"
import { TransactionProps } from "../components/Project/types";
import SendMoneySection from "../components/sendMoney/sendMoneySection";
import { SendMoneyProps, SendMoneySectionProps } from "../components/sendMoney/types";


import portrait_1 from "./../../assets/portraits/1.jpg"
import portrait_2 from "./../../assets/portraits/2.jpg"
import portrait_3 from "./../../assets/portraits/3.jpg"

import background from "./../../assets/bgs/background_v1.png"
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import { transactionData } from "../data/data";

export type Props = StackScreenProps<RootStackParamList, "Home">


const HomeContainer = styled(Container)`
    background-color: ${colors.graylight}; 
    width: ${100}%; 
    flex: 1;
`;

const Home: FunctionComponent<Props> = ({navigation}) => {

   

    const sendMoneyData: SendMoneyProps[] = [
        {
            id: 1,
            amount: "3860.00",
            name: "Cody Andoh",
            background: colors.tertiary,
            img: portrait_1
        },{
            id: 2,
            amount: "3860.00",
            name: "Cody Andoh",
            background: colors.primary,
            img: portrait_2
        },{
            id: 3,
            amount: "3860.00",
            name: "Jamse Andoh",
            background: colors.accent,
            img: portrait_3
        },{
            id: 4,
            amount: "3860.00",
            name: "Cody Andoh",
            background: colors.primary,
            img: portrait_1
        },{
            id: 5,
            amount: "3860.00",
            name: "Jamse Andoh",
            background: colors.accent,
            img: portrait_2
        },
    ]
return(
    <HomeContainer>
        <StatusBar style="dark"/>
        <TransactionSection data={transactionData}/>
        <SendMoneySection data={sendMoneyData}/>
    </HomeContainer>
);
};
export default Home;