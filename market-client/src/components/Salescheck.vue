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
      :items="desserts"
      :search="search"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.iron }}</td>
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
            text: '기간',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
            text: '매출액',
            align: 'center',
            sortable: false, 
            value: 'iron' 
          }
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            iron: '1%'
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            iron: '1%'
          },
          {
            value: false,
            name: 'Eclair',
            iron: '7%'
          }
        ]
      }
    }
  }
</script>