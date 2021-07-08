<template>
  <div>
    <!-- Section 1 -->
    <header class="bg-gray-50">
      <div class="container px-6 pt-8 pb-16 mx-auto lg:w-5/6">
        <div class="items-center md:flex">
          <div class="w-full md:w-1/2">
            <div class="max-w-lg">
              <h1 class="text-5xl font-semibold text-gray-800 dark:text-white">
                Expande el alcance de tu negocio o proyecto
              </h1>
              <p class="my-4 text-gray-600 dark:text-gray-400 text-xl">
                Impulsa tus prospectos al siguiente nivel con lo mejor en
                tecnología web, diseño y marketing.
              </p>
              <button
                class="
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-white
                  rounded-md
                  bg-gray-900
                "
              >
                Empieza aquí
              </button>
            </div>
          </div>

          <div
            class="
              flex
              items-center
              justify-center
              w-full
              mt-6
              md:mt-0 md:w-1/2
            "
          >
            <nuxt-img
              class="w-full h-full max-w-2xl"
              format="webp"
              src="/images/058-hiker-man-monochrome.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
    <div
      class="
        px-6
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div class="flex flex-col justify-center">
          <div class="max-w-xl mb-6">
            <h2
              class="
                max-w-lg
                mb-6
                font-sans
                text-4xl
                font-bold
                tracking-tight
                text-gray-900
                sm:leading-none
              "
            >
              Aumenta tus cifras<br class="hidden md:block" />
              y tu tiempo libre
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              Mejoramos o creamos tu imagen gráfica estableciendo una firme
              presencia en línea, mientras inviertes tu tiempo en lo que te
              gusta.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            class="
              inline-flex
              items-center
              font-semibold
              transition-colors
              duration-200
              text-deep-purple-accent-400
              hover:text-deep-purple-800
            "
          >
            Learn more
            <svg
              class="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path
                d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
              ></path>
            </svg>
          </a>
        </div>
        <div class="relative">
          <svg
            class="absolute w-full text-gray-500"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="211" width="75" height="181" rx="8"></rect>
            <rect x="525" y="260" width="75" height="132" rx="8"></rect>
            <rect x="105" y="83" width="75" height="309" rx="8"></rect>
            <rect x="210" y="155" width="75" height="237" rx="8"></rect>
            <rect x="420" y="129" width="75" height="263" rx="8"></rect>
            <rect x="315" y="0" width="75" height="392" rx="8"></rect>
          </svg>
          <svg
            class="relative w-full text-gray-900"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="311" width="75" height="81" rx="8"></rect>
            <rect x="525" y="351" width="75" height="41" rx="8"></rect>
            <rect x="105" y="176" width="75" height="216" rx="8"></rect>
            <rect x="210" y="237" width="75" height="155" rx="8"></rect>
            <rect x="420" y="205" width="75" height="187" rx="8"></rect>
            <rect x="315" y="83" width="75" height="309" rx="8"></rect>
          </svg>
        </div>
      </div>
    </div>

    <!-- Section 1 -->
    <section class="py-20 bg-gray-50">
      <div
        class="
          container
          items-center
          max-w-6xl
          px-6
          mx-auto
          sm:px-20
          md:px-32
          lg:px-16
        "
      >
        <div class="flex flex-wrap items-center -mx-3">
          <div class="w-full mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <nuxt-img
              class="mx-auto sm:max-w-sm lg:max-w-full"
              src="/images/026-drawkit-server-woman-monochrome.svg"
              format="webp"
              alt="feature image"
            />
          </div>
          <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div class="w-full lg:max-w-md">
              <h2
                class="
                  mb-4
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  sm:text-4xl
                  font-heading
                "
              >
                Justo lo que necesitas para lograrlo
              </h2>
              <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                Con lo mejor en tecnología y tendencias de diseño manetenemos
                las cosas simples y concisas, logrando el impacto necesario en
                tus clientes.
              </p>
              <ul>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-black-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500"
                    >Tecnología de punta, actual, eficiente y veloz</span
                  >
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-black-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500"
                    >No te muevas de donde estás, todo lo hacemos remoto</span
                  >
                </li>
                <li class="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="w-8 h-8 text-black-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span class="font-medium text-gray-500"
                    >Garantía de los productos al 100%</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Features-->
    <div
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div class="lg:w-1/2">
          <h2
            class="
              max-w-md
              mb-6
              font-sans
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl sm:leading-none
              xl:max-w-lg
            "
          >
            Variedad que se ajusta a tus necesidades
          </h2>
        </div>
        <div class="lg:w-1/2">
          <p class="text-base text-gray-700 md:text-lg">
            De lo digital a lo real, tenemos el software y hardware que
            necesitas para proteger y eficientar tu negocio, casa u oficina
          </p>
        </div>
      </div>
      <div class="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mb-4
              rounded-full
              bg-indigo-50
            "
          >
            <svg
              class="w-7 h-7 text-deep-purple-accent-400"
              stroke-linecap="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="11"
                cy="13"
                fill="none"
                r="9"
                stroke="currentColor"
              ></circle>
              <path
                d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                stroke="currentColor"
                fill="none"
              ></path>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">Web</h6>
          <p class="mb-3 text-sm text-gray-900">
            La herramienta más podersa al alcance de los humanos, forma parte
            del internet.
          </p>
          <ul class="mb-4 -ml-1 space-y-2">
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Sitios Web
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Redes Sociales
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Campañas
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            class="
              inline-flex
              items-center
              font-semibold
              transition-colors
              duration-200
              text-deep-purple-accent-400
              hover:text-deep-purple-800
            "
            >Conoce más</a
          >
        </div>
        <div>
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mb-4
              rounded-full
              bg-indigo-50
            "
          >
            <svg
              class="w-7 h-7 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              stroke-linecap="round"
            >
              <path
                d="M2,10C2,5.029,6.47,1,12,1c5.379,0,10,4.029,10,9S15.712,23,12,23C8.212,23,2,14.971,2,10Z"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
              ></path>
              <path
                d="M5,9a6.529,6.529,0,0,1,4.393,1.607C10.705,11.92,10,15,10,15a6.59,6.59,0,0,1-3.436-1.564C5.022,11.894,5,9,5,9Z"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
              ></path>
              <path
                d="M19,9a6.523,6.523,0,0,0-4.392,1.608C13.3,11.92,14,15,14,15a6.59,6.59,0,0,0,3.436-1.564C18.978,11.894,19,9,19,9Z"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">Multimedia</h6>
          <p class="mb-3 text-sm text-gray-900">
            Logramos contenido audiovisual que mejora tu imagen o campaña.
          </p>
          <ul class="mb-4 -ml-1 space-y-2">
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Diseño Gráfico
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Video
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Imagen
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            class="
              inline-flex
              items-center
              font-semibold
              transition-colors
              duration-200
              text-deep-purple-accent-400
              hover:text-deep-purple-800
            "
            >Conoce más</a
          >
        </div>
        <div>
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mb-4
              rounded-full
              bg-indigo-50
            "
          >
            <svg
              class="w-7 h-7 text-deep-purple-accent-400"
              stroke-linecap="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
                fill="none"
                stroke="currentColor"
              ></path>
              <ellipse
                cx="19.078"
                cy="4.922"
                fill="none"
                rx="2.5"
                ry="4.95"
                stroke="currentColor"
                transform="translate(2.107 14.932) rotate(-45)"
              ></ellipse>
              <path
                d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
                fill="none"
                stroke="currentColor"
              ></path>
              <path
                d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
                fill="none"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">Tecnología</h6>
          <p class="mb-3 text-sm text-gray-900">
            Conseguimos el hardware y lo instalamos, seguridad y comodidad donde
            sea.
          </p>
          <ul class="mb-4 -ml-1 space-y-2">
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Domótica
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Seguridad
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Computación
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            class="
              inline-flex
              items-center
              font-semibold
              transition-colors
              duration-200
              text-deep-purple-accent-400
              hover:text-deep-purple-800
            "
            >Learn more</a
          >
        </div>
        <div>
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mb-4
              rounded-full
              bg-indigo-50
            "
          >
            <svg
              class="w-7 h-7 text-deep-purple-accent-400"
              stroke-linecap="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
                fill="none"
                stroke="currentColor"
              ></path>
              <polyline
                fill="none"
                points="10 11 10 6 6 2 3 5 7 9"
                stroke="currentColor"
              ></polyline>
              <polyline
                fill="none"
                points="15 12 15 17 19 21 22 18 18 14"
                stroke="currentColor"
              ></polyline>
              <path
                d="M8,23a7,7,0,0,1-7-7"
                fill="none"
                stroke="currentColor"
              ></path>
              <path
                d="M8,19a3,3,0,0,1-3-3"
                fill="none"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <h6 class="mb-2 font-semibold leading-5">First contact</h6>
          <p class="mb-3 text-sm text-gray-900">
            For those who have seen the Earth from space or in dreams.
          </p>
          <ul class="mb-4 -ml-1 space-y-2">
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Listen
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Communicate
            </li>
            <li class="flex items-start">
              <span class="mr-1">
                <svg
                  class="w-5 h-5 mt-px text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  ></polygon>
                </svg>
              </span>
              Run
            </li>
          </ul>
          <a
            href="/"
            aria-label=""
            class="
              inline-flex
              items-center
              font-semibold
              transition-colors
              duration-200
              text-deep-purple-accent-400
              hover:text-deep-purple-800
            "
            >Learn more</a
          >
        </div>
      </div>
    </div>

    <!-- Section 1 -->
    <section
      class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24"
    >
      <div class="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
        <div
          class="
            flex flex-col
            items-start
            leading-7
            text-gray-900
            border-0 border-gray-200
            lg:items-center lg:flex-row
          "
        >
          <div class="box-border flex-1 text-center border-solid sm:text-left">
            <h2
              class="
                m-0
                text-4xl
                font-semibold
                leading-tight
                tracking-tight
                text-left text-black
                border-0 border-gray-200
                sm:text-5xl
              "
            >
              Encuentra lo que necesitas
            </h2>
            <p
              class="
                mt-2
                text-xl text-left text-gray-900
                border-0 border-gray-200
                sm:text-2xl
              "
            >
              Llámanos o manda un mensaje por alguno de nuestros medios y con
              gusto te atenderemos
            </p>
          </div>
          <a
            href="#_"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-5
              py-4
              mt-6
              ml-0
              font-sans
              text-base
              leading-none
              text-white
              no-underline
              bg-indigo-600
              border border-indigo-600 border-solid
              rounded
              cursor-pointer
              md:w-auto
              lg:mt-0
              hover:bg-indigo-700 hover:border-indigo-700 hover:text-white
              focus-within:bg-indigo-700
              focus-within:border-indigo-700
              focus-within:text-white
              sm:text-lg
              lg:ml-6
              md:text-xl
            "
          >
            ¡Empieza!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
