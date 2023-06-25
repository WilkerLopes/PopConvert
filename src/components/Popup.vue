<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  data: {
    type: Object
  }
})

const emit = defineEmits(['close'])
const closeModal = () => {
  emit('close', {
    ...props.data.form,
    hasConsent: props.data.hasConsent,
    popupID: props.data.popupID
  })
}

const genders = ['Masculino', 'Feminino', 'Outro']
const showForm = ref(false)

onMounted(() => {
  if (props.data.type == 'video') {
    setTimeout(() => {
      showForm.value = true
    }, 2500)
  }
})
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-[100]" @close="closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="text-center">
                  <DialogTitle as="h2" class="text-2xl font-bold leading-6 text-gray-900">
                    {{ data.title }}
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      {{ data.subtitle }}
                    </p>
                  </div>
                  <div class="my-3">
                    <div
                      class="game aspect-square w-8/12 mx-auto"
                      v-if="data.type == 'game'"
                      @click="showForm = true"
                    >
                      <img src="/images/game.png" alt="" />
                    </div>
                    <div class="video" v-if="data.type == 'video'">
                      <video
                        preload="auto"
                        style="width: 100%; height: 100%"
                        loop
                        autoplay
                        class="section-background-video rounded-md aspect-video"
                      >
                        <source :type="data.data.videoType" :src="data.data.videoUrl" />
                      </video>
                    </div>
                  </div>
                  <div v-if="showForm" class="form text-left text-gray-700 grid grid-cols-2 gap-2">
                    <label class="label col-span-2" v-if="data.form.name != undefined">
                      <span>Nome</span>
                      <input
                        v-model="data.form.name"
                        type="text"
                        placeholder="Jhon Silva"
                        class="input"
                      />
                    </label>

                    <label class="label" v-if="data.form.email != undefined">
                      <span>Email</span>
                      <input
                        v-model="data.form.email"
                        type="email"
                        placeholder="john.silva@email.com"
                        class="input"
                      />
                    </label>

                    <label class="label" v-if="data.form.phone != undefined">
                      <span>Celular</span>
                      <input
                        v-model="data.form.phone"
                        type="tel"
                        placeholder="(00) 90000-0000"
                        class="input"
                      />
                    </label>

                    <label class="label col-span-2" v-if="data.form.gender != undefined">
                      <span>Gender</span>
                      <select v-model="data.form.gender" placeholder="Escolha um gênero">
                        <option :value="gender" v-for="gender in genders" :key="gender">
                          {{ gender }}
                        </option>
                      </select>
                    </label>

                    <label class="flex items-center col-span-2">
                      <input v-model="data.hasConsent" type="checkbox" class="checkbox" />
                      <span class="ml-2 label">Eu consinto a coleta de dados</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="p-3 flex flex-col gap-1 items-center">
                <button
                  class="rounded-md bg-red-600 px-10 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-500 disabled:grayscale"
                  @click="closeModal"
                  ref="confirmButtonRef"
                  :disabled="!showForm"
                >
                  Ganhar desconto
                </button>
                <button
                  class="bg-transparent px-3 py-2 text-sm text-gray-600 ring-inset"
                  @click="closeModal"
                  ref="cancelButtonRef"
                >
                  Não quero desconto
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
