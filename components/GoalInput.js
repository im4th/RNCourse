import { TextInput, StyleSheet, View, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (<Modal visible={props.visible} animationType="slide">
                <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/watermark.jpg")}/>
                    <TextInput style={styles.textInput} 
                        placeholder="Your guest name" 
                        onChangeText={goalInputHandler} z
                        value={enteredGoalText}/>
                        <View style={styles.buttonContainer}>
                        <View style= {styles.button}><Button title="Add guest" onPress={addGoalHandler}/></View>
                        <View style= {styles.button}><Button title="cancel" onPress={props.onCancel}></Button></View>
                        </View>
                </View>
            </Modal>);
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1, borderColor: '#cccccc', width: '100%', marginRight: 8, padding: 8
    }, inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderColor: 'black',
        backgroundColor: "#311b6b"
    }, buttonContainer:{
        marginTop: 16,
        flexDirection: "row",
    }, button: {
        width: "30%",
        marginHorizontal: 8
    }, image: {
        width: 100,
        height: 100,
        margin: 20
    }
});