import { Stack, Link, router, Redirect } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';



export default function Home() {
  return <Redirect href="/(auth)/onbording" />;

}
