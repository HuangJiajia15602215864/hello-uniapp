<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见</text>
		<uni-link :href="href" :text="href"></uni-link>
		
		<view class="fs-32">{{location.latitude}}</view>
		<view class="fs-16">{{location.longitude}}</view>
	</view>
</template>

<script>
	import moment from 'moment'
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				location: {}
			}
		},
		onLoad() {
			console.log(moment().format('YYYY-MM-DD'))
			this.getLocation()
		},
		methods: {
			getLocation() {
				uni.getLocation({
					// 默认为 wgs84 返回 gps 坐标，
					// gcj02 返回国测局坐标，可用于 uni.openLocation 的坐标
					type: 'wgs84',
					geocode: true,
					success: (data) => {
						console.log(data)
						if (data.address) {
							this.location = data;
						}
						this.location = data;
					},
					fail: (err) => {
						console.log(err)
						// this.$api.msg('获取定位失败');
					}
				})

			}
		},
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
