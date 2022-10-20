<template>
  <div class="con" :style="`--bg:${bg}`">
    <!-- 静态的样式 -->
    <div class="static">
      <div class="info">{{ info }}</div>
    </div>
    <!-- 动画样式,默认opacity=0,添加跟静态相同的clip-path,额外添加剪切移动动画,opacity=1 -->
    <div class="glitch">
      <div class="info">{{ info }}</div>
    </div>
    <div class="r25">R25</div>
  </div>
</template>
<script>
export default {
  props: {
    bg: {
      type: String,
      default: "#e74c3c",
    },
    info: {
      type: String,
      default: "Cyberpunk",
    },
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: Cyber;
  src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
  font-display: swap;
}
@mixin shape {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    calc(100% - 40px) 100%,
    calc(100% - 40px) calc(100% - 13px),
    calc(100% - 80px) calc(100% - 13px),
    calc(100% - 80px) 100%,
    30px 100%,
    0 calc(100% - 30px)
  );
}
.con {
  font-size: 1rem;
  //   --bg: #e74c3c;
  --blue: #81ecec;
  --yellow: #ffdd59;

  width: 400px;
  height: 100px;
  position: relative;

  .static {
    width: 100%;
    height: 100%;
    @include shape();
    background: var(--blue);
    position: absolute;
    &::before {
      @include shape();
      content: "";
      position: absolute;
      top: 0;
      left: -2px;
      width: 100%;
      height: 100%;
      background: var(--bg);
    }
    .info {
      cursor: pointer;
      width: 100%;
      line-height: 100px;
      text-align: center;
      position: absolute;
      font-family: Cyber;
      font-style: italic;
      font-size: 50px;
    }
  }
  .r25 {
    font-size: 9px;
    position: absolute;
    bottom: -2px;
    right: 48px;
    letter-spacing: 2px;
    font-weight: 500;
  }

  &:hover .glitch {
    animation: glitch-effect 2s infinite;
    opacity: 1;
  }

  .glitch {
    width: 100%;
    height: 100%;
    opacity: 0;
    background: var(--blue);
    @include shape();
    position: absolute;
    border: 5px solid var(--blue);
    &::before {
      @include shape();
      content: "";
      position: absolute;
      top: 0;
      left: -2px;
      width: 100%;
      height: 100%;
      background: var(--bg);
    }
    .info {
      cursor: pointer;
      width: 100%;
      line-height: 100px;
      text-align: center;
      position: absolute;
      font-family: Cyber;
      font-style: italic;
      font-size: 50px;
      text-shadow: 2px 2px var(--yellow), -2px -2px var(--blue);
    }

    --shimmy-distance: 5;
    --clip-one: polygon(
      0 2%,
      100% 2%,
      100% 95%,
      95% 95%,
      95% 90%,
      85% 90%,
      85% 95%,
      8% 95%,
      0 70%
    );
    --clip-two: polygon(
      0 78%,
      100% 78%,
      100% 100%,
      95% 100%,
      95% 90%,
      85% 90%,
      85% 100%,
      8% 100%,
      0 78%
    );
    --clip-three: polygon(
      0 44%,
      100% 44%,
      100% 54%,
      95% 54%,
      95% 54%,
      85% 54%,
      85% 54%,
      8% 54%,
      0 54%
    );
    --clip-four: polygon(
      0 0,
      100% 0,
      100% 0,
      95% 0,
      95% 0,
      85% 0,
      85% 0,
      8% 0,
      0 0
    );
    --clip-five: polygon(
      0 0,
      100% 0,
      100% 0,
      95% 0,
      95% 0,
      85% 0,
      85% 0,
      8% 0,
      0 0
    );
    --clip-six: polygon(
      0 40%,
      100% 40%,
      100% 85%,
      95% 85%,
      95% 85%,
      85% 85%,
      85% 85%,
      8% 85%,
      0 70%
    );
    --clip-seven: polygon(
      0 63%,
      100% 63%,
      100% 80%,
      95% 80%,
      95% 80%,
      85% 80%,
      85% 80%,
      8% 80%,
      0 70%
    );
  }
}

@keyframes glitch-effect {
  0% {
    clip-path: var(--clip-one);
  }
  2%,
  8% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
    clip-path: var(--clip-two);
    transform: translate(0, 0);
  }
  10% {
    clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
    clip-path: var(--clip-three);
    transform: translate(0, 0);
  }
  14%,
  21% {
    clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%,
  45% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
    clip-path: var(--clip-six);
    transform: translate(0, 0);
  }
  55% {
    clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
    clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }
  31%,
  61%,
  100% {
    clip-path: var(--clip-four);
  }
}
</style>
