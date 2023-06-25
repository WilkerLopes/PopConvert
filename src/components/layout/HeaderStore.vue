<script setup>
import { ref, onMounted } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'
import Popup from '../Popup.vue'

const navigation = {
  pages: [
    { name: 'Mulher', href: '#' },
    { name: 'Homem', href: '#' },
    { name: 'Infantil', href: '#' },
    { name: 'Lojas', href: '#' }
  ]
}

function closeModal(data) {
  console.log(data)
  popupBannerShow.value = false
}

const drawerIsOpen = ref(false)
const popupBannerShow = ref(false)
const popupBanner = ref({
  type: 'video',
  title: 'Ganhe até 50%',
  subtitle: 'lorem um popup customizável para o jogo caça-níquel',
  popupID: 'POP_789',
  data: {
    videoUrl: '/video/promotional.mp4',
    videoType: 'video/mp4'
  },
  hasConsent: false,
  form: {
    email: '',
    name: '',
    phone: ''
  }
})

onMounted(() => {
  setTimeout(() => {
    popupBannerShow.value = true
  }, 500)
})
</script>

<template>
  <div class="bg-white z-50 fixed w-screen">
    <TransitionRoot as="template" :show="drawerIsOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="drawerIsOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pb-2 pt-5 justify-end">
                <button
                  type="button"
                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="drawerIsOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">
                    {{ page.name }}
                  </a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Login</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Registrar</a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <p
        class="flex h-10 items-center justify-center bg-blue-500 px-4 text-sm font-medium text-white cursor-pointer"
        @click="popupBannerShow = true"
      >
        Ganhe até 50% de desconto em compras acima de R$300,00
      </p>

      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <button
              type="button"
              class="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              @click="drawerIsOpen = true"
            >
              <span class="sr-only">Menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <span class="sr-only">PopConvert</span>
                <img class="h-8 w-auto" src="/logo/logo.svg" alt="Logo PopConvert" />
              </a>
            </div>

            <!-- Flyout menus -->
            <div class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <a
                  v-for="page in navigation.pages"
                  :key="page.name"
                  :href="page.href"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {{ page.name }}
                </a>
              </div>
            </div>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Login</a>
                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Registrar
                </a>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon
                    class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                    >0</span
                  >
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <Popup :open="popupBannerShow" :data="popupBanner" @close="closeModal" />
  </div>
</template>
