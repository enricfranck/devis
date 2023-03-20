import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import { AmountProps } from "./types";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import RegularButtons from "../Buttons/RegularButtons";
import { Ionicons } from "@expo/vector-icons";

const ButtonSectionBackground = styled.View`
    flex: 1;
    width: ${100}%;
    align-items: enter;
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

const ButtonSection: FunctionComponent<AmountProps> = (props) => {
return(
    <ButtonSectionBackground>
       <RegularButtons btnStyles={{width: "50%"}} onPress={()=>{}}>
         Cancel <Ionicons size={17} name="card" color={colors.white}/>
       </RegularButtons>
    </ButtonSectionBackground>
   )
};
export default ButtonSection;