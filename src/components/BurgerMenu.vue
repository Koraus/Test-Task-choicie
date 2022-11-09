<template>
  <div class="burger-menu" :class="{ 'burger-menu--is-open-bg': isBurgerOpen }">
    <b-row>
      <b-col cols="7">
        <div class="wrapper">
          <button class="burger-menu__switch-btn" @click="openBurger">
            <span class="burger-menu__burger-ico">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_410_3138)">
                  <path
                    d="M15 7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                    :fill="switchBtnIcoColor"
                  />
                  <path
                    d="M15 1H1C0.4 1 0 1.4 0 2C0 2.6 0.4 3 1 3H15C15.6 3 16 2.6 16 2C16 1.4 15.6 1 15 1Z"
                    :fill="switchBtnIcoColor"
                  />
                  <path
                    d="M15 13H1C0.4 13 0 13.4 0 14C0 14.6 0.4 15 1 15H8H15C15.6 15 16 14.6 16 14C16 13.4 15.6 13 15 13Z"
                    :fill="switchBtnIcoColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_410_3138">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          <logo
            class="burger-menu__logo"
            :iconColor="logoColor"
            :textColor="logoTextColor"
          ></logo>
        </div>
      </b-col>
      <b-col cols="5">
        <div class="btn-wrapper">
          <button
            class="burger-menu__btn--primary burger-menu__btn"
            :class="{ 'burger-menu__btn--is-menu-open': isBurgerOpen }"
          >
            <icon :icoSize="'m'" :icoName="'android'" :icoColor="iconColor" />
          </button>
          <button
            class="burger-menu__btn--secondary burger-menu__btn"
            :class="{ 'burger-menu__btn--is-menu-open': isBurgerOpen }"
          >
            <icon :icoSize="'m'" :icoName="'ios'" :icoColor="iconColor"> </icon>
          </button>
        </div>
      </b-col>
    </b-row>
    <ul v-if="isBurgerOpen" class="burger-menu__list">
      <li
        class="burger-menu__item"
        :class="{ 'burger-menu__item -active': $route.fullPath == '/' }"
      >
        <router-link class="burger-menu__link" to="/">Home</router-link>
      </li>
      <li
        class="burger-menu__item"
        :class="{ 'burger-menu__item -active': $route.fullPath == '/about' }"
      >
        <router-link class="burger-menu__link" to="/about">About</router-link>
      </li>
      <li
        class="burger-menu__item"
        :class="{ 'burger-menu__item -active': $route.fullPath == '/client' }"
      >
        <router-link class="burger-menu__link" to="/client">Client</router-link>
      </li>
      <li
        class="burger-menu__item"
        :class="{
          'burger-menu__item -active': $route.fullPath == '/how-to-use',
        }"
      >
        <router-link class="burger-menu__link" to="/how-to-use"
          >How to use
        </router-link>
      </li>
      <li
        class="burger-menu__item"
        :class="{ 'burger-menu__item -active': $route.fullPath == '/contacts' }"
      >
        <router-link class="burger-menu__link" to="/contacts"
          >Request
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "./UI/Icon.vue";
import Logo from "./Logo.vue";
export default {
  name: "BurgerMenu",
  props: {
    onLight: { type: String, default: "light" },
  },
  components: { Logo, Icon },
  data() {
    return {
      isBurgerOpen: false,
    };
  },
  methods: {
    openBurger() {
      this.isBurgerOpen = !this.isBurgerOpen;
    },
  },
  computed: {
    iconColor() {
      return this.isBurgerOpen ? "black" : "white";
    },
    logoColor() {
      return this.isBurgerOpen ? "var(--brand-yellow)" : "#3B2186";
    },
    logoTextColor() {
      return this.isBurgerOpen ? "white" : "black";
    },

    switchBtnIcoColor() {
      return this.isBurgerOpen ? "white" : "black";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";

.wrapper {
  display: flex;
  align-items: center;
}
.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.burger-menu {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  background: transparent;
  padding: 8px 16px;
  padding-bottom: 0;

  &--is-open-bg {
    background: #2b146c;
  }

  &__logo {
    display: inline;
    width: fit-content;

    @include max992 {
      height: 52px;
    }

    @include max720 {
      height: 42px;
    }

    @include max540 {
      height: 32px;
    }
  }

  &__switch-btn {
    display: inline;
    padding-right: 0;
    padding-top: 0;
    padding-left: 40px;
    padding-bottom: 40px;
    border: none;
    position: relative;
    background: transparent;
    font-size: 0;
  }

  &__burger-ico {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__btn {
    padding: 14px;
    border: none;
    border-radius: 50px;
  }

  &__btn--primary {
    background: var(--brand-blue);
    margin-right: 13px;
  }

  &__btn--secondary {
    background: var(--brand-yellow);
  }

  &__btn--is-menu-open {
    background: var(--white);
  }

  &__list {
    list-style: none;
    padding-left: 0;
    margin: 0 auto;
  }

  &__item {
    padding: 0;
    padding-top: 17px;
    padding-bottom: 17px;
    border-bottom: 1px #3b2186 solid;

    &:hover::after {
      opacity: 1;
      transition: 0.6s;
    }

    &--active::before {
    }
  }

  &__item > a {
    color: var(--white);
  }

  &__item--active > a {
    color: rgb(253, 13, 233);
  }

  &__link {
    text-decoration: none;
  }
}
</style>
