<template>
  <v-card>
    <v-card-title>
      매출조회
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="기간 설정"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="termsales"
      :search="search"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.term }}</td>
        <td class="text-xs-center">{{ props.item.sales }}</td>
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
            text: '기간',
            align: 'center',
            sortable: false,
            value: 'term'
          },
          {
            text: '매출액',
            align: 'center',
            sortable: false,
            value: 'sales'
          }
        ],
        termsales: [
          {
            value: false,
            term: '2018/10/10~2018/11/10',
            sales: '100000000'
          },
          {
            value: false,
            term: '2018/11/10~2018/12/10',
            sales: '2000000000'
          },
          {
            value: false,
            term: '2018/12/10~2019/1/10',
            sales: '30000000000'
          }
        ]
      }
    },
    created() {

    }
  }
</script>
