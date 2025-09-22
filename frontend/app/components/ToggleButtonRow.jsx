import { Text, TouchableOpacity, View } from 'react-native';

function ToggleButtonRow({ title_off, title_on, value, setValue }) {
  const off_color = 'bg-gray-200';
  const on_color = 'bg-black';

  return (
    <View className="pt-6 flex-row">
      <TouchableOpacity
        onPress={() => setValue(!value)}
        className={`${value ? on_color : off_color} self-baseline rounded-md w-6 h-6`}
      />
      <TouchableOpacity onPress={() => setValue(!value)}>
        <Text className="left-2 text-xl pb-2">
          {value ? title_off : title_on}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ToggleButtonRow;
