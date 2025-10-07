<template>
  <div class="bg-animated">
    <div class="bg-animated__gradient"></div>
    <div class="bg-animated__scan"></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundAnimated'
}
</script>

<style scoped>
.bg-animated {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #000;
  overflow: hidden;
}

.bg-animated__gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      ellipse 80% 50% at 50% -20%,
      rgba(120, 119, 198, 0.3),
      transparent
    ),
    radial-gradient(
      ellipse 60% 80% at 10% 60%,
      rgba(74, 144, 226, 0.2),
      transparent
    ),
    radial-gradient(
      ellipse 60% 70% at 90% 70%,
      rgba(139, 92, 246, 0.2),
      transparent
    );
}

.bg-animated__scan {
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(120, 119, 198, 0.03) 2px,
    rgba(120, 119, 198, 0.03) 4px
  );
  animation: scan 8s linear infinite;
}

@keyframes scan {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .bg-animated__gradient {
    background: radial-gradient(
        ellipse 90% 60% at 50% -10%,
        rgba(120, 119, 198, 0.25),
        transparent
      ),
      radial-gradient(
        ellipse 70% 90% at 20% 70%,
        rgba(74, 144, 226, 0.15),
        transparent
      ),
      radial-gradient(
        ellipse 70% 80% at 80% 80%,
        rgba(139, 92, 246, 0.15),
        transparent
      );
  }
}
</style>