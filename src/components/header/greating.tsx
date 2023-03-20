import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";
import RegularText from "../texts/RegularText";
import SmallText from "../texts/SmallText";
import { colors } from "../colors";

const StyledView = styled.View`
    flex-direction: column
    width: ${100}%;
    justify-content: center;
    flex: 1;
`;
interface GreetingProps{
    mainText: string,
    subText: string,
    mainTextStyles?: StyleProp<TextStyle>
    subTextStyles?: StyleProp<TextStyle>
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
return(
    <StyledView>
        <RegularText
        textStyles={[{
            color: colors.secondary,
            fontSize: 22
            },
            props.mainTextStyles
        ]
            
        }
        >
            {props.mainText}
        </RegularText>
        <SmallText
        textStyles={[{
            color: colors.graydark,
            },
            props.subTextStyles
        ]
            
        }
        >
            {props.subText}
        </SmallText>
    </StyledView>
);
};
export default Greeting;