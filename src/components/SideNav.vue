<template>
  <div class="sidebar">
    <ul style="list-style: none" class="menu-items">
      <li v-for="(item, key, index) in myData" :key="index" class="side-btn">
        <span
          v-if="typeof item === 'object'"
          class="type icon"
          @click="GetValue(item, key)"
          >{{ isExpanded(key) ? "&#9660;" : "&#9658;" }}</span
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

export default {
  props: ["data", "parentKey"],
  // props: {
  //   data: { type: Object, required: true },
  //   parentKey: { type: String, required: true },
  // },

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
        } catch (err) {
          this.$store.commit("AddValue", {
            EnValue: item,
            DeValue: this.myData1["info"][this.parentKey][key],
          });
        }
      } else {
        //check if index already exsists in the list then added it, else remove it
        if (this.OpenList.includes(key)) {
          this.OpenList.splice(this.OpenList.indexOf(key), 1);
        } else {
          this.OpenList.push(key);
        }
      }
    },
    isExpanded(key) {
      return this.OpenList.indexOf(key) !== -1;
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
  padding-left: 10px;
  border-radius: 20px;
}

.hidden {
  display: none;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
.icon {
  padding-right: 5px;
}
</style>
