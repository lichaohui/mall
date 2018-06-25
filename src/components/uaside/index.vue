<template>
  <b-nav vertical>
		<b-nav-item active>个人信息</b-nav-item>
		<b-nav-item href="/user/shopcar">购物车</b-nav-item>
		<b-nav-item-dropdown text="收货地址" extra-toggle-classes="nav-link-custom">
			<b-dropdown-item href="/user/address">地址列表</b-dropdown-item>
			<b-dropdown-item href="/user/address/create">添加地址</b-dropdown-item>
		</b-nav-item-dropdown>
    <b-nav-item href="/user/order">我的订单</b-nav-item>
	</b-nav>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>