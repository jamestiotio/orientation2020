<template>
  <section id="clan">
    <SectionHeader class="clan-name">SAGITTA</SectionHeader>
    <div class="clan-content">
      <div class="clan-content-main">
        <Para
          >A clan who specialises in trade and is filled with goods from all
          over the universe.</Para
        >
      </div>
      <div class="clan-content-aside">
        <div class="aside-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330.17 194.14"
          >
            <defs>
              <radialGradient
                id="radial-gradient"
                cx="603.46"
                cy="-915.39"
                r="5.51"
                gradientTransform="translate(-394.32 1028.23) rotate(-11.84)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f6f1eb" />
                <stop offset="0" stop-color="#fff" />
                <stop offset="0.1" stop-color="#fff" stop-opacity="0.98" />
                <stop offset="0.22" stop-color="#fff" stop-opacity="0.92" />
                <stop offset="0.36" stop-color="#fff" stop-opacity="0.82" />
                <stop offset="0.51" stop-color="#fff" stop-opacity="0.68" />
                <stop offset="0.66" stop-color="#fff" stop-opacity="0.5" />
                <stop offset="0.82" stop-color="#fff" stop-opacity="0.28" />
                <stop offset="0.99" stop-color="#fff" stop-opacity="0.02" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="radial-gradient-2"
                cx="603.46"
                cy="-915.39"
                r="8.51"
                gradientTransform="translate(-394.32 1028.23) rotate(-11.84)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f6f1eb" />
                <stop offset="0" stop-color="#d1d1d1" />
                <stop offset="0.01" stop-color="#d2d2d2" stop-opacity="0.98" />
                <stop offset="0.15" stop-color="#dedede" stop-opacity="0.72" />
                <stop offset="0.3" stop-color="#e8e8e8" stop-opacity="0.5" />
                <stop offset="0.45" stop-color="#f0f0f0" stop-opacity="0.32" />
                <stop offset="0.59" stop-color="#f7f7f7" stop-opacity="0.18" />
                <stop offset="0.73" stop-color="#fbfbfb" stop-opacity="0.08" />
                <stop offset="0.87" stop-color="#fefefe" stop-opacity="0.02" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="radial-gradient-3"
                cx="674.11"
                cy="-855.44"
                r="5.51"
                xlink:href="#radial-gradient"
              />
              <radialGradient
                id="radial-gradient-4"
                cx="674.11"
                cy="-855.44"
                r="8.51"
                xlink:href="#radial-gradient-2"
              />
              <radialGradient
                id="radial-gradient-5"
                cx="785.43"
                cy="-778.37"
                r="5.51"
                xlink:href="#radial-gradient"
              />
              <radialGradient
                id="radial-gradient-6"
                cx="785.43"
                cy="-778.37"
                r="8.51"
                xlink:href="#radial-gradient-2"
              />
              <radialGradient
                id="radial-gradient-7"
                cx="883.91"
                cy="-726.99"
                r="5.51"
                xlink:href="#radial-gradient"
              />
              <radialGradient
                id="radial-gradient-8"
                cx="883.91"
                cy="-726.99"
                r="8.51"
                xlink:href="#radial-gradient-2"
              />
              <radialGradient
                id="radial-gradient-9"
                cx="843.24"
                cy="-684.17"
                r="5.51"
                xlink:href="#radial-gradient"
              />
              <radialGradient
                id="radial-gradient-10"
                cx="843.24"
                cy="-684.17"
                r="8.51"
                xlink:href="#radial-gradient-2"
              />
            </defs>
            <g>
              <circle class="cls-1" cx="8.52" cy="8.52" r="5.51" />
              <circle class="cls-2" cx="8.52" cy="8.52" r="8.51" />
              <circle class="cls-3" cx="89.96" cy="52.69" r="5.51" />
              <circle class="cls-4" cx="89.96" cy="52.69" r="8.51" />
              <circle class="cls-5" cx="214.73" cy="105.28" r="5.51" />
              <circle class="cls-6" cx="214.73" cy="105.28" r="8.51" />
              <circle class="cls-7" cx="321.65" cy="135.37" r="5.51" />
              <circle class="cls-8" cx="321.65" cy="135.37" r="8.51" />
              <circle class="cls-9" cx="290.62" cy="185.62" r="5.51" />
              <circle class="cls-10" cx="290.62" cy="185.62" r="8.51" />
              <polyline
                class="cls-11"
                points="321.75 136.41 214.83 106.33 90.06 53.73 8.62 9.55"
              />
              <line
                class="cls-11"
                x1="290.73"
                y1="186.66"
                x2="214.83"
                y2="106.33"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Para from "@/components/Para.vue";
import SectionHeader from "@/components/SectionHeader.vue";

export default {
  name: "clan",
  components: {
    SectionHeader,
    Para
  }
};
</script>

<style scoped>
.clan-content {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-top: 30px;
}
.clan-content-main {
  width: 80%;
  margin-left: 6vw;
}
.clan-content-aside {
  display: block;
  position: relative;
  z-index: 1;
  width: 32%;
  margin-right: 5vw;
}
.clan-name {
  font-family: var(--font-tertiary), sans-serif;
  color: #aa98ea;
  text-align: left;
  margin-left: 8vw;
  margin-top: 5vh;
}
p + p {
  margin-top: 40px;
}
.aside-block + .aside-block {
  margin-top: 20px;
}

@media (--mobile-wide) {
  .clan-content {
    flex-direction: column;
  }
  .clan-content-main {
    width: 100%;
    margin-bottom: 30px;
  }
  .clan-content-aside {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .aside-block + .aside-block {
    margin-top: 0px;
  }
  .aside-block {
    text-align: center;
  }

  @media (--mobile-narrow) {
    .clan-content-aside {
      display: none;
    }
  }
}
.cls-1 {
  fill: url(#radial-gradient);
}
.cls-2 {
  fill: url(#radial-gradient-2);
}
.cls-3 {
  fill: url(#radial-gradient-3);
}
.cls-4 {
  fill: url(#radial-gradient-4);
}
.cls-5 {
  fill: url(#radial-gradient-5);
}
.cls-6 {
  fill: url(#radial-gradient-6);
}
.cls-7 {
  fill: url(#radial-gradient-7);
}
.cls-8 {
  fill: url(#radial-gradient-8);
}
.cls-9 {
  fill: url(#radial-gradient-9);
}
.cls-10 {
  fill: url(#radial-gradient-10);
}
.cls-11 {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 0.1px;
}
</style>
