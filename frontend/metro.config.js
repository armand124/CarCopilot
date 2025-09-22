// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Configure SVG transformer
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// Remove 'svg' from assetExts so Metro treats SVGs as modules
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");

// Add 'svg' to sourceExts
config.resolver.sourceExts.push("svg");

// Wrap with NativeWind
module.exports = withNativeWind(config, {
  input: "./global.css", // path to your Tailwind entry
});
