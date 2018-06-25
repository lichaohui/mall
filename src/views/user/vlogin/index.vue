<template>
  <main>
    <hr>
		<alerter ref='alerter' v-bind:variant='variant' v-bind:message='message'></alerter>
		
		<b-form>
			<b-form-group>
				<b-form-input name="email" type="email" v-model="form.email" required placeholder='邮箱' v-bind:state="!$v.form.email.$invalid" aria-describedby="emailFeedback"></b-form-input>
				<b-form-invalid-feedback id="emailFeedback" tag='span'>This is a required field and must be a email address</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group class='form-inline'>
			  <b-form-input name="captcha" type="text" v-model="form.captcha" required placeholder='验证码' v-bind:state="!$v.form.captcha.$invalid" aria-describedby="captchaFeedback"></b-form-input>
				<img src='/api/captcha' alt='验证码' onclick="this.src=this.src+'?t='+Math.random()">
				<b-form-invalid-feedback tag='span' id="captchaFeedback">This is a required field</b-form-invalid-feedback>
			</b-form-group>
			<b-button type="button" v-show='isSubShow' v-bind:disabled="$v.form.$invalid" variant="primary" size='sm' v-on:click='onSubmit'>下一步</b-button>
		</b-form>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>