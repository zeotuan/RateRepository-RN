import {Platform} from 'react-native'


const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      error: '#d73a4a',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: Platform.select({
      android:'Roboto',
      ios:'Arial',
      default:'System'
    }),
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    button:{
      borderRadius: 5,
      backgroundColor:'#0366d6',
      justifyContent:'center',
      height: 40,
      padding: 10,
      alignItems: 'center',
    },
    deleteButton:{
      borderRadius: 5,
      backgroundColor:'#0366d6',
      justifyContent:'center',
      height: 40,
      padding: 10,
      alignItems: 'center',
      backgroundColor:'red'
    },
    buttonText:{
      color:'white',
      fontSize:10,
      fontWeights:'bold'
    },
  };
  
  export default theme;