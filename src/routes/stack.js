import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IssuePage from "../components/IssuePage";
import LogIn from "../components/LogIn";
import IssueDescription from "../components/IssueDescriptionPage";

const screens = {
  LogIn: {
    screen: LogIn,
  },
  IssuePage: {
    screen: IssuePage,
  },
  IssueDescription: {
    screen: IssueDescription,
  },
};

const Stack = createStackNavigator(screens);

/*function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="IssuePage" component={IssuePage} />
        <Stack.Screen name="IssueDecription" component={IssueDescription} />
      </Stack.Navigator>
    );
  }*/

export default createAppContainer(Stack);
