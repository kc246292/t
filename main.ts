input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showString("Hello!")
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
