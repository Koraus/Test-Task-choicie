<template>
  <button class="vue-button" :class="styles">
    <div v-if="isIcon" class="vue-button__ico">
      <icon
        :icoColor="iconColor"
        :icoSize="iconSize"
        :icoName="iconName"
      ></icon>
    </div>

    <slot> </slot>
  </button>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "VueButton",
  components: { Icon },
  data() {
    return {};
  },
  props: {
    btnType: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "m",
      validator(value) {
        return ["m", "s"].includes(value);
      },
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    iconSize: {
      type: String,
    },
    iconColor: {
      type: String,
    },
    iconName: {
      type: String,
    },
  },
  computed: {
    styles() {
      return `vue-button--${this.btnType} vue-button--${this.size}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-button {
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";

  font-style: normal;
  font-weight: 600;

  border: none;
  height: fit-content;
}

.vue-button__ico {
  margin-right: 11px;
}

.vue-button--primary {
  background: var(--brand-blue);
  color: var(--white);

  &:focus {
    background: #2b1765;
  }

  &:disabled {
    background: #e0e0f2;
    color: var(--brand-blue);
  }
}

.vue-button--secondary {
  background: var(--brand-yellow);
  color: var(--white);

  &:focus {
    background: #e5c270;
  }

  &:disabled {
    background: #fdf8ec;
    color: var(--brand-yellow);
  }
}

.vue-button--m {
  padding: 14px 24px 14px 24px;
  font-size: 16px;
  line-height: 24px;
}

.vue-button--s {
  padding: 8px 24px 8px 24px;
  font-size: 14px;
  line-height: 18px;
}
</style>
