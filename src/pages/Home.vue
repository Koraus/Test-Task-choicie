<template>
  <div class="home-page">
    <div class="header">
      <nav-bar v-if="!isBurger" class="header__nav-bar"></nav-bar>
      <burger-menu v-if="isBurger"> </burger-menu>
      <b-container fluid="xl">
        <b-row>
          <b-col xl="6" md="7">
            <div>
              <h1 class="h1 header__title header__title--small">
                All the restaurants in the world&nbsp;- <br />
                with one tap
              </h1>
              <p class="body-s header__subtitle header__subtitle--small">
                And a good friend with the same name. He understands that
                feeling of being an alien in another country, so here is
                Choicie, an app. It can make your journey, date or meeting with
                friends much better.
              </p>
              <vue-button
                v-if="!isBurger"
                :btnType="'secondary'"
                class="header__btn"
                >Get Started</vue-button
              >
              <vue-button
                v-if="isBurger"
                :btnType="'primary'"
                class="header__btn"
                >Get Started</vue-button
              >
            </div>
          </b-col>
          <b-col xl="6" md="5">
            <img
              src="../assets/img/Home-bg-pic1.png"
              alt=""
              class="header__img"
            />
          </b-col>
        </b-row>
        <b-row class="features">
          <p class="body-m--large features__paragraph">
            We are the first of our kind<span v-if="!isBurger"
              >! Here you can find
            </span>
            :
          </p>
          <b-col xl="4" md="6" sm="12" class="align-h-md-center">
            <div class="features__feature feature">
              <div class="feature__img-container">
                <picture>
                  <source
                    media="(max-width:982px)"
                    srcset="
                      ../assets/img/icons/features/44px/restraurant_review.svg
                    "
                  />
                  <img
                    src="../assets/img/icons/features/ico-restaurant.png"
                    alt="ico"
                    class="feature__img"
                  />
                </picture>
              </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium">Restaurant Review</p>
                <p class="feature__subtitle body-xs">
                  Use fast and convenient way to create orders
                </p>
              </div>
            </div>
            <div class="features__feature feature">
              <div class="feature__img-container">
                <picture>
                  <source
                    media="(max-width:982px)"
                    srcset="../assets/img/icons/features/44px/qr_code.svg"
                  />
                  <img
                    src="../assets/img/icons/features/ico-qr-code.png"
                    alt="ico"
                    class="feature__img"
                  />
                </picture>
              </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium">QR Code Menu</p>
                <p class="feature__subtitle body-xs">
                  Use fast and convenient way to create orders
                </p>
              </div>
            </div>
          </b-col>
          <b-col xl="4" md="6">
            <div class="features__feature feature">
              <div class="feature__img-container">
                <picture>
                  <source
                    media="(max-width:982px)"
                    srcset="
                      ../assets/img/icons/features/44px/map_restaurant_tags.svg
                    "
                  />
                  <img
                    src="../assets/img/icons/features/ico-map.png"
                    alt="ico"
                    class="feature__img"
                  />
                </picture>
              </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium">
                  Map with Restaurant Tags
                </p>
                <p class="feature__subtitle body-xs">
                  Make simple selection by your criteria
                </p>
              </div>
            </div>
            <div class="features__feature feature">
              <div class="feature__img-container">
                <picture>
                  <source
                    media="(max-width:982px)"
                    srcset="../assets/img/icons/features/44px/bonus.svg"
                  />
                  <img
                    src="../assets/img/icons/features/ico-bonus.png"
                    alt="ico"
                    class="feature__img"
                  />
                </picture>
              </div>
              <div class="feature__text-wrapper">
                <p class="feature__title body-s--medium">
                  Bonus Points for Clients
                </p>
                <p class="feature__subtitle body-xs">
                  Spend it and get free drinks and dishes
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container fluid="xl" class="section-video">
      <div class="video-about">
        <h2 class="h2 video-about__title">
          Learn more about Choicie in 1 minute
        </h2>
        <video
          width="100%"
          height="auto"
          controls
          poster="../assets/img/home-video-poster.png"
        >
          <source src="#" type="video/mp4" />
        </video>
      </div>
    </b-container>
    <b-container fluid="xl">
      <div class="about-features">
        <b-row
          class="about-feature about-features__first-block"
          :align-v="'center'"
        >
          <b-col xl="6" md="7">
            <h2 class="h2 about-feature__title">
              Choicie is a universal menu for all restaurants.
            </h2>
            <p class="about-feature__paragraph about-feature__paragraph--first">
              Foreign language names are no longer a problem.
            </p>
            <p class="about-feature__paragraph">
              Try new dishes when you travel or just go outside — with Choicie,
              you can order anything using automatic menu translation pictures
              of dishes. Place your order on the way to the restaurant, then
              just show the QR-code to the waiter.
            </p>
            <vue-button :btnType="'primary'" class="about-feature__btn"
              >Get Started
            </vue-button>
          </b-col>
          <b-col xl="6" md="5">
            <picture>
              <source
                media="(max-width:982px)"
                srcset="../assets/img/home-feature-1-mob.svg"
              />
              <img
                src="../assets/img/home-feature-1.png"
                alt=""
                class="about-feature__img"
              />
            </picture>
          </b-col>
        </b-row>
        <b-row
          class="about-feature about-features__second-block"
          :align-v="'center'"
        >
          <b-col xl="6" md="7">
            <picture>
              <source
                media="(max-width:982px)"
                srcset="../assets/img/home-feature-2-mob.svg"
              />
              <img
                src="../assets/img/home-feature-2.png"
                alt=""
                class="about-feature__img"
              />
            </picture>
          </b-col>
          <b-col xl="6" md="7" order-md="2" class="about-feature__text-margin">
            <h2 class="h2 about-feature__title">And a new social network</h2>
            <p class="about-feature__paragraph about-feature__paragraph--first">
              For those who love food! Become an Influencer: add new restaurants
              to the city map, earn points, get followers.
            </p>
            <p class="about-feature__paragraph about-feature__paragraph--last">
              Keep private important ordering information in your account: mark
              the dishes you liked and didn't like, and the foods you're
              allergic to.
            </p>
            <vue-button :btnType="'primary'" class="about-feature__btn"
              >Get Started
            </vue-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <how-use></how-use>
    <b-container fluid="xl">
      <section class="customers">
        <p class="customers__subtitle">
          We work with cafe and restaurant owners from
        </p>
        <h2 class="h2 customers__title">
          <span v-if="!isBurger"> All the world </span>
          <span v-if="isBurger"> 10 countries, 5 continents</span>
        </h2>

        <p v-if="isBurger" class="customers__paragraph body-l">
          And there will be more! <br />
          Choicie is ready to work internationally. We work with customers in 8
          different time zones.
        </p>
        <p v-if="!isBurger" class="customers__paragraph body-l">
          And there will be more! Choicie is ready to work internationally. We
          work with customers in 8 different time zones.
        </p>
        <img src="../assets/img/map.png" alt="map" class="customers__img" />
      </section>
    </b-container>
  </div>
</template>

<script>
import VueButton from "../components/UI/VueButton.vue";
import NavBar from "../components/NavBar.vue";
import BurgerMenu from "../components/BurgerMenu.vue";
import HowUse from "../components/home/HowUse.vue";

export default {
  components: { VueButton, NavBar, BurgerMenu, HowUse },
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

.header {
  padding-top: 40px;
  padding-bottom: 77px;
  margin-bottom: 68px;
  background: #2b146c;
  position: relative;

  @include max992 {
    background: var(--yellow-light);
  }

  @include max720 {
    padding-bottom: 38px;
    margin-bottom: 49px;
  }

  &__img {
    width: fit-content;

    @include max1200 {
      display: none;
    }
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

    @include max1200 {
      padding-top: 80px;
    }
  }

  &__title--small {
    @include max992 {
      color: var(--heading);
      margin-bottom: 30px;
    }

    @include max720 {
      margin-bottom: 16px;
      max-width: 288px;
    }
  }

  &__subtitle {
    color: var(--white);
    text-align: left;
    max-width: 500px;
    margin-bottom: 52px;

    @include max992 {
      margin-bottom: 31px;
    }
  }

  &__subtitle--small {
    @include max992 {
      color: var(--heading);
    }
  }

  &__btn {
    margin-bottom: 40px;

    @include max992 {
      margin-bottom: 60px;
    }

    @include max720 {
      width: 100%;
    }
  }
}

.features {
  &__paragraph {
    margin: 0;
    margin-bottom: 22px;
    color: var(--white);
    text-align: left;

    @include max992 {
      color: var(--heading);
    }

    @include max720 {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 27px;
    }
  }
}

.feature {
  display: flex;

  &__img {
  }

  &__img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 78px;
    height: 87px;
    overflow: hidden;
    margin-right: 9px;

    @include max992 {
      align-items: flex-start;
      margin-right: 0px;
    }
  }

  &__title {
    color: var(--white);
    margin: 0;
    text-align: left;

    @include max992 {
      color: var(--heading);
    }

    @include max720 {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__subtitle {
    color: var(--white);
    margin: 0;
    text-align: left;

    @include max992 {
      color: var(--heading);
    }

    @include max720 {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    }
  }
}

.section-video {
  @include max1200 {
    display: none;
  }
}

.video-about {
  margin-bottom: 70px;

  &__title {
    margin: 0;
    margin-bottom: 18px;
  }
}

.about-features {
  margin-bottom: 252px;

  @include max720 {
    margin-bottom: 100px;
  }

  @include max540 {
    margin-bottom: 50px;
  }

  &__first-block {
    margin-bottom: 139px;

    @include max1200 {
      display: flex;
      flex-direction: column-reverse;
    }

    @include max720 {
      margin-bottom: 78px;
    }
  }

  &__second-block {
    @include max1200 {
      display: flex;
      flex-direction: column;
    }
  }
}

.about-feature {
  &__text-margin {
    margin-bottom: 40px;

    @include max720 {
      margin: 0;
    }
  }

  &__paragraph {
    margin: 0;
    margin-bottom: 52px;
    color: var(--body);
    text-align: left;

    @include max720 {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 28px;
    }
  }

  &__paragraph--first {
    margin-bottom: 20px;

    @include max720 {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
  }

  &__paragraph--last {
    @include max720 {
      margin-bottom: 74px;
    }
  }

  &__title {
    color: var(--heading);
    text-align: left;
    margin: 0;
    margin-bottom: 24px;
  }

  &__btn {
    padding-right: 40px;
    padding-left: 40px;

    @include max720 {
      width: 100%;
    }
  }

  &__img {
    @include max1200 {
      width: 100%;
      margin-bottom: 33px;
    }

    @include max720 {
      width: fit-content;
    }
  }
}

.customers {
  margin-bottom: 160px;

  @include max720 {
    margin-bottom: 50px;
  }

  &__subtitle {
    color: var(--brand-blue);
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-align: center;
    margin: 0;
    margin-bottom: 32px;
    text-transform: uppercase;

    @include max720 {
      font-size: 12px;
      line-height: 21px;
      margin-bottom: 10px;
    }
  }

  &__title {
    color: black;
    margin: 0;
    margin-bottom: 14px;

    @include max720 {
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__paragraph {
    color: #7f7f88;
    margin: 0;
    margin-bottom: 122px;

    @include max992 {
      margin-bottom: 60px;
    }

    @include max720 {
      font-size: 12px;
      line-height: 20px;
    }
  }

  &__img {
    @include max1200 {
      width: 100%;
    }
  }
}
</style>
