import { StackNavigator } from 'react-navigation';
import Intro from '../../scenes/Intro';
import Login from '../../scenes/Login';
import TabBarNavigation from '../tabBar/tabBarNavigation';
import PhoneCodeScreen from '../../scenes/PhoneCodeScreen';
import RegisterNameScreen from '../../scenes/RegisterNameScreen';
import RegisterPhoneScreen from '../../scenes/RegisterPhoneScreen';

// import BaseHeader from '../../components/BaseHeaderComponent';

// const EnhancedLoginScreen = BaseHeader(Login, 'Login');
// const EnhancedRegisterName = BaseHeader(RegisterNameScreen, 'Name');
// const EnhancedRegisterPhone = BaseHeader(RegisterPhoneScreen, 'Phone number');

const Router = StackNavigator({
    intro: { screen: Intro },
    login: { screen: Login },
    tabBar: { screen: TabBarNavigation },
    phoneCode: { screen: PhoneCodeScreen},
    registerName: { screen: RegisterNameScreen},
    registerPhone: { screen: RegisterPhoneScreen}
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default Router