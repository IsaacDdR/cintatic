<template>
  <div>
    <article>
      <div
        class="
          relative
          px-4
          pt-16
          mx-auto
          lg:py-32
          md:px-8
          xl:px-20
          sm:max-w-xl
          md:max-w-full
        "
      >
        <div class="max-w-xl mx-auto lg:max-w-screen-xl">
          <div class="mb-16 lg:max-w-lg lg:mb-0">
            <div class="max-w-xl mb-6">
              <div></div>
              <h2
                class="
                  max-w-lg
                  mb-6
                  font-sans
                  text-3xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                  sm:leading-none
                "
              >
                {{ service.title }}
              </h2>
              <p class="text-base text-gray-700 md:text-lg">
                {{ service.description }}
              </p>
            </div>
            <div class="flex items-center">
              <a
                href="/"
                class="
                  bg-black
                  inline-flex
                  items-center
                  justify-center
                  h-12
                  px-6
                  mr-6
                  font-medium
                  tracking-wide
                  text-white
                  transition
                  duration-200
                  rounded
                  shadow-md
                  hover:bg-deep-purple-accent-700
                  focus:shadow-outline
                  focus:outline-none
                "
              >
                Get started
              </a>
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
        <div
          class="
            flex
            justify-center
            h-full
            overflow-hidden
            lg:w-2/3
            xl:w-1/2
            lg:absolute
            lg:justify-start
            lg:bottom-0
            lg:right-0
            lg:items-end
          "
        >
          <img
            src="https://kitwind.io/assets/kometa/full-browser.png"
            class="
              object-cover object-top
              w-full
              h-64
              max-w-xl
              -mb-16
              rounded
              shadow-2xl
              lg:ml-64
              xl:ml-8
              lg:-mb-24
              xl:-mb-28
              lg:h-auto
              lg:max-w-screen-md
            "
            alt=""
          />
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const service = await $content('services', params.slug).fetch()
    return {
      service,
    }
  },
}
</script>
