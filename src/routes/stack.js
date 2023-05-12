
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IssuePage from "../components/IssuePage";
import LogIn from "../components/LogIn";
import IssueDescription from "../components/IssueDescriptionPage";

const Stack = createStackNavigator();


function Navigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="IssuePage" component={IssuePage} />
      <Stack.Screen name="IssueDescription" component={IssueDescription} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

// const screens = {
//   LogIn: {
//     screen: LogIn,
//     navigationOptions: {
//       title: "GitHub Issue Tracker"
//     }
//   },
//   IssuePage: {
//     screen: IssuePage,
//     navigationOptions: {
//       title: "Issues Page"
//     }
//   },
//   IssueDescription: {
//     screen: IssueDescription,
//     navigationOptions: {
//       title: "Issues Description Page"
//     }
//   },
// };

// const Stack = createStackNavigator(screens,
//   {
//     defaultNavigationOptions: {
//       headerTintColor: '#000',
//       headerStyle: { backgroundColor: '#eee' }
//     }
//   });

// export default createAppContainer(Stack);
