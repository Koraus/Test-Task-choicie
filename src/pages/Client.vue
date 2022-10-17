<template>
  <div class="client">
    <header class="header client__header">
      <nav-bar :colorMode="'dark'" class="client__nav-bar"></nav-bar>
      <b-container fluid="xl">
        <b-row>
          <b-col cols="5" :align-self="'start'">
            <h1 class="header__title">Choicie: more clients, easier communication</h1>
            <p class="header__paragraph">Choicie is very familiar with the feeling of being an alien in another country
              (he is actually an alien). So Choicie decided to help people with the same problem to get rid of it and
              also improve cafes and restaurants.</p>
            <a class="header__link" href="#">Watch Choicie in action — 2 min</a>
          </b-col>
          <b-col cols="2"> </b-col>
          <b-col cols="5"> <img src="../assets/img/client/header-photo.png" alt="">
            <div class="header__q"> </div>
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
           <!--
          <b-col cols="2"> <img src="../assets/img/client/header-logos-1.svg" alt="" class="logos-board__logo"> </b-col>
          <b-col cols="2"> <img src="../assets/img/client/header-logos-2.svg" alt="" class="logos-board__logo"> </b-col>
          <b-col cols="2"> <img src="../assets/img/client/header-logos-3.svg" alt="" class="logos-board__logo"></b-col>
          <b-col cols="3">
            <img src="../assets/img/client/header-logos-4.svg" alt="" class="logos-board__logo">
            <img src="../assets/img/client/header-logos-5.svg" alt="" class="logos-board__logo">
          </b-col> -->

          
          <b-col cols="9" class="logos-board__logos">

            <img src="../assets/img/client/header-logos-1.svg" alt="" class="logos-board__logo">
            <img src="../assets/img/client/header-logos-2.svg" alt="" class="logos-board__logo">
            <img src="../assets/img/client/header-logos-3.svg" alt="" class="logos-board__logo">
            <img src="../assets/img/client/header-logos-4.svg" alt="" class="logos-board__logo">
            <img src="../assets/img/client/header-logos-5.svg" alt="" class="logos-board__logo">
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="performance">
      <p class="performance__subtitle">Dashboard Performance</p>
      <h2 class="h2 performance__title">Manage your menu so your customers’ll like it</h2>
      <p class="performance__paragraph body-l"> We created an advanced dashboard. You can see: it’s very easy to
        implement our product. </p>
      <b-container fluid="xl">
        <b-row>
          <b-col cols="6" id="test">
            <div class="performance__img-block img-block ">
              <div class="img-block__text-block">
                <h3 class="img-block__title h2">Creation of a Restaurant menu </h3>
                <p class="img-block__paragraph">Upload your cafe or restaurant menu to the app. Choicie will
                  automatically translate it into the users’ native language and add food photos. </p>
              </div>
              <img src="../assets/img/client/img-block-1.svg" alt="" class="img-block__img">
            </div>
          </b-col>
          <b-col cols="6">
            <div class="performance__img-block img-block img-block--yellow">
              <div class="img-block__text-block">
                <h3 class="img-block__title h2">The biggest feedback from your customers </h3>
                <p class="img-block__paragraph">Rating on the waiter’s work and speed of service, review of the
                  cleanliness of the place and the taste of the food — all the feedback is available in one place.
                </p>
              </div>
              <img src="../assets/img/client/img-block-2.svg" alt="" class="img-block__img">
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="growth-drivers">
      <b-container flued="xl">
        <b-row>
          <b-col cols="8">
            <h2 class="h2 growth-drivers__title"> Choicie for cafes and restaurants.
              Five growth drivers for your development</h2>
            <p class="growth-drivers__paragraph">Choicie helps you analyze user actions and improve your cafe or
              restaurant.</p>
          </b-col>
        </b-row>

        <b-row :alignH="'between'">
          <b-col cols="8">
            <div class="growth-driver growth-drivers__growth-driver">
              <img src="../assets/img/client/growth-driver-01-l.png" alt="" class="growth-driver__icon">
              <p class="growth-driver__name body-m--s">Quality of Service </p>
            </div>
            <div class="growth-driver growth-drivers__growth-driver">
              <img src="../assets/img/client/growth-driver-02-l.png" alt="" class="growth-driver__icon">
              <p class="growth-driver__name body-m--s">Reputation and promotion on the web</p>
            </div>
            <div class="growth-driver growth-drivers__growth-driver">
              <img src="../assets/img/client/growth-driver-03-l.png" alt="" class="growth-driver__icon">
              <p class="growth-driver__name body-m--s">Visibility </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="8">
            <div class="growth-driver growth-drivers__growth-driver">
              <img src="../assets/img/client/growth-driver-04-l.png" alt="" class="growth-driver__icon">
              <p class="growth-driver__name body-m--s">Number of orders </p>
            </div>
            <div class="growth-driver growth-drivers__growth-driver">
              <img src="../assets/img/client/growth-driver-05-l.png" alt="" class="growth-driver__icon">
              <p class="growth-driver__name body-m--s">Convenience of work with clients </p>
            </div>
          </b-col>

        </b-row>
        <b-row>
          <b-col cols="4" class="growth-drivers__row2">
            <h3 class="h3 growth-drivers__btn-title"> What Does it Take?</h3>
            <vue-button class="growth-drivers__btn">Become a Choicie partner!</vue-button>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import VueButton from "../components/UI/VueButton.vue";
export default {
  components: { NavBar, VueButton }
}
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
  background: #F4F0FF;

  &__title {
    text-align: left;

  }

  &__paragraph {
    text-align: left;
  }

  &__link {
    text-decoration: none;
    text-align: left;
  }

}

.logos-board {
  background: var(--blue-dark);
  padding-top: 42px;
  padding-bottom: 38px;
  margin-bottom: 120px;

  &__text {
    display: flex;
    font-family: 'Poppins';
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
    justify-content: flex-end;

    & img:last-child {
      margin-right: 0;
    }
  }

  &__logo {
    width: 100%;
    // margin-right: 50px;
  }
}

.img-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 570px;
  height: 640px;
  background: #E1EFFF;
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
    font-family: 'Poppins';
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
  background: #F9F5E6;

}

.performance {
  padding-bottom: 160px;

  &__subtitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #3B2186;
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
  background-image: url('../assets/img/client/growth-drivers-bg.png');
  background-repeat: no-repeat;
  padding-bottom: 473px;

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

  &__growth-driver {}
}

.growth-driver {
  display: inline-flex;
  align-items: center;

  &__icon {
    margin-right: 24px;
  }

  &__name {
    margin: 0;
    color: var(--heading);
  }


}
</style>