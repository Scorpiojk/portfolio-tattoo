import { Linking } from 'react-native-web'

const handleWhatsAppPress = async () => {
    await Linking.openURL("https://wa.me/+542974624196") 
};

export default handleWhatsAppPress;