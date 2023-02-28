import type { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "dooboo",
  slug: "auth-session-error",
  privacy: "public",
  platforms: ["ios", "android", "web"],
  version: "1.0.0",
  orientation: "default",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  userInterfaceStyle: "automatic",
  scheme: "auth-session",
  ios: {
    supportsTablet: true,
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
  },
  android: {
    userInterfaceStyle: "automatic",
  },
  web: {
    bundler: "metro",
  },
});
