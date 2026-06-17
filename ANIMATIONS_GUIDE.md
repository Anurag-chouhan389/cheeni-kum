# Cheeni Kum - Animations Guide

## New Animations Added ✨

You now have **22 keyframe animations** and **50+ utility classes** ready to use!

---

## Quick Start - Utility Classes

Apply these directly to HTML elements:

```html
<!-- Entrance Animations -->
<div class="anim-bounce-in">Element bounces in</div>
<div class="anim-slide-left">Slides in from left</div>
<div class="anim-flip-in">3D flip entrance</div>

<!-- Continuous Animations -->
<div class="anim-bounce">Bounces continuously</div>
<div class="anim-swing">Swings side-to-side</div>
<div class="anim-float">Floats up and down</div>
<div class="anim-rotate">Spins continuously</div>
<div class="anim-glow">Glows with gold effect</div>
```

---

## Animation Categories

### 🚀 Entrance Animations (1x play)
- `.anim-bounce-in` - Element bounces in with scale
- `.anim-bounce-up` - Bounces up with gravity
- `.anim-slide-left` - Slides in from left
- `.anim-slide-right` - Slides in from right
- `.anim-slide-down` - Slides in from top
- `.anim-flip-in` - 3D Y-axis flip
- `.anim-flip-in-x` - 3D X-axis flip
- `.anim-scale-up` - Scales up from small
- `.anim-scale-down` - Scales down from large
- `.anim-blur-in` - Fades in with blur effect

**Duration:** 0.8s (modifier: `.anim-fast`, `.anim-slow`)

---

### 🎪 Continuous Animations (loops forever)
- `.anim-bounce` - Up and down bouncing
- `.anim-swing` - Rotating swing motion
- `.anim-swing-left` - Horizontal swing left
- `.anim-swing-right` - Horizontal swing right
- `.anim-wobble` - Wiggling with rotation
- `.anim-wiggle` - Skew-based wiggling
- `.anim-shake` - Rapid side-to-side
- `.anim-float` - Gentle floating (3s)
- `.anim-float-alt` - Alternative floating (2.5s)
- `.anim-drift` - Smooth drifting motion
- `.anim-rotate` - Full 360° spin
- `.anim-rotate-slow` - Slow spin (20s)
- `.anim-rotate-pulse` - Rotating pulse
- `.anim-pulse` - Opacity pulsing
- `.anim-pulse-big` - Scale pulsing
- `.anim-glow` - Gold shadow glow
- `.anim-glow-text` - Gold text glow
- `.anim-shadow-bounce` - Shadow bouncing effect

---

## Duration Modifiers

Override animation speed with:
- `.anim-fast` - 0.5s (snappy)
- `.anim-normal` - 1s (standard)
- `.anim-slow` - 1.5s (elegant)
- `.anim-slowest` - 2s (graceful)

**Example:**
```html
<div class="anim-bounce-in anim-slow">Slow bounce in</div>
```

---

## Stagger Effect - Perfect for Lists

Use delays to create cascading animations:

```html
<div class="anim-slide-left anim-delay-1">Item 1</div>
<div class="anim-slide-left anim-delay-2">Item 2</div>
<div class="anim-slide-left anim-delay-3">Item 3</div>
<div class="anim-slide-left anim-delay-4">Item 4</div>
```

Delays available: `.anim-delay-1` through `.anim-delay-5` (0.1s → 0.5s)

---

## Premium Use Cases 🎨

### Product Cards Entrance
```html
<div class="product-card anim-bounce-in">
  <!-- Your card content -->
</div>
```

### Floating Decorative Elements
```html
<span class="decorative-flower anim-float">🌸</span>
```

### Call-to-Action Buttons
```html
<button class="btn btn-gold anim-pulse-big">Order Now</button>
```

### Testimonial Cards
```html
<div class="review-card anim-slide-left">
  <!-- Review content -->
</div>
```

### Icon Indicators
```html
<div class="icon anim-swing">📍</div>
```

### Section Headers
```html
<h2 class="section-title anim-scale-up">Our Products</h2>
```

---

## Direct Keyframe Usage

If you want more control, use keyframes directly in CSS:

```css
.my-element {
  animation: bounceUp 1s var(--ease) forwards;
}

.my-rotating-element {
  animation: rotate360 10s linear infinite;
}

.my-glowing-button {
  animation: glow 2s ease-in-out infinite;
}
```

---

## Available Keyframes

```
@keyframes bounce
@keyframes bounceIn
@keyframes bounceUp
@keyframes swing
@keyframes swingLeft
@keyframes swingRight
@keyframes slideInLeft
@keyframes slideInRight
@keyframes slideInDown
@keyframes slideOutLeft
@keyframes slideOutRight
@keyframes rotate360
@keyframes rotateSlowly
@keyframes rotatePulse
@keyframes glow
@keyframes glowText
@keyframes shadowBounce
@keyframes wobble
@keyframes wiggle
@keyframes shake
@keyframes flip
@keyframes flipIn
@keyframes flipInX
@keyframes pulse
@keyframes pulseBig
@keyframes scaleUp
@keyframes scaleDown
@keyframes float
@keyframes floatAlt
@keyframes drift
@keyframes blurIn
@keyframes fadeInOut
@keyframes slideUpScale
@keyframes slideDownScale
@keyframes rotatePopIn
```

---

## Tips & Tricks

1. **Combine multiple animations:** Layer animations using CSS
   ```css
   animation: slideInLeft .8s ease, float 3s ease 1s infinite;
   ```

2. **Entrance + Continuous:** Use entrance on page load, then switch to continuous
   ```css
   .anim-entrance { animation: bounceUp .8s ease forwards; }
   .anim-entrance:hover { animation: bounce 1s ease infinite; }
   ```

3. **Respect user preferences:** All animations respect `prefers-reduced-motion`
   - Animations are automatically disabled for accessibility

4. **Premium timing:** Use `var(--ease)` for consistent cubic-bezier timing across site
   - Better for brand cohesion

---

## Browser Support
- All animations work on modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation on older browsers
- Mobile optimized with GPU acceleration

Enjoy! 🎉
