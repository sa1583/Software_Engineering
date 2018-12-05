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
        <td class="text-xs-center">
            <v-edit-dialog
            :return-value.sync="props.item.number"
            large
            lazy
            persistent
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            <div>{{ props.item.number }}</div>
            <div slot="input" class="mt-3 title">수량 변경</div>
            <v-text-field
              slot="input"
              v-model="props.item.number"
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
  export default {
    data () {
      return {
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
        desserts: [
          {
            value: false,
            name: '요거트',
            serialnumber: '01234',
            duedate: '2018/12/05',
            number : '5'
            
          },
          {
            value: false,
            name: '아이스크림',
            serialnumber: '67890',
            duedate: '2018/12/06',
          },
          {
            value: false,
            name: '초콜릿',
            serialnumber: '00000',
            duedate: '2018/12/07'
          }
        ]
      }
    },
    methods: {
      save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
      },
      close () {
        console.log('Dialog closed')
      }
    }
  }
</script>