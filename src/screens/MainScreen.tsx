import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { defaultColors } from "../constants/palette";
import { useAppDispatch } from "../store";
import { RootState } from "../store/reducer";


const MainScreen = () => {
    const dispatch = useAppDispatch();
    const count = useSelector((state: RootState) => state.infoReducer.count);

    console.log(defaultColors.primary);
    
    return (
        <View style={styles.container}>
            <Text>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: defaultColors.primary,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MainScreen;