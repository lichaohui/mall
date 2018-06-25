<template>
  <header>
		<b-navbar toggleable="sm" type="light" variant="light">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand href="#">萌萌猫</b-navbar-brand>
			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav>
					<b-nav-item href="/" class='active'>首页</b-nav-item>
				</b-navbar-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item href="/register" v-if='!user'>注册</b-nav-item>
					<b-nav-item href="/login" v-if='!user'>登录</b-nav-item>
					<b-nav-item-dropdown right v-if='user'>
						<!-- Using button-content slot -->
						<template slot="button-content">
							<em>{{ user.name }}</em>
						</template>
						<b-dropdown-item href="/user">个人中心</b-dropdown-item>
						<b-dropdown-item href="javascript:" v-on:click='logout'>退出</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<alerter ref='alerter' v-bind:variant='variant' v-bind:message='message'></alerter>
	</header>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>