<template>
  <!-- Teleport 是將裡面的內容傳送到html內某標籤位置 -->
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-mask">
        <div class="content">
            <Button :outline="true">
                取消
            </Button>
            <Button @click="closeModal">
                確認
            </Button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import Button from "./Button.vue";
const emits = defineEmits(['close']);

function closeModal(){
emits('close')
};

defineComponent({
  name: "PopupModalComponent",
});
</script>

<style lang="scss" scoped></style>
