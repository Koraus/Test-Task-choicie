<template>
  <div class="client">
    <header class="header client__header">
      <nav-bar
        v-if="!isBurger"
        :colorMode="'dark'"
        class="header__nav-bar"
      ></nav-bar>
      <burger-menu v-if="isBurger" class="header__burger"> </burger-menu>
      <b-container fluid="xl">
        <b-row>
          <b-col cols="12" lg="5" class="d-flex align-items-center">
            <div class="header__content">
              <h1 class="header__title h1">
                Choicie: more clients, easier communication
              </h1>
              <p class="header__paragraph body-s">
                Choicie is very familiar with the feeling of being an alien in
                another country (he is actually an alien). So Choicie decided to
                help people with the same problem to get rid of it and also
                improve cafes and restaurants.
              </p>
              <a class="header__link body-m--medium" href="#"
                >Watch Choicie in action — 2 min</a
              >
            </div>
          </b-col>
          <b-col lg="2" cols="0"> </b-col>
          <b-col lg="5" cols="12" class="position-relative">
            <img
              src="../assets/img/client/header-photo.png"
              alt=""
              class="header__img"
            />
            <div class="header__quote quote">
              <p class="quote__paragraph">
                “We edited the menu after using this app. Now our sales are 30%
                higher“
              </p>
              <div class="quote__author">
                <img
                  src="../assets/img/client/header-ico-positive-review-1.png"
                  alt=""
                  class="quote__ico"
                />
                <div>
                  <p class="quote__author-text">
                    <span class="body-m--s quote__author-name">
                      Anastasia Glorman,</span
                    >
                    <br />
                    <span class="body-xs quote__author-info">
                      co-fouder @syngenta
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <section class="logos-board">
      <b-container fluid="xl">
        <b-row no-gutters>
          <b-col cols="12" lg="3">
            <span class="logos-board__text">
              500+ RESTAURANTS TRUST CHOICIE
            </span>
          </b-col>
          <b-col cols="12" lg="9" class="logos-board__logos">
            <img
              src="../assets/img/client/header-logos-1.svg"
              alt=""
              class="logos-board__logo"
            />
            <img
              src="../assets/img/client/header-logos-2.svg"
              alt=""
              class="logos-board__logo"
            />
            <img
              src="../assets/img/client/header-logos-3.svg"
              alt=""
              class="logos-board__logo"
            />
            <img
              src="../assets/img/client/header-logos-4.svg"
              alt=""
              class="logos-board__logo"
            />
            <img
              src="../assets/img/client/header-logos-5.svg"
              alt=""
              class="logos-board__logo"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="performance">
      <p class="performance__subtitle">Dashboard Performance</p>
      <h2 class="h2 performance__title">
        Manage your menu so your customers’ll like it
      </h2>
      <p class="performance__paragraph body-l">
        We created an advanced dashboard. You can see: it’s very easy to
        implement our product.
      </p>
      <b-container fluid="xl">
        <b-row>
          <b-col lg="6" md="12" cols="12" class="d-flex justify-content-center">
            <div class="performance__img-block-wrapper">
              <div class="performance__img-block img-block">
                <div class="img-block__text-block">
                  <h3 class="img-block__title h2">
                    Creation of a Restaurant menu
                  </h3>
                  <p class="img-block__paragraph">
                    Upload your cafe or restaurant menu to the app. Choicie will
                    automatically translate it into the users’ native language
                    and add food photos.
                  </p>
                </div>
                <div class="img-block__img-container">
                  <img
                    src="../assets/img/client/img-block-1.svg"
                    alt=""
                    class="img-block__img"
                  />
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6" md="12" cols="12" class="d-flex justify-content-center">
            <div class="performance__img-block-wrapper">
              <div class="performance__img-block img-block img-block--yellow">
                <div class="img-block__text-block">
                  <h3 class="img-block__title h2">
                    The biggest feedback from your customers
                  </h3>
                  <p class="img-block__paragraph">
                    Rating on the waiter’s work and speed of service, review of
                    the cleanliness of the place and the taste of the food — all
                    the feedback is available in one place.
                  </p>
                </div>
                <div class="img-block__img-container">
                  <img
                    src="../assets/img/client/img-block-2.svg"
                    alt=""
                    class="img-block__img"
                  />
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="growth-drivers">
      <b-container fluid="xl">
        <b-row>
          <b-col sm="8" cols="12">
            <h2 class="h2 growth-drivers__title">
              Choicie for cafes and restaurants. Five growth drivers for your
              development
            </h2>
            <p class="growth-drivers__paragraph">
              Choicie helps you analyze user actions and improve your cafe or
              restaurant.
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col lg="8" cols="12">
            <div class="growth-drivers__icons-wrapper">
              <div class="growth-driver growth-drivers__growth-driver">
                <img
                  src="../assets/img/client/growth-driver-01-l.png"
                  alt=""
                  class="growth-driver__icon"
                />
                <p class="growth-driver__name body-m--s">Quality of Service</p>
              </div>
              <div class="growth-driver growth-drivers__growth-driver">
                <img
                  src="../assets/img/client/growth-driver-02-l.png"
                  alt=""
                  class="growth-driver__icon"
                />
                <p class="growth-driver__name body-m--s">
                  Reputation and promotion on the web
                </p>
              </div>
              <div class="growth-driver growth-drivers__growth-driver">
                <img
                  src="../assets/img/client/growth-driver-03-l.png"
                  alt=""
                  class="growth-driver__icon"
                />
                <p class="growth-driver__name body-m--s">Visibility</p>
              </div>

              <div class="growth-driver growth-drivers__growth-driver">
                <img
                  src="../assets/img/client/growth-driver-04-l.png"
                  alt=""
                  class="growth-driver__icon"
                />
                <p class="growth-driver__name body-m--s">Number of orders</p>
              </div>
              <div class="growth-driver growth-drivers__growth-driver">
                <img
                  src="../assets/img/client/growth-driver-05-l.png"
                  alt=""
                  class="growth-driver__icon"
                />
                <p class="growth-driver__name body-m--s">
                  Convenience of work with clients
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4" cols="12" class="growth-drivers__row2">
            <h3 class="h3 growth-drivers__btn-title">What Does it Take?</h3>
            <vue-button class="growth-drivers__btn"
              >Become a Choicie partner!</vue-button
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="feedback">
      <b-container fluid="xl">
        <b-row class="feedback__wrapper">
          <b-col class="feedback__content" cols="10" offset="0" offset-lg="2">
            <b-row>
              <b-col cols="12" md="7" lg="7">
                <div class="feedback__text">
                  <img
                    src="../assets/img/client/photo.png"
                    alt="Author's photo"
                    class="feedback__photo"
                  />
                  <p class="body-m--large feedback__title">
                    Our restaurant becomes more popular after joining Choicie!
                  </p>
                  <p class="feedback__paragraph body-s">
                    We started using Choicie quite recently. We adjusted our
                    menu and increased the restaurant’s revenue thanks to live
                    feedback.
                  </p>
                  <p class="feedback__name">
                    <span class="body-s"> Nelly Spender </span>
                    <span class="body-m--s"> — Restaurant name </span>
                  </p>
                </div>
              </b-col>
              <b-col cols="12" md="5" lg="5">
                <div class="feedback__profit">
                  <p class="body-m--large feedback__title">+ 40%</p>
                  <p class="feedback__paragraph body-s">
                    The restaurant’s revenue increased due to menu adjustments,
                    as well as lower grocery costs.
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import VueButton from "../components/UI/VueButton.vue";
import BurgerMenu from "../components/BurgerMenu.vue";
export default {
  components: { NavBar, VueButton, BurgerMenu },
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    isBurger() {
      return this.windowWidth < 992;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";

.client {
}

.header {
  padding-bottom: 146px;
  background: #f4f0ff;

  &__nav-bar {
    padding-top: 40px;
    margin-bottom: 110px;
  }

  &__content {
    @include max992 {
      margin: 0px auto 84px auto;

      max-width: 500px;
    }
  }

  &__title {
    color: var(--heading);
    text-align: left;
    margin-bottom: 24px;
    padding-top: 40px;

    @include max992 {
      padding-top: 120px;
    }
  }

  &__paragraph {
    text-align: left;
    margin-bottom: 52px;

    @include max992 {
      margin-bottom: 32px;
    }
  }

  &__link {
    text-decoration: none;
    text-align: left;
    float: left;
    color: var(--brand-blue);
  }

  &__img {
    @include max1200 {
      width: 100%;
      max-width: 400px;
    }
  }

  &__quote {
    position: absolute;
    left: -81px;
    bottom: -63px;

    @include max992 {
      left: 50%;
      transform: translate(-50%);
    }
  }
}

.quote {
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  background: white;
  box-shadow: 0px 30px 60px rgba(21, 10, 51, 0.09);
  border-radius: 8px;
  max-width: 318px;
  min-width: 212px;

  @include max720 {
    padding-right: 39px;
    padding-left: 22px;
    padding-top: 25px;
    padding-bottom: 23px;
  }

  &__author {
    line-height: 24px;
    margin-bottom: 0;
  }

  &__author-text {
    text-align: left;
    margin: 0;
  }

  &__author-name {
    @include max720 {
      font-size: 10px;
      line-height: 18px;
      text-align: left;
    }
  }

  &__paragraph {
    text-align: left;
    margin-bottom: 16px;
    line-height: 24px;

    @include max720 {
      font-size: 10px;
      line-height: 18px;
    }
  }

  &__author {
    display: flex;
    margin-bottom: 0;

    @include max720 {
      font-size: 10px;
      line-height: 18px;
    }
  }

  &__author-info {
    text-align: left;
    margin-bottom: 16px;
    line-height: 24px;

    @include max720 {
      font-size: 10px;
      line-height: 18px;
    }
  }

  &__ico {
    height: fit-content;
    margin-right: 16px;

    @include max720 {
      height: 24px;
      margin-right: 11px;
    }
  }
}

.logos-board {
  background: var(--blue-dark);
  padding-top: 42px;
  padding-bottom: 38px;
  margin-bottom: 120px;

  @include max720 {
    padding-top: 24px;
    padding-bottom: 0px;
    margin-bottom: 60px;
  }

  &__text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 32px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--white);

    @include max992 {
      display: block;
      margin-bottom: 40px;
    }

    @include max720 {
      margin-bottom: 24px;
    }
  }

  &__logos {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    & img:last-child {
      margin-right: 0;
    }
  }

  &__logo {
    height: fit-content;

    @include max720 {
      max-height: 24px;
      margin-bottom: 24px;
    }
  }
}

.img-block {
  display: flex;
  background: #e1efff;
  height: 640px;
  position: relative;

  @include max992 {
    max-width: 400px;
    margin-bottom: 24px;
    height: 540px;
  }

  @include max720 {
    max-width: 300px;
    height: 376px;
  }

  &__text-block {
    margin-top: 52px;
    margin-right: 52px;
    margin-left: 52px;

    @include max1200 {
      margin-top: 32px;
      margin-right: 32px;
      margin-left: 32px;
    }

    @include max992 {
      margin-top: 24px;
      margin-right: 16px;
      margin-left: 16px;
    }
  }

  &__title {
    text-align: left;
    margin-bottom: 24px;
  }

  &__paragraph {
    text-align: left;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;

    @include max992 {
      margin-bottom: 24px;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    @include max720 {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    }
  }

  &__img-container {
  }

  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: fit-content;
    display: block;

    @include max1200 {
      height: 224px;
      width: auto;
    }

    @include max720 {
      height: 136px;
    }
  }
}

.img-block--yellow {
  background: #f9f5e6;
}

.performance {
  padding-bottom: 160px;

  @include max720 {
    padding-bottom: 58px;
  }

  &__subtitle {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #3b2186;
    margin: 0;
    margin-bottom: 32px;
  }

  &__title {
    padding-top: 60px;
    margin-bottom: 32px;
    color: rgba(42, 42, 56, 1);

    @include max992 {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      padding-top: 0px;
    }
  }

  &__paragraph {
    margin: 0;
    margin-bottom: 134px;
    color: rgba(127, 127, 136, 1);

    @include max992 {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 50px;
    }
  }
}

.growth-drivers {
  background-image: url("../assets/img/client/growth-drivers-bg.png");
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 473px;
  margin-bottom: 268px;

  @include max540 {
    background-image: url("../assets/img/client/growth-drivers-bg-mob.png");
    padding-bottom: 390px;
    margin-bottom: 0px;
  }

  &__title {
    text-align: left;
    margin-bottom: 24px;
    color: var(--heading);
  }

  &__paragraph {
    text-align: left;
    margin-bottom: 104px;

    @include max720 {
      margin-bottom: 50px;
    }
  }

  &__btn-title {
    text-align: left;
    margin-bottom: 32px;
    color: var(--heading);
  }

  &__btn {
    width: 100%;
  }

  &__growth-driver {
    margin-right: 43px;
    margin-bottom: 32px;
  }

  &__icons-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 54px;

    @include max720 {
      margin-bottom: 50px;
    }
  }
}

.growth-driver {
  display: inline-flex;
  align-items: center;

  &__icon {
    margin-right: 20px;

    @include max540 {
      height: 32px;
    }
  }

  &__name {
    margin: 0;
    color: var(--heading);

    @include max540 {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      text-align: left;
    }
  }
}

.feedback {
  margin-bottom: 160px;

  &__content {
    padding-left: 140px;
    padding-right: 72px;
    background: #f7f4ff;

    @include max720 {
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 160px;
    }
  }

  &__text {
    position: relative;
    max-width: 440px;
    padding-top: 80px;
    padding-bottom: 56px;

    @include max720 {
      padding-top: 0px;
      padding-bottom: 10px;
      max-width: 640px;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 1px;
        background: rgba(221, 215, 237, 1);
        height: 90%;

        @include max720 {
          height: 1px;
          width: 100%;
        }
      }
    }
  }

  &__photo {
    position: absolute;
    top: -190px;
    left: -340px;

    @include max992 {
      top: -46%;
      left: 50%;
      transform: translate(-50%, -46%);
    }
    @include max720 {
      height: 206px;
      top: -300px;
      left: 55%;
      transform: translate(-55%);
    }
    @include max540 {
      height: 206px;
      top: -250px;
      left: 55%;
      transform: translate(-55%);
    }
  }

  &__title {
    color: var(--brand-blue);
    text-align: left;
  }

  &__paragraph {
    text-align: left;
  }

  &__name {
    text-align: left;
  }

  &__profit {
    position: relative;
    padding-bottom: 56px;
    padding-top: 80px;
    padding-left: 60px;
    max-width: 258px;

    @include max720 {
      width: 100%;
      padding-top: 16px;
      padding-right: 0px;
      padding-left: 0px;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 1px;
      background: rgba(221, 215, 237, 1);
      height: 90%;

      @include max720 {
        display: none;
      }
    }
  }

  &__wrapper {
    justify-content: center;
  }
}
</style>
