<template>
  <v-card>
    <v-card-title>
      매출조회
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="날짜 입력"
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
            text: '날짜',
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
            term: '2018/10/10',
            sales: '100000000'
          },
          {
            value: false,
            term: '2018/10/11',
            sales: '2000000000'
          },
          {
            value: false,
            term: '2018/10/12',
            sales: '30000000000'
          },
          {
            value: false,
            term: '2018/10/13',
            sales: '30000000'
          }
        ]
      }
    },
    created() {

    }
  }
</script>
