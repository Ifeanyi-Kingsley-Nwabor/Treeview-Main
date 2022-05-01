<template>
  <div class="sidebar">
    <ul style="list-style: none" class="menu-items">
      <li
        v-for="(item, key, index) in myData"
        :key="index"
        active-class="active"
        exact
        class="side-btn"
      >
        <span @click="GetValue(item, key)" class="link-container">{{
          key
        }}</span>
        <SideNav
          :parentKey="key"
          :class="{ hidden: !OpenList.includes(key) }"
          :data="item"
          v-if="typeof item === 'object'"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import de from "@/locales/de.json";
// import ChildrenNav from "@/components/ChildrenNav.vue";
export default {
  props: ["data", "parentKey"],
  components: {
    // ChildrenNav,
  },
  data() {
    return {
      myData: [],
      myData1: de,
      OpenList: [],
      OpenNestedList: [],
    };
  },
  created() {
    try {
      this.myData = JSON.parse(JSON.stringify(this.data));
      // console.log(this.myData);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    GetValue(item, key) {
      //check if item is not object then get value else open collapse

      if (typeof item !== "object") {
        try {
          this.$store.commit("AddValue", {
            EnValue: item,
            DeValue: this.myData1[this.parentKey][key],
          });
          // console.log(this.myData1[this.parentKey][key]);
        } catch (err) {
          this.$store.commit("AddValue", {
            EnValue: item,
            DeValue: this.myData1["info"][this.parentKey][key],
          });
        }
      } else {
        //check if index already exsists in the list then added it else remove it
        if (this.OpenList.includes(key)) {
          this.OpenList.splice(this.OpenList.indexOf(key), 1);
        } else {
          this.OpenList.push(key);
        }
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  overflow: auto;
  height: 100vh;
  margin-right: 5px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 6px;
}

.side-btn {
  border: none;
  padding: 16px 0 5px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: rgb(16, 13, 13);
  background-color: transparent;
  text-align: start;
  text-transform: uppercase;
}

.side-btn:hover {
  color: rgb(221, 216, 216);
}

.hidden {
  display: none;
}
</style>
