<template>
  <section class="clients">
    <div class="container">
      <div class="section-head"><h3>Testimonials</h3></div>
      <Carousel :autoplay="4000" :transition="1000" :wrap-around="true">
        <Slide v-for="item in items" :key="item.id">
          <div class="row">
            <div class="col-12">
              <div class="citem">
                <div class="author-img"><img :src="item.url" alt="" /></div>
                <p>{{ item.speech }}</p>
                <h6>{{ item.customer }}</h6>
                <span>{{ item.customerItem }}</span>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { ref } from "vue";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    const items = ref([
      {
        url: "/img/clients/1.jpg",
        speech:
          "Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        customer: "Alex Smith",
        customerItem: "Envato Customer",
      },
      {
        url: "/img/clients/1.jpg",
        speech:
          "Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        customer: "Alex Smith",
        customerItem: "Envato Customer",
      },
      {
        url: "/img/clients/1.jpg",
        speech:
          "Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        customer: "Alex Smith",
        customerItem: "Envato Customer",
      },
    ]);
    return { items };
  },
};
</script>
<style>
.clients {
  width: 100%;
  height: 100vh;
  background: #f7f7f7;
  margin-top: 100px;
}
.clients .container {
  text-align: center;
}

.clients .citem .author-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 15px;
}
.clients .citem p {
  word-spacing: 2px;
  width: 80%;
  display: inline-block;
}
.clients .citem h6 {
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0 5px;
}
.clients .citem span {
  font-size: 12px;
  font-weight: 600;
  color: #888;
  margin-bottom: 30px;
}
.carousel__pagination{
  margin-left: -28px;
  margin-top: 30px;
}
.carousel__pagination-button{
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #D6D6D6;
}
.carousel__pagination-button--active {
  background-color: #869791;
}

</style>