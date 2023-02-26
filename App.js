import { Alert, StyleSheet, View } from "react-native";
import { ListItem, Modal, NewItemHeader } from "./src/components";
import React, { useState } from "react";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [lastId, setLastId] = useState(0);

  const onChangeText = (text) => {
    setItemText(text);
  };  

  const addItemToState = () => {

    //Verificamos que el imput no sea enviado vacio
    if (itemText.trim() === "") {
      Alert.alert('Error','El campo de tarea no puede quedar vacio');
      return;
    }

    const actualId = parseInt(lastId) + 1;
    const newArr = [...items, { id: actualId, value: itemText.trim(), filled:false }];
    setItems(newArr);
    setItemText("");
    setLastId(actualId);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onFilled = (id) => {
    for (let i = 0; i < items.length; i++) {
      
      if (items[i].id === id) {
        items[i].filled = true;
      }

    }
    setModalVisible(!modalVisible);
    setItems(items);
    setSelectedItem(null);    
  }

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      {/* COMPONENTE PARA AÑADIR ITEMS */}
      <NewItemHeader
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToState={addItemToState}
        inputPlaceHolder="Ingresar nueva tarea"
      />
      {/* LISTA DE ITEMS */}
      <ListItem items={items} openModal={openModal} />
      {/* MODAL DE ACCIONES */}
      <Modal
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
        onFilled={onFilled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
});
