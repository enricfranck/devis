import { FunctionComponent } from "react"
import { GestureResponderEvent, Modal, View } from "react-native"
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularButtons from "../Buttons/RegularButtons";

export interface ProjectCreateProps{
    visible: boolean
    cancel: (() => void)
}

const DialogBackground = styled.View`
    width: ${100}%;
    flex: 1;
    justify-content: center;
    align-items: center;
`

const DialogContainer = styled.TouchableOpacity`
    height: ${50}%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white}
`


const DialogCreateProject: FunctionComponent<ProjectCreateProps> = (props) => {

    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.cancel}
        >
            <DialogBackground>
                <DialogContainer>
                    <RegularButtons onPress={props.cancel} btnStyles={{width: 12}}>Annuler</RegularButtons>
                    <RegularButtons onPress={props.cancel}>Ajouter</RegularButtons>
                </DialogContainer>
            </DialogBackground>
        </Modal>
    )
    
} 
export default DialogCreateProject