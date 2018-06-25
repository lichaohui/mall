<template>
  <main>
    <hr>
		<alerter ref='alerter' v-bind:variant='variant' v-bind:message='message'></alerter>
		
		<b-form>
			<b-form-group class='form-inline'>
			  <b-form-input name="vcode" type="text" v-model="form.vcode" required placeholder='邮箱验证码' v-bind:state="!$v.form.vcode.$invalid" aria-describedby="captchaFeedback"></b-form-input>
				<b-button size='sm' type='button' variant="primary" v-bind:disabled='isSendDisabled' v-on:click="sendCode">{{ sendBtnWord }}</b-button>
				<b-form-invalid-feedback tag='span' id="captchaFeedback">This is a required field</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group>
			  <b-form-input type="text" v-model="form.name" required placeholder="昵称" v-bind:state="!$v.form.name.$invalid" aria-describedby="nameFeedback"></b-form-input>
				<b-form-invalid-feedback id="nameFeedback">This is a required field.</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group>
				<b-form-input name="password" type="password" v-model="form.password" required placeholder="密码" v-bind:state="!$v.form.password.$invalid" aria-describedby="passwordFeedback"></b-form-input>
				<b-form-invalid-feedback id="passwordFeedback">This is a required field and must  have at least {{ $v.form.password.$params.minLength.min }} letters.</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group>
				<b-form-input name="password_confirm" type="password" v-model="form.password_confirm" required placeholder="确认密码" v-bind:state="!$v.form.password_confirm.$invalid" aria-describedby="passwordConfirmFeedback"></b-form-input>
				<b-form-invalid-feedback id="passwordConfirmFeedback">this is a required field and must be same as password.</b-form-invalid-feedback>
			</b-form-group>
			<b-button type="button" v-show='isSubShow' v-bind:disabled="$v.form.$invalid" variant="primary" size='sm' v-on:click='onSubmit'>注册</b-button>
		</b-form>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>