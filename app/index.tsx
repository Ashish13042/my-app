import {Link} from "expo-router";
import {Text,View} from "react-native";
const Index = () =>{
  return (<View 
  style={{
    backgroundColor:"white",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  }}>
    <Text style={{fontSize:20,color:"black"}}>
      Hello World
    </Text>
    <Link href={"/about"}> Go to About </Link>

  </View>);
};

export default Index;