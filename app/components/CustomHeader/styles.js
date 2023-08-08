import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#D53A29',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 14,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      headerTxt: {color: '#FFFFFF', fontWeight: '500'},
      headerBoldTxt: {fontSize: 15, fontWeight: '700'},
      rightContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        alignItems: 'center',
      } 
})

export default styles;