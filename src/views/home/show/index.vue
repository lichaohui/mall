<template>
  <main>
	  <hr>
		<b-form inline action='/' method='get'>
			<b-form-group>
				<label class="sr-only" for="price">price</label>
				<b-form-select id="price" name="price" v-model='price' v-bind:options='optionsOfPrice' size="sm" class='mr-sm-2'></b-form-select>
			</b-form-group>
			<b-form-group>
				<label class="sr-only" for="orderby">orderby</label>
				<b-form-select id="orderby" name='orderby' v-model='orderby' v-bind:options='optionsOfOrder' size="sm" class='mr-sm-2'></b-form-select>
			</b-form-group>
			<b-form-group>
				<b-button variant="primary" size="sm" type='submit'>搜索</b-button>
			</b-form-group>	
		</b-form>
		<hr>
		<b-container fluid>
		  <b-row>
				<b-card v-for='good in goods' v-bind:title="good.name"
					v-bind:img-src="good.image"
					v-bind:img-alt="good.name"
					img-top
					tag="article"
					class="mb-2 pt-2 pl-2 pr-2 col-md-3 col-sm-6">
					<p class="card-text">{{ good.description }} <small class="text-muted">￥{{ good.price }}</small></p>
					<b-button href="#" variant="primary" size='sm'>查看</b-button>
					<b-button variant="success" size='sm' v-on:click='user ? addShopcar(good._id) : goLogin()'>加入购物车</b-button>
				</b-card><br><br>
			</b-row>
			<p class='text-center'>
				<morer ref='morer' v-bind:more='more' v-on:load-more='loadMore'></morer>
			</p>
		</b-container>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>