<template>
  <div v-if="house" class="py-4">
    <div class="row d-flex flex-wrap w-100">
      <div class="col-5">
      <House :house="house" class="house-details" />
      </div>

      <div class="ms-4 flex-grow-1">
        <p>
          <b>Contact Seller</b>
        </p>
        <div class="d-flex clip-text align-items-center">
          <img :src="house.creator.picture" alt="" class="rounded-circle" height="64">
          <h4 class="ms-3">
            {{ house.creator.name }}
          </h4>
        </div>

        <div v-if="house.creatorId === account.id">
          <p class="my-3">
            <b>Listing Controls</b>
          </p>
          <div class="">
            <button class="btn text-dark lighten-20" @click="remove(house)">
              <b>
                Remove Listing
              </b>
            </button>
            <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#edit-modal">
              <b>
                Edit
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal id="edit-modal">
      <template #modal-title>
        {{ house.year }} {{ house.bedrooms}} - {{ house.bathrooms }}
      </template>
      <template #modal-body>
        <!-- REVIEW PROPS -->
        <!-- drawHouseForm(car) -->
        <HouseForm :house="house" />
      </template>
    </Modal>
  </div>
  <div v-else>
    loading.....
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { useRoute } from 'vue-router'

export default {
  setup(){
    const route = useRoute()

    onMounted(() => {
      housesService.getHouseById(route.params.houseId)

    })
    return{
      account: computed(() => AppState.account),
      house: computed(() => AppState.house),
    }
  }

}
</script>

<style scoped lang="scss">
.house-details{
  max-width: 50vw;
}

</style>