/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Index from './src/pages/index'
import Pix from './src/pages/pix'
AppRegistry.registerComponent(appName, () => Index);
