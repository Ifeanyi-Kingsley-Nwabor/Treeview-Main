<template>
  <div class="home">
    <SideNav :data="myData" />
    <div class="content">
      <div class="display-container">
        <label class="label">DE</label>
        <h4 :class="$store.state.DeValue ? 'display' : ''">
          {{ $store.state.DeValue }}
        </h4>
      </div>
      <div class="display-container">
        <label class="label">EN</label>
        <h4 :class="$store.state.DeValue ? 'display' : ''">
          {{ $store.state.EnValue }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav.vue";
import en from "@/locales/en.json";

export default {
  name: "HomeView",
  components: {
    SideNav,
  },
  data() {
    return {
      myData: en,
    };
  },
};
</script>
<style scoped>
.home {
  display: grid;
  grid-template-columns: 1.5fr 4.5fr;
  background-color: rgba(71, 83, 88, 0.5);
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.display-container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 20px;
  font-weight: 900;
  color: rgba(49, 48, 48, 0.3);
  margin: 10px;
}

.display {
  background-color: rgba(177, 179, 179, 0.3);
  color: rgb(49, 48, 48);
  padding: 30px;
  margin: 30px;
  border-radius: 30px;
}
</style>
