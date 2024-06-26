import React, { forwardRef } from "react"
import { View, TextInput, Text, TextInputProps } from "react-native"
import { globalStyles } from "../../assets/global/globalStyles"

import styles from "./styles"
import { lightGray } from "../../assets/colors/colors"

interface InputFieldProps extends TextInputProps {
  label?: string
  placeholder?: string
  value?: string
  onChangeText?: (text: string) => void
  onSubmitEditing?: () => void
}

const InputField = forwardRef<TextInput, InputFieldProps>(function InputField(
  props,
  ref
) {
  const { label, placeholder, value, onChangeText, onSubmitEditing, ...rest } =
    props
  return (
    <View style={styles.section}>

      { (label && label !== "") && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, globalStyles.text]}>{label}</Text> 
        </View>
      )}
      
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={lightGray}
        style={[styles.input, globalStyles.text]}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        ref={ref}
        {...rest}
      />
    </View>
  )
})
export default InputField
