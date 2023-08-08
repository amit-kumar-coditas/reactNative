import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        paddingHorizontal:12,
        marginBottom:12,
        shadowColor: '#000',
        shadowOffset: { width: 1.5, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 1, 
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    labelContainer:{
        backgroundColor:'#D0EAF3',
        borderBottomEndRadius: 4,
        borderBottomStartRadius:4,
        paddingHorizontal:8,
        paddingVertical:4,
    },
    label: {
        fontSize:10,
        fontWeight:'500',
        color:'#306999'
    },
    endTime:{
        fontSize:11,
        color:'#024680',
        alignSelf:'center',
        fontWeight:'500'
    },
    rupee:{
        color:'#333333',
        textDecorationLine:'line-through'
    },
    rowMargin:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:12
    },
    prize:{
        color:'#333333',
        fontSize:16,
        fontWeight:'700'
    },
    rupeeGreen: {
        height:24,
        borderRadius:4,
        paddingHorizontal:8,
        paddingVertical:5,
        backgroundColor:'#00BF36'
    },
    greenCash:{
        fontSize:12,
        color:'#FFFFFF',
        fontWeight:'500'
    },
    prizeContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'50%'
    },
   text:{
    fontSize:11,
    color:'#666666',
    fontWeight:'400'
   },
   cardFooter: {
    backgroundColor:'#FAFAFA',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:10,
    marginTop:12
   },
   teams:{
    color:'#333333',
    fontSize:10,
    fontWeight:'400'
   },
   iconRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:'30%'
   },
   img:{
    width:20,
    height:20
   }
})

export default styles;