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

export default createAppContainer(Stack);
