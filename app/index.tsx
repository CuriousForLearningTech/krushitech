import { Stack, Link } from 'expo-router';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Introduction' }} />
      <Container>
        <Swiper
          loop={false}
          showsPagination={true}
          style={{ flex: 1 }}
        >
          <ScreenContent>
            <Image source={require('~/assets/image1.png')} style={{ width: '100%', height: 300 }} />
            <ScreenContent title="Welcome to My Kisan Friend" />
            <Button title="Next" onPress={() => swiperRef.current?.scrollBy(1)} />
          </ScreenContent>
          <ScreenContent>
            <Image source={require('~/assets/image2.png')} style={{ width: '100%', height: 300 }} />
            <ScreenContent title="Manage your farm" />
            <Button title="Next" onPress={() => swiperRef.current?.scrollBy(1)} />
          </ScreenContent>
          <ScreenContent>
            <Image source={require('~/assets/image3.png')} style={{ width: '100%', height: 300 }} />
            <ScreenContent title="Get Started" />
            <Button title="Get Started" onPress={() => navigate('/auth')} />
          </ScreenContent>
        </Swiper>
      </Container>
    </>
  );
}
