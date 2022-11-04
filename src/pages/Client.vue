<template>
  <div class="client">
    <header class="header client__header">
      <nav-bar v-if="!isBurger" :colorMode="'dark'" class="header__nav-bar"></nav-bar>
      <burger-menu v-if="isBurger"> </burger-menu>
      <b-container fluid="xl">
        <b-row>
          <b-col cols="12" lg="5"   class="d-flex align-items-center">
            <div class="content">
              <h1 class="header__title h1">
                Choicie: more clients, easier communication
              </h1>
              <p class="header__paragraph body-s">
                Choicie is very familiar with the feeling of being an alien in
                another country (he is actually an alien). So Choicie decided to
                help people with the same problem to get rid of it and also
                improve cafes and restaurants.
              </p>
              <a class="header__link body-m--medium" href="#">Watch Choicie in action — 2 min</a>
            </div>
          </b-col>
          <b-col cols="2"> </b-col>
          <b-col cols="5" class="position-relative">
            <img src="../assets/img/client/header-photo.png" alt="" />
            <div class="header__quote quote">
              <p class="quote__paragraph">
                “We edited the menu after using this app. Now our sales are 30%
                higher“
              </p>
              <div class="quote__author">
                <img src="../assets/img/client/header-ico-positive-review-1.png" alt="" class="quote__ico" />
                <div>
                  <p class="quote__author-text">
                    <span class="body-m--s"> Anastasia Glorman,</span> <br />
                    <span class="body-xs"> co-fouder @syngenta </span>
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
          <b-col cols="3">
            <span class="logos-board__text">
              500+ RESTAURANTS TRUST CHOICIE
            </span>
          </b-col>
          <b-col cols="9" class="logos-board__logos">
            <img src="../assets/img/client/header-logos-1.svg" alt="" class="logos-board__logo" />
            <img src="../assets/img/client/header-logos-2.svg" alt="" class="logos-board__logo" />
            <img src="../assets/img/client/header-logos-3.svg" alt="" class="logos-board__logo" />
            <img src="../assets/img/client/header-logos-4.svg" alt="" class="logos-board__logo" />
            <img src="../assets/img/client/header-logos-5.svg" alt="" class="logos-board__logo" />
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
          <b-col lg="6" md="12" cols="12">
            <div class="performance__img-block-wrapper d-sm-flex justify-content-sm-center">
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
                <img src="../assets/img/client/img-block-1.svg" alt="" class="img-block__img" />
              </div>
            </div>
          </b-col>
          <b-col lg="6" md="12" cols="12">
            <div class="performance__img-block-wrapper d-sm-flex justify-content-sm-center">
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
                <img src="../assets/img/client/img-block-2.svg" alt="" class="img-block__img" />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="growth-drivers">
      <b-container fluid="xl">
        <b-row>
          <b-col sm="8">
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
          <b-col cols="8">
            <div class="growth-drivers__icons-wrapper">
              <div class="growth-driver growth-drivers__growth-driver">
                <img src="../assets/img/client/growth-driver-01-l.png" alt="" class="growth-driver__icon" />
                <p class="growth-driver__name body-m--s">Quality of Service</p>
              </div>
              <div class="growth-driver growth-drivers__growth-driver">
                <img src="../assets/img/client/growth-driver-02-l.png" alt="" class="growth-driver__icon" />
                <p class="growth-driver__name body-m--s">
                  Reputation and promotion on the web
                </p>
              </div>
              <div class="growth-driver growth-drivers__growth-driver">
                <img src="../assets/img/client/growth-driver-03-l.png" alt="" class="growth-driver__icon" />
                <p class="growth-driver__name body-m--s">Visibility</p>
              </div>

              <div class="growth-driver growth-drivers__growth-driver">
                <img src="../assets/img/client/growth-driver-04-l.png" alt="" class="growth-driver__icon" />
                <p class="growth-driver__name body-m--s">Number of orders</p>
              </div>
              <div class="growth-driver growth-drivers__growth-driver">
                <img src="../assets/img/client/growth-driver-05-l.png" alt="" class="growth-driver__icon" />
                <p class="growth-driver__name body-m--s">
                  Convenience of work with clients
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="4" class="growth-drivers__row2">
            <h3 class="h3 growth-drivers__btn-title">What Does it Take?</h3>
            <vue-button class="growth-drivers__btn">Become a Choicie partner!</vue-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="feedback">
      <b-container fluid="xl">
        <b-row>
          <div class="feedback__wrapper">
            <b-row>
              <b-col cols="2"> </b-col>
              <b-col cols="10">
                <div class="feedback__content">
                  <div class="feedback__text">
                    <img src="../assets/img/client/photo.png" alt="Author's photo" class="feedback__photo" />
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
                  <div class="feedback__profit">
                    <p class="body-m--large feedback__title">+ 40%</p>
                    <p class="feedback__paragraph body-s">
                      The restaurant’s revenue increased due to menu
                      adjustments, as well as lower grocery costs.
                    </p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
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
  components: { NavBar, VueButton, BurgerMenu  },
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
.client {
  &__nav-bar {
    margin-bottom: 119px;
  }
}

.header {
  padding-top: 40px;
  padding-bottom: 146px;
  background: #f4f0ff;
  
  &__nav-bar{
    margin-bottom: 24px;
  }
  &__title {
    color: var(--heading);
    text-align: left;
    margin-bottom: 24px;
  }

  &__paragraph {
    text-align: left;
    margin-bottom: 52px;
  }

  &__link {
    text-decoration: none;
    text-align: left;
    float: left;
    color: var(--brand-blue);
  }

  &__quote {
    position: absolute;
    left: -81px;
    bottom: -63px;
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

  &__author-text {
    line-height: 24px;
    margin-bottom: 0;
  }

  &__paragraph {
    text-align: left;
    margin-bottom: 16px;
    line-height: 24px;
  }

  &__author {
    display: flex;
    margin-bottom: 0;
  }

  &__ico {
    height: fit-content;
    margin-right: 16px;
  }
}

.logos-board {
  background: var(--blue-dark);
  padding-top: 42px;
  padding-bottom: 38px;
  margin-bottom: 120px;

  &__text {
    display: flex;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 32px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--white);
  }

  &__logos {
    display: flex;
    justify-content: space-evenly;

    & img:last-child {
      margin-right: 0;
    }
  }

  &__logo {
    height: fit-content;
  }
}

.img-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 570px;
  height: 640px;
  background: #e1efff;
  padding-left: 52px;
  padding-right: 52px;
  padding-top: 52px;

  &__text-block {}

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
  }

  &__img {
    margin-left: 11px;
    width: fit-content;
  }
}

.img-block--yellow {
  background: #f9f5e6;
}

.performance {
  padding-bottom: 160px;

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
    margin-bottom: 32px;
    color: rgba(42, 42, 56, 1);
  }

  &__paragraph {
    margin: 0;
    margin-bottom: 134px;
    color: rgba(127, 127, 136, 1);
  }
}

.growth-drivers {
  background-image: url("../assets/img/client/growth-drivers-bg.png");
  background-repeat: no-repeat;
  background-position: bottom;
  padding-bottom: 473px;
  margin-bottom: 268px;

  &__title {
    text-align: left;
    margin-bottom: 24px;
    color: var(--heading);
  }

  &__paragraph {
    text-align: left;
    margin-bottom: 104px;
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
  }
}

.growth-driver {
  display: inline-flex;
  align-items: center;

  &__icon {
    margin-right: 20px;
  }

  &__name {
    margin: 0;
    color: var(--heading);
  }
}

.feedback {
  margin-bottom: 160px;

  &__content {
    display: flex;
  }

  &__text {
    position: relative;
    max-width: 440px;
  }

  &__photo {
    position: absolute;
    top: -190px;
    left: -340px;
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
    padding-left: 60px;
    margin-left: 60px;
    max-width: 258px;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 1px;
      background: rgba(221, 215, 237, 1);
      height: 90%;
    }
  }

  &__wrapper {}

  &__content {
    padding-left: 140px;
    padding-right: 72px;
    padding-top: 80px;
    padding-bottom: 56px;
    background: #f7f4ff;
  }
}
</style>
