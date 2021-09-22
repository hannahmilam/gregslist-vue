
  <template>
    <form @submit.prevent="handleSubmit">
  <div class="form-group">
    <label for="price" class="">Price:</label>
    <input 
    v-model="editable.price" 
    type="number" 
    class="form-control" 
    name="price" 
    id="price" 
    required>
  </div>

  <div class="form-group">
    <label for="bedrooms" class="">Bedrooms:</label>
    <input 
    type="number" 
    v-model="editable.bedrooms"
    class="form-control" 
    name="bedrooms" 
    id="bedrooms" 
    min="0" 
    max="20" 
    required>
  </div>

  <div class="form-group">
    <label for="bathrooms" class="">Bathrooms:</label>
    <input 
    v-model="editable.bathrooms"
    type="number" 
    class="form-control" 
    name="bathrooms" 
    id="bathrooms" 
    min="0" 
    max="20" r
    equired>
  </div>

  <div class="form-group">
    <label for="levels" class="">Levels:</label>
    <input 
    v-model="editable.levels"
    type="number" 
    class="form-control" 
    name="levels" 
    id="levels" 
    min="0" 
    max="20" 
    required>
  </div>

  <div class="form-group">
    <label for="year" class="">Year:</label>
    <input 
    v-model="editable.year"
    type="year" 
    class="form-control" 
    name="year" 
    id="year">
  </div>

  <div class="form-group">
    <label for="description" class="">description:</label>
    <textarea 
    v-model="editable.description"
    type="text" 
    class="form-control" 
    name="description" 
    id="description" 
    rows="5">
    </textarea>
  </div>

  <div class="form-group">
    <label for="img" class="">Image:</label>
    <input 
    v-model="editable.img"
    type="url" 
    class="form-control" 
    name="img" 
    id="img" 
    required>
  </div>
  
  <div class="button-group my-3">
    <button type="reset" class="btn btn-secondary">clear</button>
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">submit</button>
  </div>
</form>
</template>
  
  <script>

import { House } from '../models/House'
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { housesService } from '../services/HousesService'

  export default {
    props: {
      house: {type: House, default: true}
    },
    setup(props) {
      const editable = ref({})
      watchEffect(() => {
        editable.value = {...props.house}
      })

      return {
        editable,
        async handleSubmit(){
          try {
            editable.value.id
            ? await housesService.editHouse(editable.value)
            : await housesService.createHouse(editable.value)
            editable.value = {}
          } catch (error) {
            Pop.toast(error.message, 'error')
          }
        }
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>