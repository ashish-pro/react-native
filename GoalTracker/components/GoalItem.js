import { StyleSheet, View, Text } from 'react-native'

function GoalItem(props) {
    <View style={styles.goalItems}>
        <Text style={styles.goalItemText} >{props.text}</Text>
    </View>
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#18224b',
        padding: 10,
    },
    goalItemText: {
        color: 'white',
    },
})