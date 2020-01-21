<template id="countdown">
  <div class="countdown-content">
    <div class="block">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">Days</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">Hours</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">Minutes</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "countdown",
  props: {
    date: {
      type: Number,
      coerce: str => Math.trunc(Date.parse(str) / 1000)
    }
  },
  filters: {
    two_digits: value => {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value.toString();
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },
  ready() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }
};
</script>

<style scoped>
.countdown-content {
  display: flex;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.text {
  color: var(--color-accent);
  font-size: 25px;
  font-family: var(--font-primary), sans-serif;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
  color: #ffff33;
  font-size: 100px;
  font-weight: 100;
  font-family: var(--font-secondary), sans-serif;
  margin: 10px;
  text-align: center;
}

@media (--desktop-narrow) {
  .block {
    margin: 10px;
  }
  .digit {
    font-size: 70px;
    font-weight: 70;
  }
}

@media (--mobile-narrow) {
  .block {
    margin: 5px;
  }
  .digit {
    font-size: 30px;
    font-weight: 30;
  }
  .text {
    font-size: 14px;
    font-weight: 20;
  }
}
</style>
