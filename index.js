/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/components/ReduxeExample/store';
// import {persistor, store} from './src/redux/store';
// <Provider store={store}>
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);
