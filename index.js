/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
  );
AppRegistry.registerComponent(appName, () => Root);
