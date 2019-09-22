<template>
  <div>
    <van-swipe :autoplay="1500" class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" @click="Preview_img(images, index)" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  name: "SwipeGoods",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-5.jpg"
      ]
    };
  },
  components: {},
  methods: {
    Preview_img(images, index) {
      console.log(111);
      ImagePreview({
        images: images, //图片数组
        showIndex: true,
        loop: false,
        startPosition: index
      });
    }
  }
};
</script>

<style scoped>
.swiper img {
  width: 95vw;
}
</style>
