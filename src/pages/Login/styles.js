import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
  },

  title: {
    fontSize: 48,
    color: '#f92e6a',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#f92e6a',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#4d5156'
  },
  buttonLogin: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f92e6a',
    marginTop: 30,
    borderRadius: 50,
  },
  textButtonLogin: {
    color: '#ffffff',
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning: {
    paddingLeft: 10,
    color: '#bdbdbd',
    fontSize: 16
  },
  registration: {
    marginTop: 20,
    color: '#1877f2',
    fontSize: 16
  }
})