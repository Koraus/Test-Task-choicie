<template>
  <div class="header">
    <nav-bar class="header__nav-bar"></nav-bar>
    <b-container fluid="xl">
      <b-row>
        <b-col cols="6">
          <h1 class="h1 header__title">All the restaurantsin the world - <br /> with one tap</h1>
          <p class="body-s header__subtitle">And a good friend with the same name. He understands that feeling of being
            an alien in another country, so here is Choicie, an app. It can make your journey, date or meeting with
            friends much better. </p>
          <vue-button :btnType="'secondary'" class="header__btn">Get Started</vue-button>
        </b-col>
        <b-col cols="6"> <img src="../assets/img/Home-bg-pic1.png" alt="" class=" header__img"> </b-col>
      </b-row>
      <b-row class="features">

          <p class="body-m--large features__paragraph">We are the first of our kind! Here you can find:</p>
          <b-col cols="4">
            <div class="features__feature feature">
              <div class="feature__img-container"> <img src="../assets/img/icons/features/ico-restaurant.png" alt="ico"
                  class="feature__img"> </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium"> Restaurant Review</p>
                <p class="feature__subtitle body-xs">Use fast and convenient way to create orders</p>
              </div>
            </div>
            <div class="features__feature feature">
              <div class="feature__img-container"> <img src="../assets/img/icons/features/ico-qr-code.png" alt="ico"
                  class="feature__img"> </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium"> QR Code Menu</p>
                <p class="feature__subtitle body-xs">Use fast and convenient way to create orders</p>
              </div>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="features__feature feature">
              <div class="feature__img-container"> <img src="../assets/img/icons/features/ico-map.png" alt="ico"
                  class="feature__img"> </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium"> Map with Restaurant Tags</p>
                <p class="feature__subtitle body-xs">Make simple selection by your criteria</p>
              </div>
            </div>
            <div class="features__feature feature">
              <div class="feature__img-container"> <img src="../assets/img/icons/features/ico-bonus.png" alt="ico"
                  class="feature__img"> </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium"> Bonus Points for Clients</p>
                <p class="feature__subtitle body-xs">Spend it and get free drinks and dishes</p>
              </div>
            </div>
          </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueButton from "../components/UI/VueButton.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: { VueButton, NavBar },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 40px;
  padding-bottom: 102px;
  background: #2B146C;
  &__img{
    width: 100%;
  }
  &__nav-bar {
    margin-bottom: 71px;
  }

  &__title {
    padding-top: 65px;
    margin-bottom: 70px;
    text-align: left;
    color: var(--white);
    max-width: 548px;
  }

  &__subtitle {
    color: var(--white);
    text-align: left;
    max-width: 500px;
    margin-bottom: 52px;
  }

  &__btn {
    min-width: 135px;
  }
}

.features {

  &__paragraph {
    margin: 0;
    margin-bottom: 33px;
    color: var(--white);
    text-align: left;
  }
}

.feature {
  display: flex;
  align-items: center;

  &__img {}

  &__img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 87px;
    overflow: hidden;
    margin-right: 9px;
  }

  &__title {
    color: var(--white);
    margin: 0;
    text-align: left;
  }

  &__subtitle {
    color: var(--white);
    margin: 0;
    text-align: left;

  }
}
</style>
