<template>
	<div class="s-swiper">
		<Swipe class="s-swipe">
			<SwipeItem class="slide"><img src="../../assets/sw.png" alt=""></SwipeItem>
			<SwipeItem class="slide"><img src="../../assets/sw2.png" alt=""></SwipeItem>
			<SwipeItem class="slide"><img src="../../assets/sw3.png" alt=""></SwipeItem>
			<SwipeItem class="slide"><img src="../../assets/sw4.png" alt=""></SwipeItem>
		</Swipe>
	</div>
</template>
<script>
	import {Swipe,SwipeItem} from 'vue-swipe'
	import 'vue-swipe/dist/vue-swipe.css'
	export default{
		data(){
			return {}
		},
		components:{
			Swipe,
			SwipeItem
		}
	}
</script>
<style scoped>
  .s-swiper{
    height: 6rem;
    width: 100%;
	margin-top: -10px;
  }
  .slide{
    background: green;
  }
  .slide img{
      width: 100%;
      height: 100%;
    }
</style>