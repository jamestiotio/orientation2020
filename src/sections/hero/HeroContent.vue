<template>
  <div class="hero-content">
    <h2>SUTD Freshmen Orientation 2020</h2>
    <h1>ASTERIA</h1>
    <Countdown date="2020-09-10T08:00:00.000+08:00" />
    <div class="hero-content-secondary">
      <div>
        <h2>10th - 12th September 2020</h2>
        <h2>Singapore University of Technology and Design</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";
export default {
  name: "hero-content",
  components: {
    Countdown
  }
};
</script>

<style scoped>
.hero-content {
  position: relative;
  z-index: 1;
  height: 87.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
}

.hero-content > svg {
  width: 54.5vw;
  width: calc(400px + 28vw);
  margin-left: 12vw;
  margin-bottom: 20px;
}

.hero-content h1 {
  font-family: var(--font-secondary), sans-serif;
  font-size: calc(4vw + 14px);
  font-weight: 900;
  color: var(--color-title-text);
  margin-bottom: 8px;
  transition: color 0.6s ease-out;
}

.hero-content-secondary {
  display: flex;
  text-align: center;
}

.hero-content h2 {
  font-family: var(--font-primary), sans-serif;
  font-size: calc(1vw + 10px);
  font-weight: 400;
  color: var(--color-title-text);
  transition: color 0.6s ease-out;
}

@media (--desktop-narrow) {
  .hero-content-secondary {
    display: flex;
    flex-direction: column;
  }
}

@media (--mobile-wide) {
  .hero-content > * {
    transform: translateY(-10vh);
  }

  .hero-content > svg {
    width: 80vw;
  }
}

@media (--mobile-narrow) {
  .hero-content > h1 {
    margin-top: 30px;
    font-size: calc(3vw + 24px);
    margin-left: 0;
    text-align: center;
    padding: 0 30px;
    line-height: 1;
  }

  .hero-content-secondary {
    margin-top: 30px;
    margin-left: 0;
    text-align: center;
    padding: 0 30px;
  }

  .hero-content h2 {
    font-size: 16px;
  }
}
</style>
