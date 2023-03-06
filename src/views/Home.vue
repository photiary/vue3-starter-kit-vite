<script setup>
import { formatSimpleDate, formatSimpleNumber } from '@/plugins/formatters'
</script>

<template>
  <h1>Home</h1>
  <p>날짜: {{ formatSimpleDate(new Date()) }}</p>
  <p>숫자: {{ formatSimpleNumber(3213314) }}</p>
</template>

<style scoped></style>
