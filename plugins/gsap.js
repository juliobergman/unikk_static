import Vue from 'vue'

// GSAP
import { gsap } from 'gsap'
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { Draggable } from 'gsap/Draggable'
import { EaselPlugin } from 'gsap/EaselPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { PixiPlugin } from 'gsap/PixiPlugin'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(
  CSSRulePlugin,
  Draggable,
  EaselPlugin,
  MotionPathPlugin,
  PixiPlugin,
  TextPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  ExpoScaleEase,
  RoughEase,
  SlowMo
)

gsap.defaults({ overwrite: 'auto', lazy: false })

console.log('gsap plugin')

// Mixin
Vue.mixin({
  created() {
    this.gsap = gsap
  },
})
