<template>
  <div class="room-content">
    <h2 class="text-center lg:text-left">{{ title }}</h2>

    <div class="flex flex-col justify-start items-center lg:items-start">
      <custom-title title="客房介紹">
        <HomeIcon />
      </custom-title>

      <ul class="list-disc list-inside">
        <li v-for="(description, index) in descriptions" :key="index">
          {{ description }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col justify-start items-center lg:items-start">
      <custom-title title="定價">
        <CurrencyDollarIcon />
      </custom-title>

      <TabGroup>
        <TabList>
          <Tab v-slot="{ selected }">
            <button
              :class="[
                selected
                  ? 'tab-button tab-button-selected'
                  : 'tab-button tab-button-normal',
              ]"
            >
              平日
            </button>
          </Tab>
          <Tab v-slot="{ selected }">
            <button
              :class="[
                selected
                  ? 'tab-button tab-button-selected'
                  : 'tab-button tab-button-normal',
              ]"
            >
              假日
            </button>
          </Tab>
          <Tab v-slot="{ selected }">
            <button
              :class="[
                selected
                  ? 'tab-button tab-button-selected'
                  : 'tab-button tab-button-normal',
              ]"
            >
              過年
            </button>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div class="tab-panel">
              <h4 class="text-center">NT ${{ price.weekday }} (每間 2 人)</h4>
              <div>
                <UserAddIcon class="h-6 w-6 text-content" />
                <p class="inline-block align-middle ml-1">
                  $300/人: 3-6 歲，含早餐
                </p>
              </div>
              <div>
                <UserAddIcon class="h-6 w-6 text-content" />
                <p class="inline-block align-middle ml-1">
                  $600/人: 6 歲+，含早餐、寢具
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="tab-panel">
              <h4 class="text-center">NT ${{ price.weekend }} (每間 2 人)</h4>
              <div>
                <UserAddIcon class="h-6 w-6 text-content" />
                <p class="inline-block align-middle ml-1">
                  $300/人: 3-6 歲，含早餐
                </p>
              </div>
              <div>
                <UserAddIcon class="h-6 w-6 text-content" />
                <p class="inline-block align-middle ml-1">
                  $600/人: 6 歲+，含早餐、寢具
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="tab-panel">
              <h4 class="text-center">NT ${{ price.holiday }} (每間 2 人)</h4>
              <div>
                <UserAddIcon class="h-6 w-6 text-content" />
                <p class="inline-block align-middle ml-1">
                  $400/人: 3-6 歲，含早餐
                </p>
              </div>
              <div>
                <UserAddIcon class="h-6 w-6 text-content" />
                <p class="inline-block align-middle ml-1">
                  $800/人: 6 歲+，含早餐、寢具
                </p>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script>
import CustomTitle from "./CustomTitle.vue";
import {
  HomeIcon,
  CurrencyDollarIcon,
  UserAddIcon,
} from "@heroicons/vue/outline";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

export default {
  name: "RoomContent",
  components: {
    CustomTitle,
    HomeIcon,
    CurrencyDollarIcon,
    UserAddIcon,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  props: ["title", "descriptions", "price"],
};
</script>

<style>
.room-content {
  @apply px-2 text-left divide-y divide-gray-300;
}

.room-content > * {
  @apply py-2;
}

.tab-button {
  @apply text-sm md:text-base w-16 xs:w-20 sm:w-24 lg:w-20 py-1 ml-1 font-bold inline-block rounded-full;
}

.tab-button-normal {
  @apply text-primary bg-secondary;
}

.tab-button-selected {
  @apply text-secondary bg-primary;
}

.tab-panel {
  @apply p-2 mx-1 mt-4 rounded-lg shadow-lg border-2 border-primary bg-secondary;
}

.tab-panel > * {
  @apply my-1;
}

.price-table {
  @apply table w-full sm:w-4/5 lg:w-full mx-auto text-center rounded bg-secondary border-2 border-primary;
}

.price-table-cell {
  @apply table-cell py-1 w-1/4;
}
</style>
