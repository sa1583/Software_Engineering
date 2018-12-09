<template>
  <v-card>
    <v-card-title>
      재고조회
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="상품 이름"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.serialnumber }}</td>
        <td class="text-xs-center">{{ props.item.duedate }}</td>
        <td class="text-xs-center">{{ props.item.number }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: '상품이름',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: '상품번호',
            align: 'center',
            sortable: false,
            value: 'serialnumber'
          },
          {
            text: '유통기한',
            align: 'center',
            sortable: false,
            value: 'duedate'
          },
          {
            text: '개수',
            align: 'center',
            sortable: false,
            value: 'number'
          },
        ],
        desserts: [
        ]
      }
    },
    created(){
      this.$http.get('/api/getAllProduct').then((response) => {
        this.desserts = response.data
      })
    }
  }
</script>
