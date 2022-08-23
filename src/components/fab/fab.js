import { Dimensions, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import React, { useReducer } from 'react'
// import Color from '../../constants/Color';
// import Icon, { Icons } from '../../components/Icons';
import Animated, { Extrapolate, interpolate, interpolateColor, log, useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated';

const Color =  {
    primary: '#637aff',
    primaryDark: '#2759ff',
    primaryLite: '#637aff99',
    black: '#000',
    white: 'white',
    accent: '#112233',
    green: '#60c5a8',
    green2: '#039a83',
    light: '#EEEEEE',
    dark: '#333',
    gray: '#CCCCCC',
    red: '#ff2f68',
    lightRed: '#ff4f7e',
    darkRed: '#d9365e',
    purple: '#8f06e4',
    skyBlue: 'skyblue',
    yellow: '#f8c907',
    pink: '#ff4c98',
    gold: 'gold',
    line: '#282C35',
    gray: '#CCCCCC',
    darkGray: '#999999',

    darkOverlayColor: 'rgba(0, 0, 0, 0.4)',
    darkOverlayColor2: 'rgba(0, 0, 0, 0.8)',
    lightOverlayColor: 'rgba(255, 255, 255, 0.6)',
    primaryAlpha: 'rgba(99, 122, 255, 0.15)',
    redAlpha: 'rgba(255, 84, 84, 0.15)',
    greenAlpha: 'rgba(96, 197, 168, 0.15)',
    purpleAlpha: 'rgba(146, 6, 228, 0.15)',


    // bags background Color
    bag1Bg: '#ea7a72',
    bag2Bg: '#c2c5d1',
    bag3Bg: '#82a7c9',
    bag4Bg: '#d49d8f',
    bag5Bg: '#ccd9c6',
    bag6Bg: '#767676',
    bag7Bg: '#d1c8c3',
    bag8Bg: '#dca47f',
    bag9Bg: '#eb849c',
    bag10Bg: '#979dc1',
    bag11Bg: '#c7d3c0',
}

const { width } = Dimensions.get('window')

const FAB_SIZE = 54;
const circleScale = (width / FAB_SIZE).toFixed(1)
const circleSize = circleScale * FAB_SIZE;
const dist = circleSize / 2 - FAB_SIZE;
const middleDist = dist / 1.41;

const ActionButton = ({ icon, style, onPress = () => { } }) => {
  return (
    <Animated.View style={[styles.actionBtn, style]}>
      <TouchableHighlight
        underlayColor={Color.lightRed}
        style={styles.actionBtn}
        onPress={onPress}>
        <Icon type={Icons.EvilIcons} name={icon} size={34} color={Color.white} />
      </TouchableHighlight>
    </Animated.View>
  )
}

export default function Fab() {
  const [open, toggle] = useReducer(s => !s, false)

  const rotation = useDerivedValue(() => {
    return withTiming(open ? '0deg' : '135deg');
  }, [open])

  const progress = useDerivedValue(() => {
    return open ? withSpring(1) : withSpring(0)
  })

  const translation = useDerivedValue(() => {
    return open ? withSpring(1, { stiffness: 80, damping: 8 }) : withSpring(0)
  })

  const fabStyles = useAnimatedStyle(() => {
    const rotate = rotation.value;
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Color.red, Color.darkRed]
    )
    return {
      transform: [{ rotate }],
      backgroundColor,
    }
  })

  const scalingStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [0, circleScale],
    )
    return {
      transform: [{ scale }]
    }
  })

  const translationStyles = (x, y, value) => (
    useAnimatedStyle(() => {
      const translate = interpolate(
        translation.value,
        [0, 1],
        [0, -value],
        { extrapolateLeft: Extrapolate.CLAMP }
      )
      const scale = interpolate(
        progress.value,
        [0, 1],
        [0, 1],
        { extrapolateLeft: Extrapolate.CLAMP }
      )
      if (x && y) {
        return {
          transform: [{ translateX: translate }, { translateY: translate }, { scale }]
        }
      } else if (x) {
        return {
          transform: [{ translateX: translate }, { scale }]
        }
      } else {
        return {
          transform: [{ translateY: translate }, { scale }]
        }
      }
    })
  )
  return (
    <View style={styles.container}>
      <View style={styles.fabContainer}>
        <Animated.View style={[styles.expandingCircle, scalingStyles]} />
        <TouchableWithoutFeedback onPress={toggle}>
          <Animated.View style={[styles.fab, fabStyles]}>
            <Icon type={Icons.EvilIcons} name="close" color={Color.white} size={34} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <ActionButton style={translationStyles(false, true, dist)} icon="calendar" />
        <ActionButton style={translationStyles(true, true, middleDist)} icon="share-google" />
        <ActionButton style={translationStyles(true, false, dist)} icon="gear" />
      </View>
    </View>
  )
}

const CircleStyle = {
  width: FAB_SIZE,
  height: FAB_SIZE,
  borderRadius: FAB_SIZE / 2,
  justifyContent: 'center',
  alignItems: 'center',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.accent,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fab: {
    ...CircleStyle,
    backgroundColor: Color.red,
    transform: [{ rotate: '135deg' }]
  },
  expandingCircle: {
    ...CircleStyle,
    // transform: [{ scale: 8 }],
    backgroundColor: Color.red,
    position: 'absolute',
    zIndex: -1,
  },
  actionBtn: {
    ...CircleStyle,
    backgroundColor: Color.darkRed,
    position: 'absolute',
    zIndex: -1,
  },
})