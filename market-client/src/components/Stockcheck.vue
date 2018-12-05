<template>
  <v-card>
    <v-card-title>
      재고조회
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="검색 방법"
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
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
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
          {
            value: false,
            name: 'Frozen Yogurt',
            serialnumber: '01234'
            
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            serialnumber: '56789'
          },
          {
            value: false,
            name: 'Eclair',
            serialnumber: '00000'
          }
        ]
      }
    }
  }
</script>