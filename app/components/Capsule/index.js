import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Capsule = ({label}) => {
  return (
    <View
    style={styles.containerStyle}>
    <Text style={styles.label}>
      {label}
    </Text>
  </View>
  )
}

export default Capsule