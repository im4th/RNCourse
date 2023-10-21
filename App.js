import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [modalVisible,setModalVisibility] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()},]);
        endAddGoalHandler();
    };

    function deleteGoalHandler(id){
        setCourseGoals(currentCourseGoals =>{
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    };

    function startAddGoalHandler(){
        setModalVisibility(true);
    };

    function endAddGoalHandler(){
        setModalVisibility(false);
    }

    return (<View style={styles.appContainer}>
    <Button title="Add New Goal" color={"#5e0acc"} onPress={startAddGoalHandler}></Button>
        <GoalInput onCancel={endAddGoalHandler} visible = {modalVisible} onAddGoal = {addGoalHandler}/>
        <View style={styles.goalsContainer}>
            <FlatList data={courseGoals} renderItem={itemData => {
                return (<GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>)
            }} keyExtractor={(item,index) => {return item.id;}}/>
        </View>
    </View>);
}
const styles = StyleSheet.create({
    appContainer: ({
        flex: 1, paddingTop: 50, paddingHorizontal: 16,
    }),goalsContainer: {
        flex: 5,
    }
});