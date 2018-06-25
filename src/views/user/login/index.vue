<template>
  <main>
    <hr>
		<alerter ref='alerter' v-bind:variant='variant' v-bind:message='message'></alerter>
		
		<b-form>
			<b-form-group>
				<b-form-input name="email" type="email" v-model="form.email" required placeholder='邮箱' v-bind:state="!$v.form.email.$invalid" aria-describedby="emailFeedback"></b-form-input>
				<b-form-invalid-feedback id="emailFeedback" tag='span'>This is a required field and must be a email address</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group>
				<b-form-input name="password" type="password" v-model="form.password" required placeholder="密码" v-bind:state="!$v.form.password.$invalid" aria-describedby="passwordFeedback"></b-form-input>
				<b-form-invalid-feedback id="passwordFeedback">This is a required field.</b-form-invalid-feedback>
			</b-form-group>
			<b-button type="button" v-show='isSubShow' v-bind:disabled="$v.form.$invalid" variant="primary" size='sm' v-on:click='onSubmit'>登录</b-button>
			<b-link href="/vlogin" class='ml-2'>忘记密码？</b-link>
		</b-form>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>