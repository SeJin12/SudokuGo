import { Platform, SafeAreaView, StatusBar } from "react-native";

interface Props {
    children: React.ReactNode
}

const AppContainer = (props: Props) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            }}>
            {props.children}
        </SafeAreaView>)
}

export default AppContainer;