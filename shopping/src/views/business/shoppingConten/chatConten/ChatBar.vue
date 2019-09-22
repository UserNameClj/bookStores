<template>
  <div>
    <div class="chat-scope" v-for="(chat, index) in chatContens" :key="index">
      <van-swipe-cell>
        <van-cell :border="false" :title="chat.id + chat.title" />
        <template slot="right">
          <van-button
            square
            type="danger"
            text="删除"
            @touchstart="delChat(index)"
          />
          <van-button
            square
            type="primary"
            text="置顶"
            @touchstart="topChat(index)"
          />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBar",
  data() {
    return {
      chatContens: [
        {
          id: 0,
          title: "聊天内容"
        },
        {
          id: 1,
          title: "聊天内容"
        },
        {
          id: 2,
          title: "聊天内容"
        },
        {
          id: 3,
          title: "聊天内容"
        }
      ]
    };
  },
  components: {},
  methods: {
    delChat(i) {
      this.chatContens.splice(i, 1);
    },
    topChat(i) {
      this.chatContens.unshift(this.chatContens[i]);
      this.chatContens.splice(i + 1, 1);
    }
  }
};
</script>

<style scoped>
.chat-scope {
  margin: 0.6rem;
}
</style>
