import { Text, TextInput, View } from 'react-native';

function TitleButton({ title, placeHolder, value, setValue, hidden = false }) {
  return (
    <View className="py-4">
      <Text className="text-xl font-bold">{title}</Text>
      <TextInput
        secureTextEntry={hidden}
        autoCapitalize="none"
        className="text-xl rounded-lg"
        placeholder={placeHolder}
        value={value}                 
        onChangeText={setValue}     
      />
    </View>
  );
}

export default TitleButton;
