"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expo_status_bar_1 = require("expo-status-bar");
const react_native_1 = require("react-native");
function App() {
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.Text, null, "Open up App.js to start working on your app!"),
        React.createElement(expo_status_bar_1.StatusBar, { style: "auto" })));
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
