<template>
	<b-button size="sm" v-bind:variant="more.variant" v-bind:disabled="more.disabled" v-on:click='loadMore'>{{ more.word }}</b-button>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>