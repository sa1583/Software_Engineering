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
      :pagination.sync="pagination"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">
            <v-edit-dialog
            :return-value.sync="props.item.name"
            large
            lazy
            persistent
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            <p class="text-xs-center">{{ props.item.name }}</p>
            <div slot="input" class="mt-3 title">수량 변경</div>
            <v-text-field
              slot="input"
              v-model="props.item.name"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </v-edit-dialog>
        </td>
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
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </v-edit-dialog>

        </td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-btn>발주 넣기</v-btn>
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
          { text: '상품', value: 'name',align: 'center'},
          { text: '개수', value: 'number',align: 'center' }
        ],
        desserts: [
          {
            value: false,
            align: 'center',
            name: '아이스크림',
            number: 1
          },
          {
            value: false,
            align: 'center',
            name: '요거트',
            number: 1
          },
          {
            value: false,
            align: 'center',
            name: '초콜릿',
            number: 7
          }
        ]
      }
    },
    
  }
</script>