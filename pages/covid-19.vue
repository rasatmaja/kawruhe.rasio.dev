<template>
  <div id="covid">
    <div class="main-container">
      <article id="covid- main" class="flex items-center p-10">
        <div class="w-1/2">
          <div class="tittle-clip">
            COVID-19 Alert
          </div>
          <h1>Stay at Home</h1>
          <h1>Stop it from Spreading</h1>
          <h2>
            Coronavirus disease 2019 (COVID-19) is an infectious disease caused
            by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)
          </h2>
          <button class="primary-button">
            <a href="#covid-symptoms">Checks Symptoms</a>
          </button>
        </div>
        <div class="w-1/2">
          <img
            src="~/assets/img/covid/main-bg.svg"
            alt="disinfectant-illustrations"
          >
        </div>
      </article>
      <article id="covid-update" class="mt-10 mb-20 p-10">
        <div class="covid-update-container px-8 py-8 relative">
          <div class="toggle">
            <button ref="worldwide" class="toggle-active px-10 py-1 rounded-md" @click="toggle(true)">
              Worldwide
            </button>
            <button ref="indonesia" class="px-10 py-1 rounded-md" @click="toggle(false)">
              Indonesia
            </button>
          </div>
          <div class="grid grid-cols-3">
            <div class="flex flex-col items-center p-5">
              <p class="text-3xl font-semibold text-covid-blue-primary">
                {{ confirmed }}
              </p>
              <p>Confirmed cases</p>
            </div>
            <div class="flex flex-col items-center p-5">
              <p class="text-3xl font-semibold text-covid-green-primary">
                {{ recovered }}
              </p>
              <p>Recovered cases</p>
            </div>
            <div class="flex flex-col items-center p-5">
              <p class="text-3xl font-semibold text-covid-red-primary">
                {{ deaths }}
              </p>
              <p>Deaths cases</p>
            </div>
          </div>
          <div class="text-center text-sm">
            Data update on 5 October 2020 and provided by
            <span><a
              href="https://kawalcorona.com"
              class="text-covid-red-primary"
            >kawalcorona.com</a></span>
          </div>
          <img
            width="80"
            src="~/assets/img/covid/virus.svg"
            alt="virus-illustrations"
            class="absolute left-0 bottom-auto"
          >
        </div>
      </article>
      <article id="covid-about" class="my-20 p-10 flex items-center">
        <div class="w-1/3 mr-20">
          <img
            src="~/assets/img/covid/about-bg.svg"
            alt="disinfectant-illustrations"
          >
        </div>
        <div class="w-2/3">
          <div class="tittle-clip">
            About COVID-19
          </div>
          <h1>What is SARS-CoV-2 ?</h1>
          <h2>
            Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) is the
            strain of coronavirus that causes coronavirus disease 2019
            (COVID-19), the respiratory illness responsible for the COVID-19
            pandemic. Colloquially known as simply the coronavirus, it was
            previously referred to by its provisional name, 2019 novel
            coronavirus (2019-nCoV), and has also been called human coronavirus
            2019 (HCoV-19 or hCoV-19). Taxonomically, SARS-CoV-2 is a strain of
            severe acute respiratory syndrome-related coronavirus (SARSr-CoV).
            The virus shows divttle genetic diversity, indicating that the
            spillover event introducing SARS-CoV-2 to humans is divkely to have
            occurred in late 2019.
          </h2>
        </div>
      </article>
      <div class="bg-covid-gray-tint">
        <article id="covid-symptoms" class="my-20 p-10 flex items-center">
          <div class="w-1/2 mr-20">
            <div class="tittle-clip">
              COVID-19 Symptoms
            </div>
            <h1>What are the symptoms ?</h1>
            <h2>
              COVID-19 affects different people in different ways. On average it
              takes 5–6 days from when someone is infected with the virus for
              symptoms to show, however it can take up to 14 days.
            </h2>
            <div class="symptoms-caontainer my-5 grid grid-cols-2">
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >
                Fever
              </div>
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Dry cough
              </div>
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Sore throat
              </div>
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Headache
              </div>
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Tiredness
              </div>
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Loss of taste or smell
              </div>
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Chest Pain or presure
              </div>
              <div class="flex items-center my-1">
                <img
                  width="30"
                  src="~assets/icons/check.svg"
                  alt="check-icon"
                  class="mr-1"
                >Difficulty breathing
              </div>
            </div>
            <h2>
              Seek immediate medical attention if you have serious symptoms.
              Always call before visiting your doctor or health facility.
            </h2>
          </div>
          <div class="w-1/2">
            <img
              src="~/assets/img/covid/symptom-bg.svg"
              alt="disinfectant-illustrations"
            >
          </div>
        </article>
      </div>
      <article
        id="covid-prevention"
        class="mt-20 mb-32 p-10 flex flex-col items-center"
      >
        <div class="tittle-clip">
          COVID-19 Prevention
        </div>
        <h1>How can we protect ourself from COVID-19</h1>
        <h2 class="text-center">
          To protect yourself and others against COVID-19, clean your hands
          frequently and thoroughly. Use alcohol-based hand sanitizer or wash
          your hands with soap and water. If you use an alcohol-based hand
          sanitizer, make sure you use and store it carefully.
        </h2>
        <div class="prevention-container">
          <div class="prevention-items">
            <img
              width="60"
              src="~assets/img/covid/wash-hand.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div>
              <p class="font-semibold text-lg">
                Wash your hands
              </p>
              Wash your hand using soap and running water
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              src="~assets/img/covid/masker.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div>
              <p class="font-semibold text-lg">
                Wear a mask
              </p>
              Always use mask if you not in your home
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              src="~assets/img/covid/social-distancing.svg"
              alt="social distancing illustrations"
              class="mr-2"
            >
            <div>
              <p class="font-semibold text-lg">
                Social distancing
              </p>
              Maintain at least 1 metre (3 feet) distance between yourself and
              others.
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              src="~assets/img/covid/travel.svg"
              alt="travel illustrations"
              class="mr-2"
            >
            <div>
              <p class="font-semibold text-lg">
                Avoid travel
              </p>
              Avoid going to Travel. You are more likely to come into close
              contact with COVID-19
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              src="~assets/img/covid/quarantine.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div>
              <p class="font-semibold text-lg">
                Quarantine
              </p>
              Quarantine helps prevent spread of disease that can occur before a
              person knows they are sick
            </div>
          </div>
          <div class="prevention-items">
            <img
              width="60"
              src="~assets/img/covid/doctor.svg"
              alt="wash illustrations"
              class="mr-2"
            >
            <div>
              <p class="font-semibold text-lg">
                Seek medical care
              </p>
              Seek immediate medical attention if you have serious symptoms.
            </div>
          </div>
        </div>
      </article>
      <div class="bg-covid-blue-darken relative h-64">
        <article id="covid-contact" class="p-10">
          <div
            class="relative covid-contact-container flex flex-col items-center px-8 py-8 bg-white"
          >
            <h1>Need help about COVID-19?</h1>
            <h2 class="text-center max-w-xl">
              If you need information or seek a medical help on Indonesia area,
              contact this Indonesian COVID-19 Hotline on 119. -- Every live is
              matter --
            </h2>
            <button class="primary-button">
              <a href="">Call 119</a>
            </button>
            <img
              width="80"
              src="~/assets/img/covid/virus.svg"
              alt="virus-illustrations"
              class="absolute bottom-0 left-0"
            >
          </div>
        </article>
        <div id="footer" class="text-white text-center p-5">
          <div class="social-media-grid flex w-56 mx-auto justify-around mb-3">
            <a href="">
              <img src="~assets/icons/instagram.svg" alt="Instagram">
            </a>
            <a href="">
              <img src="~assets/icons/twitter.svg" alt="Twitter Icon">
            </a>
            <a href="">
              <img src="~assets/icons/github.svg" alt="Github Icon">
            </a>
            <a href="">
              <img src="~assets/icons/email.svg" alt="Email Icon">
            </a>
          </div>
          Made with ❤️ by Rasio Atmaja. Powered by Vercel. Build with NuxtJS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      confirmed: '',
      recovered: '',
      deaths: ''
    }
  },
  mounted () {
    this.getCovidData()
  },
  methods: {
    async getCovidData (isWorldwide = true) {
      if (isWorldwide) {
        const confrimed = await this.$store.dispatch('getConfirmedCase')
        this.confirmed = confrimed.data.value

        const recovered = await this.$store.dispatch('getRecoveredCase')
        this.recovered = recovered.data.value

        const deaths = await this.$store.dispatch('getDeathsCase')
        this.deaths = deaths.data.value
      } else {
        const res = await this.$store.dispatch('getIndonesiaCase')
        this.confirmed = res.data[0].positif
        this.recovered = res.data[0].sembuh
        this.deaths = res.data[0].meninggal
      }
    },
    toggle (isWorldwide = true) {
      const defaultClass = 'px-10 py-1 rounded-md '
      if (isWorldwide) {
        this.$refs.worldwide.className = defaultClass + 'toggle-active'
        this.$refs.indonesia.className = defaultClass
        this.getCovidData(true)
      } else {
        this.$refs.indonesia.className = defaultClass + 'toggle-active'
        this.$refs.worldwide.className = defaultClass
        this.getCovidData(false)
      }
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
        }
      ]
    }
  }
}
</script>
