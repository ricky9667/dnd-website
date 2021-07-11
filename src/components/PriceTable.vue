<template>
  <div class="price-table">
    <table class="table-fixed w-4/5 center-x border-collapse border-item">
      <thead>
        <tr>
          <th class="w-1/3 border-item">平日</th>
          <th class="w-1/3 border-item">假日</th>
          <th class="w-1/3 border-item">農曆過年</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-item">{{ price.weekday }}</td>
          <td class="border-item">{{ price.weekend }}</td>
          <td class="border-item">{{ price.holiday }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PriceTable',
  props: ['price']
}
</script>

<style>
.border-item {
  @apply border border-green-400;
}
</style>