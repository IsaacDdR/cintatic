<template>
  <div class="bg-gray-600 flex">
    <div
      v-for="service of services"
      :key="service.slug"
      class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      <NuxtLink
        :to="{ name: 'services-slug', params: { slug: service.slug } }"
        class="
          m-8
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
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const services = await $content('services', params.slug).fetch()
    return { services }
  },
}
</script>
