import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const HomeScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://jtlexpress.co.id/aplikasi/lokasi-pos-android',
      }}></WebView>
  );
};

export default HomeScreen;
