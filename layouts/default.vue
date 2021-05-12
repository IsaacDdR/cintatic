<template>
  <div class="bg-gray-50">
    <div class="bg-gray-900">
      <div
        class="
          px-4
          py-6
          mx-auto
          lg:py-8
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8
        "
      >
        <div
          class="
            relative
            flex
            items-center
            justify-between
            lg:justify-center
            lg:space-x-16
          "
        >
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NuxtLink
                to="/nosotros"
                aria-label="Nosotros"
                title="Nosotros"
                class="
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Nosotros</NuxtLink
              >
              >
            </li>
            <li>
              <a
                href="/servicios"
                aria-label="Our product"
                title="Our product"
                class="
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Servicios</a
              >
            </li>
          </ul>
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <nuxt-img width="120" src="/cintatic-logo-white.png" />
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Sign in"
                title="Sign in"
                class="
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Conoce</a
              >
            </li>
            <li>
              <a
                href="/"
                aria-label="Sign up"
                title="Sign up"
                class="
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-200
                  hover:text-teal-accent-400
                "
                >Cotiza</a
              >
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="
                p-2
                -mr-1
                transition
                duration-200
                rounded
                focus:outline-none
                focus:shadow-outline
              "
              @click="isMenuOpen = true"
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
            <!--Mobile menu -->
            <div v-if="isMenuOpen" class="absolute z-10 top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <svg
                        class="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12"></rect>
                        <rect x="3" y="17" width="7" height="6"></rect>
                        <rect x="14" y="1" width="7" height="6"></rect>
                        <rect x="14" y="11" width="7" height="12"></rect>
                      </svg>
                      <span
                        class="
                          ml-2
                          text-xl
                          font-bold
                          tracking-wide
                          text-gray-800
                          uppercase
                        "
                        >Company</span
                      >
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="
                        p-2
                        -mt-2
                        -mr-2
                        transition
                        duration-200
                        rounded
                        hover:bg-gray-200
                        focus:bg-gray-200
                        focus:outline-none
                        focus:shadow-outline
                      "
                      @click="isMenuOpen = false"
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <NuxtLink
                        to="/nosotros"
                        aria-label="Our product"
                        title="Our product"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Nosotros</NuxtLink
                      >
                    </li>
                    <li>
                      <NuxtLink
                        to="/servicios"
                        aria-label="Our product"
                        title="Our product"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Servicios</NuxtLink
                      >
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Pricing</a
                      >
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >About us</a
                      >
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Sign in"
                        title="Sign in"
                        class="
                          font-medium
                          tracking-wide
                          text-gray-700
                          transition-colors
                          duration-200
                          hover:text-deep-purple-accent-400
                        "
                        >Sign in</a
                      >
                    </li>
                    <li>
                      <a
                        href="/"
                        class="
                          inline-flex
                          items-center
                          justify-center
                          w-full
                          h-12
                          px-6
                          font-medium
                          tracking-wide
                          text-white
                          transition
                          duration-200
                          rounded
                          shadow-md
                          bg-deep-purple-accent-400
                          hover:bg-deep-purple-accent-700
                          focus:shadow-outline
                          focus:outline-none
                        "
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Sign up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-4
              text-gray-900
            "
          >
            Contact Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2 focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2 focus:ring-indigo-200
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    leading-8
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600"
                  >Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  class="
                    w-full
                    bg-gray-100 bg-opacity-50
                    rounded
                    border border-gray-300
                    focus:border-indigo-500
                    focus:bg-white
                    focus:ring-2 focus:ring-indigo-200
                    h-32
                    text-base
                    outline-none
                    text-gray-700
                    py-1
                    px-3
                    resize-none
                    leading-6
                    transition-colors
                    duration-200
                    ease-in-out
                  "
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                class="
                  flex
                  mx-auto
                  text-white
                  bg-indigo-500
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  hover:bg-indigo-600
                  rounded
                  text-lg
                "
              >
                Button
              </button>
            </div>
            <div
              class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
            >
              <a class="text-indigo-500">example@email.com</a>
              <p class="leading-normal my-5">
                49 Smith St. <br />Saint Cloud, MN 56301
              </p>
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                    ></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-gray-900">
      <div
        class="
          px-4
          pt-16
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8
        "
      >
        <div class="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div
            class="
              grid grid-cols-2
              gap-5
              row-gap-8
              lg:col-span-4
              md:grid-cols-4
            "
          >
            <div>
              <p class="font-medium tracking-wide text-gray-300">Category</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >News</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >World</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Games</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >References</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class="font-medium tracking-wide text-gray-300">Apples</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Web</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >eCommerce</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Business</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Entertainment</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Portfolio</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Media</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Brochure</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Nonprofit</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Educational</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Projects</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <p class="font-medium tracking-wide text-gray-300">Business</p>
              <ul class="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Infopreneur</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Personal</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Wiki</a
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="
                      text-gray-500
                      transition-colors
                      duration-300
                      hover:text-deep-purple-accent-200
                    "
                    >Forum</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:max-w-md lg:col-span-2">
            <span class="text-base font-medium tracking-wide text-gray-300"
              >Subscribe for updates</span
            >
            <form class="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required=""
                type="text"
                class="
                  flex-grow
                  w-full
                  h-12
                  px-4
                  mb-3
                  transition
                  duration-200
                  bg-white
                  border border-gray-300
                  rounded
                  shadow-sm
                  appearance-none
                  md:mr-2
                  md:mb-0
                  focus:border-deep-purple-accent-400
                  focus:outline-none
                  focus:shadow-outline
                "
              />
              <button
                type="submit"
                class="
                  inline-flex
                  items-center
                  justify-center
                  h-12
                  px-6
                  font-medium
                  tracking-wide
                  text-white
                  transition
                  duration-200
                  rounded
                  shadow-md
                  bg-deep-purple-accent-400
                  hover:bg-deep-purple-accent-700
                  focus:shadow-outline
                  focus:outline-none
                "
              >
                Subscribe
              </button>
            </form>
            <p class="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div
          class="
            flex flex-col
            justify-between
            pt-5
            pb-10
            border-t border-gray-800
            sm:flex-row
          "
        >
          <p class="text-sm text-gray-500">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div class="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              class="
                text-gray-500
                transition-colors
                duration-300
                hover:text-teal-accent-400
              "
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                ></path>
              </svg>
            </a>
            <a
              href="/"
              class="
                text-gray-500
                transition-colors
                duration-300
                hover:text-teal-accent-400
              "
            >
              <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                ></path>
              </svg>
            </a>
            <a
              href="/"
              class="
                text-gray-500
                transition-colors
                duration-300
                hover:text-teal-accent-400
              "
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
}
</script>
