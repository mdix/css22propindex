<template>
  <div id="app">
    <hot-table :data="props" :settings="settings"></hot-table>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue';
import propindex from './data/propindex.json';

export default {
  name: 'App',
  components: {
    HotTable
  },
  data() {
      return {
          settings: {
            colHeaders: [
              'Name',
              'Inherited?',
              'Initial value',
              'Applies to (Default: all)',
              'Values',
              'Percentages (Default: N/A)',
              'Media groups'
            ],
            columns: [
              {
                type: 'text',
              },
              {
                type: 'checkbox',
                readOnly: true,
                columnSorting: {
                  compareFunctionFactory: function compareFunctionFactory(sortOrder) {
                    return function comparator(a) {
                      return sortOrder === 'asc' ? !a : a;
                    };
                  }
                }
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
              {
                type: 'text',
              },
            ],
            width: '100%',
            colWidths: [
                150,
                100,
                500,
                150,
                150,
                150,
                150,
            ],
            search: true,
            editor: false,
            columnSorting: {
              sortEmptyCells: true,
              initialConfig: {
                column: 1,
                sortOrder: 'asc'
              },
            },
            licenseKey: 'non-commercial-and-evaluation'
          }
      }
  },
  computed: {
    props() {
      return propindex.map(i => {
          const values = Object.values(i);
          return [
              values[0],
              values[4],
              values[1],
              values[2],
              values[3],
              values[5],
              values[6],
          ];
      });
    }
  }
}
</script>

<style>
@import '~handsontable/dist/handsontable.full.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
