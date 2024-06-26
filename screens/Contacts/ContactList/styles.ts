import { StyleSheet } from "react-native"
import { lightPeach, peach } from "../../../assets/colors/colors"

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    backgroundColor: lightPeach,
    borderColor: peach,
    borderRadius: 100,
    height: 80,
    justifyContent: "center",
    marginVertical: 5,
    width: "100%",
  },
  container: {
    flex: 1,
  },
  descriptionContainer: {
    height: "50%",
    justifyContent: "center",
  },
  informationsContainer: {
    borderColor: peach,
    borderRadius: 100,
    borderWidth: 2,
    height: "100%",
    paddingLeft: "24%",
    paddingRight: "5%",
    width: "100%",
  },
  listContainer: {
    flex: 1,
  },
  profilePicture: {
    alignItems: "center",
    borderColor: peach,
    borderRadius: 100,
    borderWidth: 2,
    height: 80,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    width: 80,
  },
})
