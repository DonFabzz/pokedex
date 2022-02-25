import { Button } from "react-native";

export default function CustomButton({color, name, text, consoleLog, setText}) {

  return (
  
    // Using react-natives built in components.
      <Button onPress={()=>{consoleLog(color); setText(color)}} 
              title={text} color={color} 
      />
  
  );
}