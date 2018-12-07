<template>
  <v-card>
    <v-card-title>
      재고관리
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
        <td class="text-xs-center">
            <v-edit-dialog
            :return-value.sync="tNumber"
            large
            lazy
            persistent
            @save="save(props.item.serialnumber, tNumber)"
            @cancel="cancel"
            @open="open(props.item.number)"
            @close="close"
          >
            <div>{{ props.item.number }}</div>
            <div slot="input" class="mt-3 title">수량 변경</div>
            <v-text-field
              slot="input"
              v-model="tNumber"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              ref = 'test'
            ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import 'url-search-params-polyfill'
  export default {
    data () {
      return {
        tNumber: 0,
        search: '',
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        pagination: {},
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
            value: 'number'
          },
        ],
        desserts: []
      }
    },
    methods: {
      save (serial, number) {
        var params = new URLSearchParams();
        params.append("serial", serial);
        params.append("number", number);

        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
        this.$http.get('/api/inertAllProduct', {
          params: {
            "productID": serial,
            "productCount": number
          }
        }).then((response) => {

        })
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      },
      open (n) {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
        this.tNumber = n
      },
      close () {
        console.log('Dialog closed')
      }
    },
    created(){
      this.$http.get('/api/getAllProduct').then((response) => {
        this.desserts = response.data
      })
    }
  }
</script>
