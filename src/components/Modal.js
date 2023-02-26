import { Modal as RNmodal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Button from "./Button";
import React from "react";

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onDeleteModal,
  onFilled
}) => {

  let btnFilled = null;
  let modalText = "¿Desea eliminar la tarea: ";

  if (selectedItem !== null) {

    if (!selectedItem.filled) {

      btnFilled = <Button
        styleButtonType={styles.buttonComplete}
        title="Completar"
        onPress={() => {
          onFilled(selectedItem.id)
        }}
      />

      modalText = "¿Desea completar o eliminar la tarea: " ;
    }
    
  }

  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
        <View style={styles.modalExit}>
          <View style={styles.modalHeaderContent}></View>
          <TouchableOpacity onPress={onCancelModal}>
            <Text style={styles.modalHeaderCloseText}>X</Text>
          </TouchableOpacity>
        </View>
          <Text style={styles.modalTitle}>Opciones diponibles</Text>
          <Text style={styles.modalText}>
            {modalText}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
          </Text>
          <View style={styles.modalActions}>
            <Button
              styleButtonType={styles.buttonDelete}
              title="Eliminar"
              onPress={() => {
                onDeleteModal(selectedItem.id);
              }}
            />
            {btnFilled}
          </View>
        </View>
      </View>
    </RNmodal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalExit: {
    flexDirection: "row",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonComplete: {
    backgroundColor: "#8FEF9C",
  },
  buttonDelete: {
    backgroundColor: "#FD9595",
  },
  modalHeaderCloseText: {
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    backgroundColor:'#E7E7E7',
    borderRadius:5,
    padding:2
  },
  modalHeaderContent: {
    flexGrow: 1,
  },
});
