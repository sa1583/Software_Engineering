<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :pagination.sync="pagination"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.method }}</td>
        <td class="text-xs-center">{{ props.item.rate }}</td>
        <td class="text-xs-center">{{ props.item.products }}</td>
        <td class="text-xs-center">{{ props.item.else }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-btn>할인정보 게시하기</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {
          sortBy: 'fat'
        },
        selected: [],
        headers: [
          {
            text: '할인방식',
            align: 'center',
            sortable: false,
            value: 'method'
          },
          { text: '할인율(개수)', value: 'rate',align: 'center' },
          { text: '해당 품목', value: 'products',align: 'center' },
          { text: '기타 사항', value: 'else',align: 'center' }
        ],
        desserts: [
          {
            value: false,
            method: '1+1',
            rate: '1+1',
            products: '',
            else: '',
            align:'center'
           
          },
          {
            value: false,
            method: '30%',
            rate: '30%',
            products: '',
            else: '',
            align:'center'
          }
        ]
      }
    }
  }
</script>