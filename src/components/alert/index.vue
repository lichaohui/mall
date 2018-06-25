<template>
	<b-alert v-bind:show="dismissCountDown" dismissible v-bind:variant="variant" v-on:dismissed="dismissCountDown=0" v-on:dismiss-count-down="countDownChanged">
    <p>{{ message }}</p>
    <b-progress v-bind:variant="variant" v-bind:max="dismissSecs" v-bind:value="dismissCountDown" height="4px">
    </b-progress>
  </b-alert>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>