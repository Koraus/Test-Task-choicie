<template >
  <b-container fluid="xl">
    <div class="my-nav" v-if="colorMode === 'light'">
      <b-row :align-h="'center'">
        <b-col cols="2">
          <logo :iconColor="'var(--brand-yellow)'" :textColor="'var(--white)'" />
        </b-col>
        <b-col cols="6" :align-self="'center'">
          <ul class="my-nav__list">
            <li class="my-nav__item--light" :class="{ 'my-nav__item--light-active': $route.fullPath == '/' }">
              <router-link class="my-nav__link" to="/">Home</router-link>
            </li>
            <li class="my-nav__item--light" :class="{ 'my-nav__item--light-active': $route.fullPath == '/about' }">
              <router-link class="my-nav__link" to="/about">About</router-link>
            </li>
            <li class="my-nav__item--light" :class="{ 'my-nav__item--light-active': $route.fullPath == '/client' }">
              <router-link class="my-nav__link" to="/client">Client</router-link>
            </li>
            <li class="my-nav__item--light" :class="{ 'my-nav__item--light-active': $route.fullPath == '/how-to-use' }">
              <router-link class="my-nav__link" to="/how-to-use">How to use
              </router-link>
            </li>
            <li class="my-nav__item--light" :class="{ 'my-nav__item--light-active': $route.fullPath == '/contacts' }">
              <router-link class="my-nav__link" to="/contacts">Contact </router-link>
            </li>
          </ul>
        </b-col>
        <b-col cols="4" class="my-nav__buttons">
          <vue-button :size="'m'" :btnType="'primary'" isIcon :iconName="'android'" :iconColor="'white'">
            Android
          </vue-button>
          <vue-button :size="'m'" :btnType="'secondary'" isIcon :iconName="'ios'" :iconColor="'var(--brand-blue)'"
            class="my-nav__button-ios">
            iOS
          </vue-button>
        </b-col>
      </b-row>


    </div>
    <div class="my-nav" v-if="colorMode === 'dark'">
      <b-row :align-h="'center'">
        <b-col cols="2">
          <logo :iconColor="'var(--brand-blue)'" :textColor="'black'" />
        </b-col>
        <b-col cols="6" :align-self="'center'">
          <ul class="my-nav__list">
            <li class="my-nav__item" :class="{ 'my-nav__item--active': $route.fullPath == '/' }">
              <router-link class="my-nav__link" to="/">Home</router-link>
            </li>
            <li class="my-nav__item" :class="{ 'my-nav__item--active': $route.fullPath == '/about' }">
              <router-link class="my-nav__link" to="/about">About</router-link>
            </li>
            <li class="my-nav__item" :class="{ 'my-nav__item--active': $route.fullPath == '/client' }">
              <router-link class="my-nav__link" to="/client">Client</router-link>
            </li>
            <li class="my-nav__item" :class="{ 'my-nav__item--active': $route.fullPath == '/how-to-use' }">
              <router-link class="my-nav__link" to="/how-to-use">How to use
              </router-link>
            </li>
            <li class="my-nav__item" :class="{ 'my-nav__item--active': $route.fullPath == '/contacts' }">
              <router-link class="my-nav__link" to="/contacts">Contact </router-link>
            </li>
          </ul>
        </b-col>
        <b-col cols="4" class="my-nav__buttons">
          <vue-button :size="'m'" :btnType="'primary'" isIcon :iconName="'android'" :iconColor="'white'">
            Android
          </vue-button>
          <vue-button :size="'m'" :btnType="'secondary'" isIcon :iconName="'ios'" :iconColor="'white'"
            class="my-nav__button-ios   my-nav__button-ios-dark">
            iOS
          </vue-button>
        </b-col>
      </b-row>


    </div>
  </b-container>
</template>

<script>
import Logo from "./Logo.vue";
import VueButton from "./UI/VueButton.vue";

export default {
  name: "NavBar",
  props: {
    colorMode: { type: String, default: 'light' }
  },
  components: { Logo, VueButton },
};
</script>

<style scoped lang="scss">
.my-nav {

  &__list {
    list-style: none;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }



  &__item--light {
    margin-right: 50px;
    position: relative;

    &::after {
      opacity: 0;
      content: "";
      position: absolute;
      top: 33px;
      left: 50%;
      transform: translate(-50%);
      width: 16px;
      height: 3px;
      background: var(--brand-yellow);
      border-radius: 50px;
      transition: 0.6s;
    }

    &:hover::after {
      opacity: 1;
      transition: 0.6s;
    }

    &-active::before {
      content: "";
      position: absolute;
      top: 33px;
      left: 50%;
      transform: translate(-50%);
      width: 16px;
      height: 3px;
      background: var(--brand-yellow);
      border-radius: 50px;
    }
  }

  &__item--light>a {
    color: var(--white);
  }
  &__item--light-active>a {
    color: var(--white);
  }

  &__item {
    margin-right: 50px;
    position: relative;

    &::after {
      opacity: 0;
      content: "";
      position: absolute;
      top: 33px;
      left: 50%;
      transform: translate(-50%);
      width: 16px;
      height: 3px;
      background: var(--brand-yellow);
      border-radius: 50px;
      transition: 0.6s;
    }

    &:hover::after {
      opacity: 1;
      transition: 0.6s;
    }

    &--active::before {
      content: "";
      position: absolute;
     top: 33px;
      left: 50%;
      transform: translate(-50%);
      width: 16px;
      height: 3px;
      background: var(--brand-yellow);
      border-radius: 50px;
    }
  }

  &__item>a {
    color: var(--gray80);
  }

  &__item--active>a {
    color: rgba(42, 42, 56, 1);
  }

  &__list li:last-child {
    margin-right: 0;
  }

  &__link {
    text-decoration: none;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
  }

  &__button-ios {
    min-width: 147px;
    margin-left: 16px;
    color: var(--brand-blue);
  }
  &__button-ios-dark{
    color:white;
  }
}
</style>
