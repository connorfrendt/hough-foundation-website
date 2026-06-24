<template>
    <div class="gallery-slider-wrapper">

        <!-- Dev controls panel — remove this in production, it's just for comparing modes -->
        <div class="controls-panel">
            <div class="group">
                <strong>Transition:</strong>
                <label><input type="radio" value="slide" v-model="transitionMode"> Slide</label>
                <label><input type="radio" value="fade" v-model="transitionMode"> Fade</label>
            </div>
            <div class="divider"></div>
            <div class="group">
                <label><input type="checkbox" v-model="autoplayEnabled"> Autoplay</label>
            </div>
        </div>

        <!-- THE ACTUAL SLIDER -->
        <div class="gallery-slider" :class="{ 'fade-mode': transitionMode === 'fade', dragging: isDragging }"
            @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp"
            @pointerleave="onPointerLeave" @mouseenter="stopAutoplay" @mouseleave="resetAutoplayTimer">
            <div class="slider-track" :class="{ transition: !isDragging }" :style="trackStyle">
                <div v-for="(image, i) in images" :key="image.src" class="slide" :class="{ active: i === currentIndex }">
                    <img :src="image.src" :alt="image.alt" draggable="false" />
                </div>
            </div>

            <button class="slider-arrow prev" aria-label="Previous slide" @click="prev"><span class="arrow-glyph">&#8249;</span></button>
            <button class="slider-arrow next" aria-label="Next slide" @click="next"><span class="arrow-glyph">&#8250;</span></button>

            <div class="slider-dashes">
                <button v-for="(image, i) in images" :key="'dash-' + image.src" class="dash"
                    :class="{ active: i === currentIndex }" :aria-label="'Go to slide ' + (i + 1)"
                    @click="goTo(i)"></button>
            </div>

            <div class="slide-expand-hint">Click image to expand</div>
        </div>

        <!-- LIGHTBOX -->
        <Teleport to="body">
            <div v-if="lightboxOpen" class="lightbox-overlay open" @click.self="closeLightbox">
                <button class="lightbox-close" aria-label="Close lightbox" @click="closeLightbox">&times;</button>
                <img :src="images[currentIndex].src" :alt="images[currentIndex].alt" />
            </div>
        </Teleport>

    </div>
</template>

<script setup>
/* ============================================================
   GALLERY SLIDER — Vue 3 Composition API version
   ------------------------------------------------------------
   Same state machine as the vanilla version:
   goTo(index) is still the ONLY function that changes
   currentIndex. The difference is we no longer manually
   touch the DOM after — Vue's reactivity does that for us.
   ============================================================ */
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// ----------------------------------------------------------
// 1. CONFIG — swap these for your own images, or pass as props
// ----------------------------------------------------------
const images = ref([
    { src: "https://picsum.photos/id/1015/1600/900", alt: "Mountain river valley" },
    { src: "https://picsum.photos/id/1018/1600/900", alt: "Forest lake at dawn" },
    { src: "https://picsum.photos/id/1025/1600/900", alt: "Dog portrait" },
    { src: "https://picsum.photos/id/1039/1600/900", alt: "Alpine lake" },
    { src: "https://picsum.photos/id/1043/1600/900", alt: "Desert road" },
]);

const AUTOPLAY_INTERVAL_MS = 4000;
const slideCount = images.value.length;

// ----------------------------------------------------------
// 2. STATE — reactive refs instead of plain `let` variables.
//    This is the entire "render()" function from the vanilla
//    version — it doesn't exist here because the template
//    just reads these refs directly.
// ----------------------------------------------------------
const currentIndex = ref(0);
const transitionMode = ref("slide"); // "slide" | "fade"
const autoplayEnabled = ref(true);
const lightboxOpen = ref(false);

const isDragging = ref(false);
const dragStartX = ref(0);
const dragCurrentX = ref(0);
const dragBaseOffsetPercent = ref(0); // track position (%) before this drag started

let autoplayTimer = null;

// ----------------------------------------------------------
// 3. THE CORE FUNCTION — everything routes through here.
//    Identical logic to the vanilla version. The only thing
//    that's gone is the explicit render() call at the end —
//    Vue handles that the instant currentIndex.value changes.
// ----------------------------------------------------------
function goTo(index) {
    currentIndex.value = ((index % slideCount) + slideCount) % slideCount;
    resetAutoplayTimer();
}

function next() {
    console.log('Current Index: ', currentIndex.value);
    goTo(currentIndex.value + 1);
}

function prev() {
    goTo(currentIndex.value - 1);
}

// ----------------------------------------------------------
// 4. COMPUTED TRANSFORM — this replaces the manual
//    `trackEl.style.transform = ...` line from the vanilla
//    version. It's just a derived value: "given currentIndex
//    and any in-progress drag, what should the transform be?"
// ----------------------------------------------------------
const trackStyle = computed(() => {
    if (transitionMode.value === "fade") {
        return {}; // fade mode doesn't move the track at all
    }

    let offsetPercent = -currentIndex.value * 100;

    if (isDragging.value) {
        // dragDeltaPercent is kept live by onPointerMove as the user drags
        offsetPercent = dragBaseOffsetPercent.value + dragDeltaPercent.value;
    }

    return { transform: `translateX(${offsetPercent}%)` };
});

// Tracks the live drag delta as a percentage of slider width
const dragDeltaPercent = ref(0);

// ----------------------------------------------------------
// 5. TRANSITION MODE — watch instead of an imperative setter.
//    When the mode flips back to "slide", make sure the track
//    snaps to the correct position (mirrors setTransitionMode
//    from the vanilla version).
// ----------------------------------------------------------
watch(transitionMode, () => {
    // No DOM manipulation needed — trackStyle computed already
    // reacts to transitionMode automatically.
});

// ----------------------------------------------------------
// 6. AUTOPLAY
// ----------------------------------------------------------
function startAutoplay() {
    stopAutoplay();
    if (!autoplayEnabled.value) return;
    autoplayTimer = setInterval(next, AUTOPLAY_INTERVAL_MS);
}

function stopAutoplay() {
    if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
    }
}

function resetAutoplayTimer() {
    if (lightboxOpen.value) return; // don't let a stray mouseleave revive it while open
    startAutoplay();
}

// React to the autoplay checkbox toggling
watch(autoplayEnabled, (enabled) => {
    if (enabled) startAutoplay();
    else stopAutoplay();
});

// ----------------------------------------------------------
// 7. DRAG / SWIPE — same threshold logic as vanilla, just
//    using refs instead of plain variables and event.target
//    measurements instead of a cached DOM reference.
// ----------------------------------------------------------
function onPointerDown(e) {
    if (transitionMode.value !== "slide") return;
    if (e.target.closest("button")) return; // let arrow/dot clicks behave normally
    isDragging.value = true;
    dragStartX.value = e.clientX;
    dragCurrentX.value = e.clientX;
    dragBaseOffsetPercent.value = -currentIndex.value * 100;
    dragDeltaPercent.value = 0;
    stopAutoplay();
    e.currentTarget.setPointerCapture(e.pointerId);
}

function onPointerMove(e) {
    if (!isDragging.value) return;
    dragCurrentX.value = e.clientX;
    const deltaPx = dragCurrentX.value - dragStartX.value;
    dragDeltaPercent.value = (deltaPx / e.currentTarget.clientWidth) * 100;
}

function onPointerUp(e) {
    if (!isDragging.value) return;
    isDragging.value = false;

    const deltaPx = dragCurrentX.value - dragStartX.value;
    const threshold = e.currentTarget.clientWidth * 0.15;

    if (deltaPx > threshold) {
        prev();
    } else if (deltaPx < -threshold) {
        next();
    } else {
        // Not far enough to count as a swipe — treat it as a tap on the
        // current slide instead. Pointer capture (set in onPointerDown)
        // redirects the native click target to .gallery-slider, so a
        // plain @click on the slide never fires; this is the replacement.
        onSlideClick(currentIndex.value);
    }
}

function onPointerLeave(e) {
    if (isDragging.value) onPointerUp(e);
}

// ----------------------------------------------------------
// 8. SLIDE CLICK — open lightbox, but only if it wasn't a drag
// ----------------------------------------------------------
function onSlideClick(index) {
    const dragDistance = Math.abs(dragCurrentX.value - dragStartX.value);
    if (dragDistance > 5) {
        resetAutoplayTimer(); // was a drag, not a click
        return;
    }
    openLightbox(index);
}

function openLightbox(index) {
    currentIndex.value = index;
    lightboxOpen.value = true;
    stopAutoplay();
}

function closeLightbox() {
    lightboxOpen.value = false;
    resetAutoplayTimer();
}

// ----------------------------------------------------------
// 9. KEYBOARD SHORTCUTS + LIFECYCLE
//    onMounted/onUnmounted are Vue's version of "attach
//    listeners when this exists, detach when it's destroyed."
//    This is the part vanilla JS never had to think about —
//    Vue components mount and unmount, so cleanup matters.
// ----------------------------------------------------------
function onKeydown(e) {
    if (lightboxOpen.value) {
        if (e.key === "Escape") closeLightbox();
        return;
    }
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
}

onMounted(() => {
    document.addEventListener("keydown", onKeydown);
    startAutoplay();
});

onUnmounted(() => {
    document.removeEventListener("keydown", onKeydown);
    stopAutoplay();
});
</script>

<style scoped>
.gallery-slider-wrapper {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}

.controls-panel {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px 20px;
    margin-bottom: 24px;
    display: flex;
    gap: 24px;
    align-items: center;
    font-size: 14px;
    flex-wrap: wrap;
}

.controls-panel label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
}

.controls-panel .group {
    display: flex;
    gap: 12px;
    align-items: center;
}

.controls-panel .divider {
    width: 1px;
    height: 20px;
    background: #ddd;
}

.gallery-slider {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 4px;
    background: #0a0a0a;
    touch-action: pan-y;
    cursor: grab;
}

.gallery-slider.dragging {
    cursor: grabbing;
}

.slider-track {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    will-change: transform;
}

.slider-track.transition {
    transition: transform 600ms cubic-bezier(0.65, 0, 0.35, 1);
}

.slide {
    position: relative;
    flex: 0 0 100%;
    height: 100%;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    user-select: none;
    -webkit-user-drag: none;
}

.gallery-slider.fade-mode .slider-track {
    transition: none;
    transform: none !important;
}

.gallery-slider.fade-mode .slide {
    position: absolute;
    top: 0;
    left: 0;
    flex: 0 0 100%;
    opacity: 0;
    transition: opacity 500ms ease;
    pointer-events: none;
}

.gallery-slider.fade-mode .slide.active {
    opacity: 1;
    pointer-events: auto;
}

.slider-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 150ms ease, transform 150ms ease;
}

.arrow-glyph {
    display: block;
    font-size: 50px;
    transform: translate(1px, -6px);
    line-height: 1;
}

.slider-arrow:hover {
    background: rgba(0, 0, 0, 0.6);
}

.slider-arrow:active {
    transform: translateY(-50%) scale(0.92);
}

.slider-arrow.prev {
    left: 16px;
}

.slider-arrow.next {
    right: 16px;
}

.slider-dashes {
    position: absolute;
    bottom: 18px;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 8px;
}

.dash {
    width: 28px;
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.35);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 200ms ease, transform 150ms ease;
}

.dash:hover {
    background: rgba(255, 255, 255, 0.6);
}

.dash.active {
    background: #ffffff;
}

.slide-expand-hint {
    position: absolute;
    bottom: 18px;
    right: 16px;
    z-index: 10;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    background: rgba(0, 0, 0, 0.35);
    padding: 6px 10px;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 200ms ease;
}

.gallery-slider:hover .slide-expand-hint {
    opacity: 1;
}
</style>

<style>
/* Lightbox uses Teleport to <body>, so it must be unscoped CSS
   (scoped styles attach a data attribute that won't reach
   teleported content's ancestor — this block is global by design) */
.lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-overlay img {
    max-width: 90vw;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 2px;
}

.lightbox-close {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-close:hover {
    background: rgba(255, 255, 255, 0.2);
}
</style>