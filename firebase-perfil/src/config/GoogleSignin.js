import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { API_KEY, CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId: CLIENT_ID, // Client ID from Firebase Console
});
