<template>
  <main>
	  <hr>
		<alerter ref='alerter' v-bind:variant='variant' v-bind:message='message'></alerter>
		<b-container fluid>
		  <b-row>
			  <uaside></uaside>
				<b-col>
				  <b-form>
						<b-form-group>
							<b-form-input id="receiver" name='receiver' type="text" required placeholder="收货人" size="sm" v-model='form.receiver' v-bind:state="!$v.form.receiver.$invalid" aria-describedby="receiverFeedback">
							</b-form-input>
							<b-form-invalid-feedback id="receiverFeedback" tag='span'>This is a required field!</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group>
							<b-form-input id="phone" name='phone' type="text" required placeholder="手机号" size="sm" v-model='form.phone' v-bind:state="!$v.form.phone.$invalid" aria-describedby="phoneFeedback">
							</b-form-input>
							<b-form-invalid-feedback id="phoneFeedback" tag='span'>This is a required field and must be a phone!</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group>
						  <area-select type='text' id='area' v-bind:level='2' v-model="form.area" v-bind:state="!$v.form.area.$invalid" aria-describedby="areaFeedback"></area-select>
							<b-form-invalid-feedback id="areaFeedback" tag='span'>This is a required field!</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group>
							<b-form-input id="address" name='address' type="text" v-model='form.address' required placeholder="详细地址" size="sm" v-bind:state="!$v.form.address.$invalid" aria-describedby="addressFeedback">
							</b-form-input>
							<b-form-invalid-feedback id="addressFeedback" tag='span'>This is a required field!</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group label="是否默认">
							<b-form-radio-group id="isDefault" v-model="form.isDefault" name="isDefault">
								<b-form-radio value="true">是</b-form-radio>
								<b-form-radio value="false">否</b-form-radio>
							</b-form-radio-group>
						</b-form-group>
						<b-button type="button" v-bind:disabled="$v.form.$invalid" variant="primary" size='sm' v-on:click='onSubmit'>保存</b-button>
					</b-form>
				</b-col>
			</b-row>
		</b-container>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>