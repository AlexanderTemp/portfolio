<template>
  <svg
    class="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 500"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="2" style="fill: currentColor" opacity="0.15" />
      </pattern>

      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" style="stop-color: white; stop-opacity: 0.8" />
        <stop offset="70%" style="stop-color: white; stop-opacity: 0.6" />
        <stop offset="100%" style="stop-color: white; stop-opacity: 0.1" />
      </linearGradient>

      <mask id="fadeMask">
        <rect width="100%" height="100%" fill="url(#fade)" />
      </mask>
    </defs>

    <rect width="100%" height="100%" fill="url(#dots)" mask="url(#fadeMask)" />
  </svg>
</template>
