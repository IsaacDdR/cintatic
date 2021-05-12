<template>
  <div class="bg-gray-600">
    <div
      class="
        relative
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        lg:py-20
      "
    >
      <div
        class="
          absolute
          inset-x-0
          top-0
          items-center
          justify-center
          hidden
          overflow-hidden
          md:flex
          md:inset-y-0
        "
      ></div>
      <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="service of services"
          :key="service.slug"
          :to="{ name: 'services-slug', params: { slug: service.slug } }"
          class="
            px-10
            py-20
            text-center
            transition
            duration-300
            transform
            bg-gray-900
            rounded
            shadow-2xl
            hover:scale-105
            md:shadow-xl
            hover:shadow-2xl
          "
        >
          <p class="font-semibold text-gray-200">
            {{ service.title }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const services = await $content('services', params.slug).fetch()
    return { services }
  },
}
</script>
