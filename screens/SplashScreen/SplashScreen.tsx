import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';
import styles from './style';

type SplashScreenProp = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const SplashScreen: React.FC<SplashScreenProp> = ({navigation: {navigate}}) => {
  // get height from deminstion
  const {height} = Dimensions.get('window');

  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          height: height / 2.5,
        }}
        resizeMode="contain"
        source={require('../../assets/images/courier.png')}
      />
      <View style={styles.Container}>
        <Text style={styles.TextHeading}>Cara Cepat Kirim Paket Anda</Text>
        <Text style={styles.TextDescription}>
          Temukan Agen untuk mengirim paket anda dengan mudah dan cepat di dekat
          anda
        </Text>
        {/* button cta */}
        <View style={styles.ContainerCta}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={styles.ButtonCta}>
            <Text style={styles.CtaText}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
