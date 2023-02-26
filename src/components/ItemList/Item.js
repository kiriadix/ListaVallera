import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";

const Item = ({ itemData, openModal }) => {
  let color = "#ccc"
  if (itemData.item.filled) {
    color = "#91FF2F"
  }

  return (
    <Pressable
      style={{...styles.itemContainer, backgroundColor: color}}
      onPress={() => {
        openModal(itemData.item);
      }}
    >
      <Text style={styles.item}>{itemData.item.value}</Text>
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
    itemContainer: {
        margin: 10,
        padding: 10,
        borderRadius: 5
      },
      item: {
        padding: 10,
        textAlign: "center",
      },
});
