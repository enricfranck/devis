import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import { AmountProps } from "./types";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";

const AmountSectionBackground = styled.View`
    flex: 1;
    width: ${100}%;
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

const AmountSection: FunctionComponent<AmountProps> = (props) => {
return(
    <AmountSectionBackground>
        <SmallText textStyles={{
            color: colors.secondary,
            marginBottom: 15
        }}>
             Total Balance
        </SmallText>
        <RegularText textStyles={{
            color: colors.secondary,
            fontSize: 28
        }}>
            ${props.balance}
        </RegularText>
    </AmountSectionBackground>
   )
};
export default AmountSection;