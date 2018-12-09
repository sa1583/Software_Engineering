<template>
  <div>
    <v-card-title>
      상품 발주
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center" >
            <p class="text-xs-center">{{ props.item.name }}</p>
        </td>
        <td class="text-xs-center">
          <v-container
           align-content-center>
              <v-text-field
              type="number"
              min="0"
              value="0"

              >
              </v-text-field>
          </v-container>
        </td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-btn v-on:click="order(inputunum)">발주 넣기</v-btn>
    </div>
  </div>
</template>

<script>
  import router from '../router'
  export default {
    data () {
      return {
        search: '',
        
        pagination: {
          
        },
        selected: [],
        headers: [
          { text: '상품', value: 'name',align: 'center', sortable: false},
          { text: '개수', value: 'number',align: 'center', sortable: false}
        ],
        desserts: [

        ]
      }
    },
    methods:{
      order(inputnum){
          console.log(inputnum)
          alert("발주완료")
          router.push({path:"/AdminPage"})
  
      },
    },
    created(){
      this.$http.get('/api/getOrderableProduct').then((response) => {
        this.desserts = response.data
      })
    }
  }
</script>

<style>
</style>
