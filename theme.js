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
      borderWidth: 2,
      borderRadius: 5,
      borderColor:'blue',
      backgroundColor:'blue',
      justifyContent:'center',
      height: 40,
      margin: 12
    },
    buttonText:{
      color:'white',
      fontSize:10
    },
  };
  
  export default theme;