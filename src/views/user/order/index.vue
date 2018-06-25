<template>
  <main>
	  <hr>
		<b-container fluid>
		  <b-row>
			  <uaside></uaside>
				<b-col>
				  <table class='table b-table table-responsive'>
					  <tr>
						  <th>订单编号</th>
						  <th>商品信息</th>
							<th>订单合计</th>
							<th>下单时间</th>
							<th>操作</th>
						</tr>
						<tr v-for='order in orders'>
						  <td>{{ order.numbering }}</td>
						  <td>
								<p v-for='good in order.goods'>名称：{{ good.name }} / 单价：{{ good.price }} / 数量：{{ good.count }} / 总价:{{ good.count*good.price }}</p>
							</td>
							<td>{{ order.total }}</td>
							<td>{{ order.created_at }}</td>
							<td>
							  <b-button size="sm" variant="primary">支付</b-button>
							</td>
						</tr>
					</table>
					<p class='text-center'>
						<morer ref='morer' v-bind:more='more' v-on:load-more='loadMore'></morer>
					</p>
				</b-col>
			</b-row>
		</b-container>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>