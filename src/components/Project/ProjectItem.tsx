import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import { TransactionProps, TransactionSectionProps } from "./types";
import TransactionAvi from "./ProjectAvi";
import { View } from "react-native";
import RegularText from "../texts/RegularText";
import { colors } from "../colors";
import SmallText from "../texts/SmallText";
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "../../screens/home";


const TransactionRow = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px
    width: ${100}%;
`


const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: ${100}%;
    flex: 2;
`

const RigthView = styled.View`
    flex: 1;
`
const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    const navigation = useNavigation<HomeProps['navigation']>()

return(
    <TransactionRow onPress={()=> {navigation.navigate('ProjectCreate', {})}}>
        <LeftView>
            <TransactionAvi background={props.art.backgournd} icon={props.art.icon}/>
                <View style={{marginLeft: 10}}>
                    <RegularText
                    textStyles={{
                        color: colors.secondary,
                        textAlign: "left", 
                        marginBottom: 5
                    }}>
                        {props.title}
                    </RegularText>
                    <SmallText textStyles={{
                        color: colors.graydark,
                        textAlign: "left", 
                        marginBottom: 5
                    }}>
                        {props.subtitle}
                    </SmallText>
                </View>
        </LeftView>
        <RigthView>
            <RegularText
                textStyles={{
                color: colors.secondary,
                textAlign: "right", 
                marginBottom: 5
                }}>
                {props.amount}
            </RegularText>
            <SmallText 
                textStyles={{
                color: colors.graydark,
                textAlign: "right", 
                marginBottom: 5
            }}>
                {props.date }
            </SmallText>
        </RigthView>
    </TransactionRow>
   )
};
export default TransactionItem;