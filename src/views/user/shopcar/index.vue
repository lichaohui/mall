<template>
  <main>
	  <hr>
		<b-container fluid>
		  <b-row>
			  <uaside></uaside>
				<b-col v-show='!isNext'>
				  <table class='table b-table table-responsive'>
					  <tr>
						  <th>
                <b-form-checkbox v-model='isSelectedAll' v-on:change='switchAll'>
								  {{ isSelectedAll ? '全不选' : '全选'}}
								</b-form-checkbox>
							</th>
						  <th>商品名称</th>
						  <th>单价</th>
						  <th>数量</th>
						  <th>总价</th>
						  <th>操作</th>
						</tr>
						<tr v-for='shopcar in shopcars'>
						  <td>
                <b-form-checkbox v-model="shopcar.isSelected" v-on:input='edit(shopcar)'></b-form-checkbox>
							</td>
						  <td>{{ shopcar.gid.name }}</td>
							<td>{{ shopcar.gid.price }}</td>
							<td>
							  <b-form-input type="number" step="1" min="1" v-bind:value="shopcar.count" size="sm" v-model='shopcar.count' v-on:change='edit(shopcar)'></b-form-input>
							</td>
							<td>{{ shopcar.gid.price*shopcar.count }}</td>
							<td>
							  <b-button size="sm" variant="danger" v-on:click='del(shopcar._id)'>删除</b-button>
							</td>
						</tr>
						<tr>
						  <td colspan='4'></td>
							<td>总金额：{{ totalPrice }}</td>
							<td>
							   <b-button v-on:click='isNext = true' variant="primary" size='sm' v-bind:disabled='getSelected.length == 0'>下一步</b-button>
							</td>
						</tr>
					</table>
					<p class='text-center'>
						<morer ref='morer' v-bind:more='more' v-on:load-more='loadMore'></morer>
					</p>
				</b-col>
				<b-col v-show='isNext'>
				  <table class='table b-table table-responsive'>
					  <tr>
						  <th></th>
						  <th>收货人</th>
						  <th>所在地区</th>
						  <th>详细地址</th>
						  <th>手机号</th>
						</tr>
						<tr v-for='address in addresses'>
							<td>
							  <b-form-radio-group v-model="selectedAddress" name="selectedAddress">
									<b-form-radio v-bind:value="address._id"></b-form-radio>
								</b-form-radio-group>
							</td>
							<td>{{ address.receiver }}</td>
							<td>{{ address.area }}</td>
							<td>{{ address.address }}</td>
							<td>{{ address.phone }}</td>
						</tr>
						<tr>
						  <td colspan='4'></td>
							<td>
							   <b-button v-on:click='isNext = false' variant="default" size='sm'>上一步</b-button>
								 <b-button variant="primary" size='sm' v-bind:disabled='selectedAddress == ""' v-on:click='createOrder'>下订单</b-button>
							</td>
						</tr>
					</table>
				</b-col>
			</b-row>
		</b-container>
	</main>
</template>

<style lang='stylus' scope>
  @import './index.styl'
</style>

<script src='./index.js'></script>