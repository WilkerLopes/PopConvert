<script setup>
import { ref } from 'vue'
import Popup from '../components/Popup.vue'

function closeModal(data) {
  console.log(data)
  popupButtonShow.value = false
}

const popupButtonShow = ref(false)
const popupButton = ref({
  type: 'game',
  title: 'Ganhe até 50%',
  subtitle: 'lorem um popup customizável para o jogo caça-níquel',
  popupID: 'POP_456',
  data: {
    game: '/images/game.png'
  },
  hasConsent: false,
  form: {
    name: '',
    email: '',
    phone: '',
    gender: ''
  }
})

const products = [
  {
    id: 1,
    name: 'Camisa básica preta',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    price: 'R$ 99,99',
    color: 'Preto'
  },
  {
    id: 2,
    name: 'Camisa básica branca',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    price: 'R$ 124,99',
    color: 'Branco'
  },
  {
    id: 3,
    name: 'Camisa básica cinza',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    price: 'R$ 150,00',
    color: 'Cinza'
  },
  {
    id: 4,
    name: 'Camisa básica estampada',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    price: 'R$ 75,00',
    color: 'Rosa pontilhado'
  }
  // More products...
]
const listImages = [
  {
    id: 1,
    images: [
      {
        id: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
        href: '#',
        style: 'h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'
      },
      {
        id: 2,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
        href: '#',
        style: 'h-64 w-44 overflow-hidden rounded-lg  lg:opacity-100'
      }
    ]
  },
  {
    id: 2,
    images: [
      {
        id: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
        href: '#',
        style: 'h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100'
      },
      {
        id: 2,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
        href: '#',
        style: 'h-64 w-44 overflow-hidden rounded-lg  lg:opacity-100'
      },
      {
        id: 3,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
        href: '#',
        style: 'h-64 w-44 overflow-hidden rounded-lg  lg:opacity-100'
      }
    ]
  },
  {
    id: 3,
    images: [
      {
        id: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
        href: '#',
        style: 'h-64 w-44 overflow-hidden rounded-lg  lg:opacity-100'
      },
      {
        id: 2,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg',
        href: '#',
        style: 'h-64 w-44 overflow-hidden rounded-lg  lg:opacity-100'
      }
    ]
  }
]
</script>

<template>
  <div>
    <div class="relative overflow-hidden md:overflow-visible bg-white">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Os estilos de verão estão aqui
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              Este ano, nossa nova coleção de verão irá protegê-lo dos elementos hostis de um mundo
              que não se importa se você vive ou morre.
            </p>
          </div>
          <div>
            <div class="mt-10">
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div
                  class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                >
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div
                      class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                      v-for="images in listImages"
                      :key="images.id"
                    >
                      <div v-for="image in images.images" :class="image.style" :key="image.id">
                        <img
                          :src="image.imageSrc"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                @click="popupButtonShow = true"
                class="inline-block rounded-full border border-transparent bg-primary-600 px-8 py-3 text-center font-medium text-white hover:bg-primary-700"
              >
                Ganhar desconto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="pt-16 pb-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Produtos mais vendidos</h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          <div v-for="product in products" :key="product.id" class="group relative">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
                :src="product.imageSrc"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Popup
      :open="popupButtonShow"
      :data="popupButton"
      :key="popupButton.popupID"
      @close="closeModal"
    />
  </div>
</template>
