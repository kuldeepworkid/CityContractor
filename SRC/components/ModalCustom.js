import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

function ModalCustom({
  visible,
  children,
  onRequestClose,
  styleContentContainer,
  transparent = true,
  animationType = 'fade',
}) {
  return (
    <View>
      <Modal
        visible={visible}
        transparent={transparent}
        onRequestClose={onRequestClose}
        animationType={animationType}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <TouchableOpacity
          activeOpacity={1}
          onPress={onRequestClose}
          style={{...styles.modalContent, ...styleContentContainer}}>
          {children}
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ModalCustom;
