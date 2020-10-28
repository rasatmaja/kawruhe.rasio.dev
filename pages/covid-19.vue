<template>
  <div id="covid" class="overflow-hidden">
    <header class="shadow-md fixed w-full z-50 blur-bg">
      <nav class="flex items-center justify-between flex-wrap mx-auto max-w-screen-xl px-5 lg:px-10 py-3">
        <div id="logo-container" class="font-black text-covid-red-primary-darker flex items-center">
          <img src="~assets/img/covid/virus-color.svg" width="32" height="32" alt="Covid-19" class="mr-3">
          COVID-19
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded border-gray-400" @click="toggleMenu()">
            <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div :class="isMenuCollapse ? 'block' : 'hidden'" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
          <div class="text-sm lg:text-base lg:flex-grow max-w-xl lg:justify-end lg:text-right">
            <a href="#covid-update" class="block mt-4 lg:inline-block lg:mt-0 mr-8 hover:text-covid-red-primary">Cases</a>
            <a href="#covid-about" class="block mt-4 lg:inline-block lg:mt-0 mr-8 hover:text-covid-red-primary">Covid-19</a>
            <a href="#covid-symptoms" class="block mt-4 lg:inline-block lg:mt-0 mr-8 hover:text-covid-red-primary">Symptoms</a>
            <a href="#covid-prevention" class="block mt-4 lg:inline-block lg:mt-0 mr-8 hover:text-covid-red-primary">Preventions</a>
            <a href="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-covid-red-primary">Home</a>
          </div>
        </div>
      </nav>
    </header>
    <div class="main-container">
      <article
        id="covid-main"
        class="p-5 lg:p-10 mt-16 flex flex-col justify-center"
      >
        <div class="lg:flex items-center">
          <div v-scroll-observer:animation-left class="lg:w-1/2 flex flex-col">
            <div class="mx-auto lg:mx-px tittle-clip">
              COVID-19 Alert
            </div>
            <h1 class="text-center lg:text-left">
              Stay at Home
            </h1>
            <h1 class="text-center lg:text-left">
              Stop it from Spreading
            </h1>
            <h2 class="text-center lg:text-left mb-5 max-w-md mx-auto lg:mx-px">
              Coronavirus disease 2019 (COVID-19) is an infectious disease caused
              by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)
            </h2>
          </div>
          <div v-scroll-observer:animation-right class="lg:w-1/2">
            <img
              src="~/assets/img/covid/main-bg.svg"
              alt="disinfectant-illustrations"
              class="mx-auto lg:-mb-16"
              height="100%"
              width="100%"
            >
          </div>
        </div>
        <button v-scroll-observer:animation-left class="primary-button mx-auto lg:mx-px ">
          <a href="#covid-symptoms">Checks Symptoms</a>
        </button>
      </article>
      <article id="covid-update" class="mb-20 p-5 md:p-10 relative">
        <CovidIconAbsolute :probs-top="'-50px'" :probs-left="'0'" :probs-size="'12em'" style="z-index: auto;" />
        <CovidIconAbsolute :probs-bottom="'-180px'" :probs-right="'0'" :probs-size="'14em'" style="z-index: auto;" />
        <CovidIconAbsolute :probs-bottom="'30px'" :probs-right="'0'" :probs-size="'6em'" style="z-index: auto;" />
        <div
          v-scroll-observer:animation-up
          class="covid-update-container p-3 lg:p-8 relative bg-white"
        >
          <div class="toggle">
            <button
              ref="worldwide"
              class="toggle-active px-5 lg:px-10 py-1 rounded-md text-sm md:text-base"
              @click="toggle(true)"
            >
              Worldwide
            </button>
            <button
              ref="indonesia"
              class="px-5 lg:px-10 py-1 rounded-md text-sm md:text-base"
              @click="toggle(false)"
            >
              Indonesia
            </button>
          </div>
          <div class="md:grid grid-cols-3">
            <div class="flex flex-col items-center p-5">
              <CovidLoading v-if="isLoading" />
              <p
                v-else
                class="text-2xl sm:text-3xl font-semibold text-covid-blue-primary"
              >
                {{ cases.confirmed }}
              </p>
              <p>Confirmed cases</p>
            </div>
            <div class="flex flex-col items-center p-5">
              <CovidLoading v-if="isLoading" />
              <p
                v-else
                class="text-2xl sm:text-3xl font-semibold text-covid-green-primary"
              >
                {{ cases.recovered }}
              </p>
              <p>Recovered cases</p>
            </div>
            <div class="flex flex-col items-center p-5">
              <CovidLoading v-if="isLoading" />
              <p
                v-else
                class="text-2xl sm:text-3xl font-semibold text-covid-red-primary"
              >
                {{ cases.deaths }}
              </p>
              <p>Deaths cases</p>
            </div>
          </div>
          <div class="text-center text-sm mt-5 md:mt-0">
            Data update on {{ today }} and provided by
            <span><a
              href="https://kawalcorona.com"
              class="text-covid-red-primary-darker"
            >kawalcorona.com</a></span>
          </div>
          <CovidIconAbsolute :probs-bottom="'-40px'" :probs-left="'-40px'" :probs-size="'8em'" />
          <CovidIconAbsolute :probs-top="'-40px'" :probs-right="'-40px'" :probs-size="'8em'" />
        </div>
      </article>
      <article id="covid-about" class="my-20 p-5 lg:p-10 lg:flex items-center">
        <div
          v-scroll-observer:animation-left
          class="w-2/3 mx-auto lg:w-1/3 mb-5 lg:mb-0 lg:mr-20"
        >
          <img
            src="~/assets/img/covid/about-bg.svg"
            alt="disinfectant-illustrations"
            height="100%"
            width="100%"
          >
        </div>
        <div v-scroll-observer:animation-right class="lg:w-2/3">
          <div class="tittle-clip mx-auto lg:mx-px">
            About COVID-19
          </div>
          <h1 class="text-center lg:text-left">
            What is SARS-CoV-2 ?
          </h1>
          <h2 class="text-center lg:text-left">
            Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) is the
            strain of coronavirus that causes coronavirus disease 2019
            (COVID-19), the respiratory illness responsible for the COVID-19
            pandemic.
          </h2>
          <h2 class="text-center lg:text-left">
            Taxonomically, SARS-CoV-2 is a strain of
            severe acute respiratory syndrome-related coronavirus (SARSr-CoV).
            The virus shows divttle genetic diversity, indicating that the
            spillover event introducing SARS-CoV-2 to humans is divkely to have
            occurred in late 2019.
          </h2>
        </div>
      </article>
      <div class="bg-covid-gray-tint">
        <article
          id="covid-symptoms"
          class="my-20 p-5 lg:p-10 flex flex-col-reverse lg:flex-row items-center relative"
        >
          <div v-scroll-observer:animation-left class="lg:w-1/2 lg:mr-20">
            <div class="mx-auto lg:mx-px tittle-clip">
              COVID-19 Symptoms
            </div>
            <h1 class="text-center lg:text-left">
              What are the symptoms ?
            </h1>
            <h2 class="text-center lg:text-left">
              COVID-19 affects different people in different ways. On average it
              takes 5–6 days from when someone is infected with the virus for
              symptoms to show, however it can take up to 14 days.
            </h2>
            <div class="symptoms-caontainer my-5 grid grid-cols-2">
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >
                Fever
              </div>
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Dry cough
              </div>
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Sore throat
              </div>
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Headache
              </div>
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Tiredness
              </div>
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Loss of taste or smell
              </div>
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Chest Pain
              </div>
              <div class="flex items-center my-1 text-sm lg:text-base">
                <img
                  width="30"
                  height="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Difficulty breathing
              </div>
            </div>
            <h2 class="text-center lg:text-left">
              Seek immediate medical attention if you have serious symptoms.
              Always call before visiting your doctor or health facility.
            </h2>
          </div>
          <div v-scroll-observer:animation-right class="w-2/3 lg:w-1/2">
            <CovidIconAbsolute :probs-top="'0'" :probs-right="'0'" :probs-size="'14em'" />
            <CovidIconAbsolute :probs-top="'10em'" :probs-right="'-2em'" :probs-size="'5em'" />
            <img
              src="~/assets/img/covid/symptom-bg.svg"
              alt="Symptoms-illustrations"
              height="100%"
              width="100%"
            >
          </div>
        </article>
      </div>
      <article
        id="covid-prevention"
        v-scroll-observer:animation-up
        class="mt-20 p-5 lg:p-10 flex flex-col items-center relative"
      >
        <CovidIconAbsolute :probs-bottom="'0'" :probs-left="'0'" :probs-size="'14em'" />
        <CovidIconAbsolute :probs-top="'10em'" :probs-left="'-2em'" :probs-size="'5em'" />

        <CovidIconAbsolute :probs-top="'25%'" :probs-right="'-5vh'" :probs-size="'14em'" />
        <CovidIconAbsolute :probs-bottom="'10em'" :probs-right="'-2em'" :probs-size="'5em'" />
        <div class="tittle-clip">
          COVID-19 Prevention
        </div>
        <h1 class="text-center">
          How can we protect ourself from COVID-19
        </h1>
        <h2 class="text-center max-w-4xl">
          To protect yourself and others against COVID-19, clean your hands
          frequently and thoroughly. Use alcohol-based hand sanitizer or wash
          your hands with soap and water. If you use an alcohol-based hand
          sanitizer, make sure you use and store it carefully.
        </h2>
        <div class="prevention-container grid-cols-1 lg:grid-cols-2">
          <div class="prevention-items">
            <img
              width="60"
              height="60"
              src="~assets/img/covid/wash-hand.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div class="text-sm lg:text-base text-center lg:text-left">
              <p
                class="font-semibold text-base lg:text-lg text-center lg:text-left"
              >
                Wash your hands
              </p>
              Wash your hand using soap and running water
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              height="60"
              src="~assets/img/covid/masker.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div class="text-sm lg:text-base text-center lg:text-left">
              <p
                class="font-semibold text-base lg:text-lg text-center lg:text-left"
              >
                Wear a mask
              </p>
              Always use mask if you not in your home
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              height="60"
              src="~assets/img/covid/social-distancing.svg"
              alt="social distancing illustrations"
              class="mr-2"
            >
            <div class="text-sm lg:text-base text-center lg:text-left">
              <p
                class="font-semibold text-base lg:text-lg text-center lg:text-left"
              >
                Social distancing
              </p>
              Maintain at least 1 metre (3 feet) distance between yourself and
              others.
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              height="60"
              src="~assets/img/covid/travel.svg"
              alt="travel illustrations"
              class="mr-2"
            >
            <div class="text-sm lg:text-base text-center lg:text-left">
              <p
                class="font-semibold text-base lg:text-lg text-center lg:text-left"
              >
                Avoid travel
              </p>
              Avoid going to Travel. You are more likely to come into close
              contact with COVID-19
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              height="60"
              src="~assets/img/covid/quarantine.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div class="text-sm lg:text-base text-center lg:text-left">
              <p
                class="font-semibold text-base lg:text-lg text-center lg:text-left"
              >
                Quarantine
              </p>
              Quarantine helps prevent spread of disease that can occur before a
              person knows they are sick
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              height="60"
              src="~assets/img/covid/doctor.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div class="text-sm lg:text-base text-center lg:text-left">
              <p
                class="font-semibold text-base lg:text-lg text-center lg:text-left"
              >
                Seek medical care
              </p>
              Seek immediate medical attention if you have serious symptoms.
            </div>
          </div>
        </div>
      </article>
      <article
        id="covid-contact"
        v-scroll-observer:animation-up
        class="p-5 lg:p-10 -mb-40 relative z-10"
      >
        <CovidIconAbsolute :probs-top="'-30px'" :probs-right="'2vh'" :probs-size="'14em'" />
        <div
          class="relative covid-contact-container flex flex-col items-center px-8 py-8 bg-white"
        >
          <h1 class="text-center">
            Need help about COVID-19?
          </h1>
          <h2 class="text-center max-w-xl">
            If you need information or seek a medical help on Indonesia area,
            contact this Indonesian COVID-19 Hotline on 119.
          </h2>
          <h2 class="text-center max-w-xl font-bold">
            Every live is matter
          </h2>
          <button class="primary-button mt-5">
            <a href="tel:119">Call 119</a>
          </button>
          <CovidIconAbsolute :probs-bottom="'-30px'" :probs-left="'-40px'" :probs-size="'8em'" style="z-index: auto;" />
          <CovidIconAbsolute :probs-bottom="'-30px'" :probs-right="'-40px'" :probs-size="'8em'" style="z-index: auto;" />
        </div>
      </article>
      <div
        id="footer"
        class="bg-covid-blue-darken relative h-64 flex flex-col justify-end"
      >
        <div class="text-white text-center p-5 text-xs lg:text-sm">
          <div class="social-media-grid flex w-56 mx-auto justify-around mb-3">
            <a href="https://www.instagram.com/rasatmaja/">
              <img src="~assets/icons/instagram.svg" width="24" height="24" alt="Instagram">
            </a>
            <a href="https://twitter.com/rasatmaja">
              <img src="~assets/icons/twitter.svg" width="24" height="24" alt="Twitter Icon">
            </a>
            <a href="https://github.com/rasatmaja">
              <img src="~assets/icons/github.svg" width="24" height="24" alt="Github Icon">
            </a>
            <a href="mailto:contact@rasio.dev">
              <img src="~assets/icons/email.svg" width="24" height="24" alt="Email Icon">
            </a>
          </div>
          Made with ❤️ by Rasio Atmaja. Powered by Vercel. Build with NuxtJS
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "~assets/css/covid/styles.css";
</style>

<script>
export default {
  data () {
    return {
      today: new Date().toLocaleDateString(),
      cases: {},

      isMenuCollapse: false
    }
  },
  computed: {
    isLoading () {
      return this.$store.getters['covid/isLoading']
    }
  },
  mounted () {
    this.$store.dispatch('covid/fetchWorlwideCase')
    this.$store.dispatch('covid/fetchIndonesiaCase')

    this.toggle()
  },
  methods: {
    toggle (isWorldwide = true) {
      const defaultClass = 'px-5 lg:px-10 py-1 rounded-md text-sm md:text-base '
      if (isWorldwide) {
        this.$refs.worldwide.className = defaultClass + 'toggle-active'
        this.$refs.indonesia.className = defaultClass

        this.cases = this.$store.getters['covid/getWorldwideData']
      } else {
        this.$refs.indonesia.className = defaultClass + 'toggle-active'
        this.$refs.worldwide.className = defaultClass

        this.cases = this.$store.getters['covid/getIndonesiaData']
      }
    },
    toggleMenu () {
      this.isMenuCollapse = !this.isMenuCollapse
    }
  },
  head () {
    return {
      title: 'COVID-19 by Kawruhe',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/covid/favicon.png'
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)'
        },
        {
          property: 'og:tittle',
          content: 'Covid-19 basic information by kawruhe'
        },
        {
          property: 'og:description',
          content: 'Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)'
        },
        {
          property: 'og:image',
          content: 'https://kawruhe.rasio.dev/covid/meta/meta-og-image.webp'
        },
        {
          property: 'og:url',
          content: 'https://kawruhe.rasio.dev/'
        },
        {
          name: 'twitter:tittle',
          content: 'Covid-19 basic information by kawruhe'
        },
        {
          name: 'twitter:description',
          content: 'Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)'
        },
        {
          name: 'twitter:image',
          content: 'https://kawruhe.rasio.dev/covid/meta/meta-og-image.webp'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@rasatmaja'
        }
      ]
    }
  }
}
</script>
