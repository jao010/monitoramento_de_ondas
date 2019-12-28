import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './home';
import ViewOndas from './DadosOndas/viewOndas';


const Routes = createAppContainer(
  createStackNavigator({
    Home,
    MostrarOndas: ViewOndas,
  })
);

export default Routes;
