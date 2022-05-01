<template>
  <div class="home">
    <SideNav :data="myData" />
    <div class="content">
      <div class="display-container">
        <label class="label">DE</label>
        <h1 :class="$store.state.DeValue ? 'display' : ''">
          {{ $store.state.DeValue }}
        </h1>
      </div>
      <div class="display-container">
        <label class="label">EN</label>
        <h1 :class="$store.state.DeValue ? 'display' : ''">
          {{ $store.state.EnValue }}
        </h1>
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
  background-color: teal;
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
  background-color: azure;
  color: rgb(49, 48, 48);
  padding: 30px;
  margin: 30px;
  border-radius: 30px;
}
</style>
