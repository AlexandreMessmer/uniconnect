import { StyleSheet } from "react-native"
import { lightPeach, peach } from "../../assets/colors/colors"

export const styles = StyleSheet.create({
    confirmButton: {
        alignItems: "center",
        backgroundColor: lightPeach,
        borderColor: peach,
        borderRadius: 15,
        borderWidth: 2,
        height: "6%",
        justifyContent: "center",
        margin: 15,
        width: "40%",
    },
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    }, 
    header: {
        alignItems: "center",
        height: "10%",
        justifyContent: "center",
        width: "100%",
    },
    map: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    screenTitle: {
        fontSize: 20,
        paddingTop: "10%",
    }

})