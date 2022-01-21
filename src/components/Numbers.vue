<template>
  <section class="numbers">
    <div class="container">
      <div class="row">
        <div v-for="data in datas" :key="data.id" class="col-md-3">
          <div class="item">
            <span class="icon"><i :class="data.icon"></i></span>
            <h3 class="counter">{{ data.number }}</h3>
            <p>{{ data.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const datas = ref([
      { icon: "fa fa-users", number: "850", title: "Happy Customers" },
      { icon: "fa fa-thumbs-up", number: "230", title: "Complete Projects" },
      { icon: "fa fa-bullhorn", number: "9450", title: "Lines of Code" },
      {
        icon: "fa fa-cloud-download-alt",
        number: "780",
        title: "Files Downloaded",
      },
    ]);
    return { datas };
  },
};
</script>
<style>
.numbers {
  height: 35vh;
  text-align: center;
}
.numbers .icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.numbers h3 {
  font-weight: 1000;
  margin-bottom: 15px;
  font-size: 2.2rem;
  letter-spacing: 1px;
}
.numbers .row {
  margin-top: 100px;
}
.numbers p {
  font-weight: 600;
  margin-bottom: 30px;
}
</style>