import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Entypo } from "@expo/vector-icons"
import { black } from "../../assets/colors/colors"
import styles from "./styles"
import { globalStyles } from "../../assets/global/globalStyles"

interface LabelProps {
  text: string
  onClick: () => void
  testID: string
}

const Label: React.FC<LabelProps> = ({ text, onClick, testID }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onClick}
        style={styles.buttonView}
        testID={testID}
      >
        <Entypo name="cross" color={black} size={16} testID="icon-cross" />
        <Text style={styles.text}>
          <Text style={[globalStyles.text, styles.text]}>{text}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Label
