## Expo Auth session bug report

### Description

This example works well with `expo@47.0.3` and `expo-auth-session@3.8.0`. But there was an error on `ios` after upgrade to `expo@48` and `expo-auth-session@4.0.3`.

### To reproduce the bug

1. Install packages

```sh
yarn
# or
npm i
```

2. Start project with `yarn start` on `IOS`, then try to click `AUTH LOGIN` button.
3. You can see a error below.

<img width="381" src="https://user-images.githubusercontent.com/58724686/221757058-f4a2251a-c49a-443e-8723-75237f9b5692.png">
