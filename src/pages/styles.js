import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#282a40",
  },
  img: {
    width: 150,
    height: 150,
  },
  textView: {
    margin: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff2',
  },
  text: {
    fontSize: 18,
    color: '#FF8C00',
    textAlign: 'center',
  },
  button: {
    borderWidth: 0.8,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#304050',
  },
  btnText: {
    fontSize: 16,
    color: '#f2c140',
  },
});

export default styles;