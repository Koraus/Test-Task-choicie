<template>
  <div class="home-page">
    <div class="header">
      <nav-bar class="header__nav-bar"></nav-bar>
      <b-container fluid="xl">
        <b-row>
          <b-col cols="6">
            <h1 class="h1 header__title">All the restaurantsin the world - <br /> with one tap</h1>
            <p class="body-s header__subtitle">And a good friend with the same name. He understands that feeling of
              being
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
    <b-container fluid="xl">
      <div class="video-about">
        <h2 class="h2 video-about__title">Learn more about Choicie in 1 minute</h2>
        <video width="100%" height="auto" controls poster="../assets/img/home-video-poster.png">
          <source src="#" type="video/mp4">
        </video>
      </div>
    </b-container>
    <b-container fluid="xl">
      <div class="about-features">
        <b-row class="about-feature about-features__first-block" :align-v="'center'">
          <b-col cols="6">
            <h2 class="h2 about-feature__title">Choicie is a universal
              menu for all restaurants. </h2>
            <p class="about-feature__paragraph">Foreign language names are no longer a problem. </p>
            <p class="about-feature__paragraph">Try new dishes when you travel or just go outside — with Choicie, you
              can order anything using automatic menu translation pictures of dishes. Place your order on the way to the
              restaurant, then just show the QR-code to the waiter. </p>
            <vue-button :btnType="'primary'">Get Started </vue-button>
          </b-col>
          <b-col cols="6">
            <img src="../assets/img/home-feature-1.png" alt="">
          </b-col>
        </b-row>
        <b-row class="about-feature" :align-v="'center'">
          <b-col cols="6">
            <img src="../assets/img/home-feature-2.png" alt="">
          </b-col>
          <b-col cols="6">
            <h2 class="h2 about-feature__title">And a new social network </h2>
            <p class="about-feature__paragraph">For those who love food! Become an Influencer: add new restaurants to
              the city map, earn points, get followers. </p>
            <p class="about-feature__paragraph">Keep private important ordering information in your account: mark the
              dishes you liked and didn't like, and the foods you're allergic to. </p>
            <vue-button :btnType="'primary'">Get Started </vue-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <section class="how-use"  id="how-to-use">
      <b-container>
        <b-row>
          <b-col cols="3">
            <div class="how-use__step step">
              <div class="step__ico"> <img src="../assets/img/icons/how-use/how-us-icon1.png" alt=""> </div>
              <p class="body-s step__paragraph">Scan the QR-code on the foreign language menu. </p>
              <div class="step__decor"> <svg width="57" height="141" viewBox="0 0 57 141" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M0 32.067V0.383789H56.5385V140.384H20.9548V32.067H0Z"
                    fill="url(#paint0_linear_131_664)" />
                  <defs>
                    <linearGradient id="paint0_linear_131_664" x1="28.2692" y1="0.383789" x2="28.2692" y2="140.384"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B3A985" />
                      <stop offset="1" stop-color="#B2A985" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col cols="3">
            <div class="how-use__step step">
              <div class="step__ico"> <img src="../assets/img/icons/how-use/how-us-icon2.png" alt=""> </div>
              <p class="body-s step__paragraph">Automatically get to the online version of menu — it will be translated
                into your native language. </p>
              <div class="step__decor"> <svg width="99" height="141" viewBox="0 0 99 141" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M0 115.321C41.5105 85.6892 62.2657 62.1274 62.2657 44.6355C62.2657 33.9316 57.6317 28.5796 48.3636 28.5796C43.1422 28.5796 39.2914 30.4071 36.8112 34.0621C34.4615 37.7171 33.1562 43.3955 32.8951 51.0971H0.195804C0.979021 34.2579 6.06993 21.5959 15.4685 13.1111C24.8671 4.62621 36.7459 0.383789 51.1049 0.383789C66.1165 0.383789 77.4079 4.16934 84.979 11.7404C92.6806 19.3115 96.5315 29.167 96.5315 41.3069C96.5315 54.7521 91.3753 67.9362 81.0629 80.8593C70.7506 93.6519 58.4149 104.486 44.0559 113.363H98.6853V140.384H0V115.321Z"
                    fill="url(#paint0_linear_131_676)" />
                  <defs>
                    <linearGradient id="paint0_linear_131_676" x1="49.3427" y1="0.383789" x2="49.3427" y2="140.384"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B3A985" />
                      <stop offset="1" stop-color="#B2A985" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
            </div>
          </b-col>
          <b-col cols="1">
            <div class="how-use__decor-line"></div>
          </b-col>
          <b-col cols="4">
            <div class="benefits">
              <div class="benefits__benefit benefit">
                <div class="benefit__icon"> <svg width="24" height="24" viewBox="0 0 22 22" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.5 9C19.9853 9 22 6.98528 22 4.5C22 2.01472 19.9853 0 17.5 0C15.0147 0 13 2.01472 13 4.5C13 6.98528 15.0147 9 17.5 9Z"
                      fill="#C7C0A6" />
                    <path
                      d="M4.5 9C6.98528 9 9 6.98528 9 4.5C9 2.01472 6.98528 0 4.5 0C2.01472 0 0 2.01472 0 4.5C0 6.98528 2.01472 9 4.5 9Z"
                      fill="#C7C0A6" />
                    <path
                      d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z"
                      fill="#C7C0A6" />
                    <path
                      d="M4.5 22C6.98528 22 9 19.9853 9 17.5C9 15.0147 6.98528 13 4.5 13C2.01472 13 0 15.0147 0 17.5C0 19.9853 2.01472 22 4.5 22Z"
                      fill="#C7C0A6" />
                  </svg>
                </div>
                <p class="benefit__description body-m">No language barrier </p>
              </div>
              <div class="benefits__benefit benefit">
                <div class="benefit__icon"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 22H0V20H2C2.552 20 3 19.552 3 19V18.606L1.312 17.727C0.635 17.374 0.223 16.682 0.236 15.919C0.25 15.156 0.684 14.479 1.373 14.148L3 13.37V12C3 11.541 3.312 11.141 3.758 11.03L6.044 10.459L3.293 7.707C3.105 7.52 3 7.266 3 7V1H5V6.586L7.458 9.044C7.975 9.561 8.166 10.289 7.972 10.993C7.777 11.696 7.238 12.222 6.529 12.399L5 12.781V14C5 14.385 4.779 14.735 4.432 14.901L2.237 15.953L4.463 17.113C4.793 17.285 5 17.627 5 18V19C5 20.654 3.654 22 2 22Z"
                      fill="#C7C0A6" />
                    <path
                      d="M21 3H13C11.346 3 10 4.346 10 6V11.667L6 17H21C22.654 17 24 15.654 24 14V6C24 4.346 22.654 3 21 3ZM20 13H14V11H20V13ZM20 9H14V7H20V9Z"
                      fill="#C7C0A6" />
                  </svg>

                </div>
                <p class="benefit__description body-m">No need to search for reviews — all collected in one place </p>
              </div>
              <div class="benefits__benefit benefit">
                <div class="benefit__icon"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.1476 16.8955C11.1476 16.8955 12.0528 12.9829 7.85595 12.4742C7.85595 12.4667 6.85349 16.8431 11.1476 16.8955Z"
                      fill="#C7C0A6" />
                    <path
                      d="M12.8757 16.8955C12.8757 16.8955 11.9705 12.9829 16.1673 12.4742C16.1598 12.4667 17.1698 16.8431 12.8757 16.8955Z"
                      fill="#C7C0A6" />
                    <path
                      d="M11.7161 0.00331995C5.18514 0.160422 -0.074022 5.62157 0.000788331 12.1525C0.0606366 17.5164 3.64405 22.035 8.53664 23.5087C8.95558 22.1023 8.38702 20.5986 7.16013 19.7981C6.31478 19.252 5.5966 18.661 5.02056 18.0925L5.11033 18.8181C5.14774 19.1248 4.93079 19.3942 4.62406 19.4316C4.31734 19.469 4.04803 19.252 4.01062 18.9453L3.7039 16.4691C3.53932 16.1848 3.41962 15.923 3.35977 15.6985C3.24756 15.302 3.34481 15.0402 3.50939 14.8681L3.36725 13.7235L2.93335 8.38955C2.91839 8.21001 3.12786 8.09031 3.27 8.20253C3.76375 8.57658 4.16024 9.06285 4.39215 9.63889C5.02056 11.2024 5.08041 12.9904 5.08041 12.9904L4.45948 13.5889L4.65399 15.1674C4.78865 15.1449 4.90834 15.1898 4.98315 15.3843C5.02804 15.4965 5.01308 15.6462 4.97567 15.7808C6.10531 17.5239 8.11771 18.5787 9.48674 19.1323C9.6588 19.1996 9.84583 19.1099 9.89819 18.9378C9.94308 18.7957 9.87575 18.646 9.74857 18.5787C7.65388 17.494 6.17264 14.9355 6.17264 11.958C6.17264 7.99306 8.77604 4.7837 11.9854 4.7837C15.1948 4.7837 17.7982 7.99306 17.7982 11.958C17.7982 14.9429 16.3244 17.494 14.2222 18.5787C14.0951 18.646 14.0277 18.7957 14.0726 18.9378C14.125 19.1099 14.312 19.2071 14.4841 19.1398C15.8232 18.6012 17.7982 17.5763 18.9428 15.8855C18.8904 15.7135 18.853 15.5265 18.9054 15.3843C18.9727 15.1973 19.0849 15.1449 19.2121 15.1599L19.4215 13.5964L19.3692 13.544C18.8679 13.0054 18.636 12.2647 18.7333 11.5391L19.2794 9.06285C19.3093 8.92071 19.4365 8.80849 19.5861 8.82345C19.7582 8.83842 19.8779 8.98804 19.848 9.1601L19.4515 11.5391C19.4365 11.6662 19.5188 11.7785 19.646 11.7934C19.7732 11.8084 19.8854 11.7261 19.9003 11.5989L20.2519 9.20499C20.2744 9.04789 20.4165 8.94315 20.5736 8.96559H20.5961H20.6185C20.7756 8.98804 20.8803 9.13018 20.8654 9.2798L20.5811 11.6812C20.5661 11.8084 20.6484 11.9206 20.7756 11.9356C20.9028 11.9505 21.015 11.8682 21.03 11.7411L21.2694 9.35461C21.2843 9.21247 21.3891 9.09277 21.5312 9.08529C21.7107 9.07033 21.8529 9.21247 21.8454 9.38453L21.7257 11.9356C21.6284 12.6687 21.2095 13.3121 20.5886 13.7086L20.5287 13.746L20.3866 14.7858C20.6035 14.9504 20.7681 15.2272 20.6409 15.6985C20.5587 15.9978 20.3866 16.3494 20.1248 16.7384L19.8255 18.9603C19.7806 19.2745 19.4889 19.4914 19.1747 19.4316C18.8829 19.3792 18.6959 19.0799 18.7333 18.7807L18.8006 18.2645C18.247 18.7882 17.5737 19.3268 16.7957 19.8281C15.5763 20.621 15.0377 22.1247 15.4491 23.5162C20.3941 22.0275 23.9999 17.4416 23.9999 12.0179C24.0224 5.28493 18.4864 -0.153782 11.7161 0.00331995Z"
                      fill="#C7C0A6" />
                  </svg>

                </div>
                <p class="benefit__description body-m">No need to install any translator — all you need is Choicie </p>
              </div>
              <vue-button class="benefit__btn" :btnType="'secondary'"> Get Started </vue-button>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3">
            <div class="how-use__step step">
              <div class="step__ico"> <img src="../assets/img/icons/how-use/how-us-icon3.png" alt=""> </div>
              <p class="body-s step__paragraph">Choose and order one or more dishes you like, then show your QR-code
                from Choicie to the waiter. </p>
              <div class="step__decor"> <svg width="96" height="141" viewBox="0 0 96 141" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M49.047 0.383789C58.3177 0.383789 66.2729 2.01243 72.9128 5.2697C79.5526 8.40169 84.5638 12.7865 87.9463 18.4241C91.4541 23.9364 93.2081 30.2003 93.2081 37.216C93.2081 45.8603 90.953 52.8133 86.443 58.0751C82.0582 63.3368 76.5459 66.6567 69.906 68.0348V68.9744C87.0694 74.4867 95.651 85.1981 95.651 101.109C95.651 108.751 93.8971 115.578 90.3893 121.592C86.8814 127.48 81.745 132.115 74.9799 135.498C68.3401 138.755 60.3221 140.384 50.9262 140.384C35.6421 140.384 23.4899 136.625 14.4698 129.109C5.57495 121.592 0.751678 110.129 0 94.7194H31.3826C31.6331 100.608 33.2617 105.243 36.2685 108.625C39.2752 112.008 43.66 113.699 49.4228 113.699C54.0582 113.699 57.6913 112.321 60.3222 109.565C63.0783 106.809 64.4564 103.238 64.4564 98.8536C64.4564 87.9543 56.5638 82.5046 40.7785 82.5046H34.7651V56.3838H40.5906C54.7472 56.6343 61.8255 51.5605 61.8255 41.1623C61.8255 36.6522 60.5727 33.2071 58.0671 30.8267C55.6868 28.3212 52.4295 27.0684 48.2953 27.0684C43.7852 27.0684 40.2148 28.6343 37.5839 31.7663C34.953 34.773 33.4497 38.8446 33.0738 43.9811H1.69128C2.31767 29.9498 6.70246 19.1757 14.8456 11.659C22.9888 4.14218 34.3893 0.383789 49.047 0.383789Z"
                    fill="url(#paint0_linear_131_688)" />
                  <defs>
                    <linearGradient id="paint0_linear_131_688" x1="47.8255" y1="0.383789" x2="47.8255" y2="140.384"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B3A985" />
                      <stop offset="1" stop-color="#B2A985" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
            </div>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col cols="3">
            <div class="how-use__step step">
              <div class="step__ico">
                <img src="../assets/img/icons/how-use/how-us-icon4.png" alt="">
              </div>
              <p class="body-s step__paragraph">AShare your impressions, tips, and ratings to help other Choicie users.
              </p>
              <div class="step__decor"> <svg width="116" height="140" viewBox="0 0 116 140" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2"
                    d="M0 114.581V86.6201L63.1564 0H99.1341V85.4469H115.754V114.581H99.1341V140H65.3073V114.581H0ZM68.0447 38.7151L34.0223 85.4469H68.0447V38.7151Z"
                    fill="url(#paint0_linear_131_700)" />
                  <defs>
                    <linearGradient id="paint0_linear_131_700" x1="57.8771" y1="0" x2="57.8771" y2="140"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#B3A985" />
                      <stop offset="1" stop-color="#B2A985" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="customers">
      <p class="customers__subtitle">We work with cafe and restaurant owners from </p>
      <h2 class="h2 customers__title">All the world</h2>
      <p class="customers__paragraph body-l"> And there will be more! <br>
        Choicie is ready to work internationally. We work with customers in 8 different time zones. </p>
      <img src="../assets/img/map.png" alt="">
    </section>
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
  margin-bottom: 68px;
  background: #2B146C;

  &__img {
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

.video-about {
  margin-bottom: 70px;

  &__title {
    margin: 0;
    margin-bottom: 18px;
  }


}


.about-features {
  margin-bottom: 252px;

  &__first-block {
    margin-bottom: 139px;
  }
}

.about-feature {

  &__first-block {
    color: red;
    margin-bottom: 139px;
  }

  &__paragraph {
    margin: 0;
    margin-bottom: 33px;
    color: var(--body);
    text-align: left;
  }

  &__title {
    color: var(--heading);
    text-align: left;
    margin: 0;
    margin-bottom: 24px;
  }
}

.how-use {
  background: var(--yellow-light);
  padding-top: 120px;
  padding-bottom: 120px;
  margin-bottom: 130px;

  &__decor-line {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      // transform: translate(-50%);
      height: 300px;
      width: 2px;
      background: #E5E0CD;
    }

  }
}

.step {
  position: relative;

  &__ico {
    height: 127px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start
  }

  &__paragraph {
    text-align: left;
  }

  &__decor {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.benefit {
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  &__icon {
    margin-right: 24px;
  }

  &__description {
    text-align: left;
    margin: 0;
  }

  &__btn {
    width: 50%;
  }
}

.customers {
  &__subtitle {
    color: var(--brand-blue);
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-align: center;
    margin: 0;
    margin-bottom: 32px;
  }

  &__title {
    color:black;
    margin: 0;
    margin-bottom: 32px;
  }

  &__paragraph {
    color: #7F7F88;
    margin: 0;
    margin-bottom: 122px;

  }

  margin-bottom: 160px;
}
</style>
