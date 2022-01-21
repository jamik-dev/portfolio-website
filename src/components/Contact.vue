<template>
  <section class="contact">
    <div class="container">
      <div class="section-head">
        <h3>Contact Us</h3>
      </div>
      <div class="row">
        <div v-for="item in datas" :key="item.id" class="col-md-4">
          <div class="item">
            <span class="icon"><i :class="item.icon"></i></span>
            <h6>{{ item.title }}</h6>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <form action="" class="form" id="contact-form" method="post">
        <div class="controls">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  id="form_name"
                  name="name"
                  placeholder="Name"
                  required="required"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="email"
                  id="form_email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <textarea
                  name="message"
                  id="form_message"
                  placeholder="Message"
                  required="required"
                  rows="4"
                ></textarea>
              </div>
              <input type="submit" value="Submit" class="buton buton-bg" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const datas = ref([
      {
        icon: "fa fa-location-arrow",
        title: "Address",
        text: "Dormitory of Ajou Unviersity in Tashkent",
      },
      {
        icon: "fa fa-envelope",
        title: "Email",
        text: "jamik.oik.group@gmail.com",
      },
      { icon: "fa fa-phone", title: "Phone", text: "+998 94 541 46 35" },
    ]);
    return { datas };
  },
};
</script>
<style>
.contact {
  width: 100%;
  height: 120vh;
}
.container{
    width: 75%;
}
.contact .item {
  margin-bottom: 30px;
  text-align: center;
}
.contact .item:hover .icon {
  background: #1c1c1c;
  color: #eee;
}
.contact .buton{
    margin-left: 10px;
}
.contact .item .icon {
  font-size: 25px;
  margin-bottom: 15px;
  width: 60px;
  height: 60px;
  display: inline-block;
  line-height: 60px;
  background: #f4f4f4;
  border-radius: 50%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.contact .item h6 {
  font-weight: 800;
  margin-bottom: 10px;
  font-size: 1.4rem;
}
.contact .form input[type="text"],
.contact .form input[type="email"],
.contact .form textarea {
  width: 100%;
  outline: none;
  border: 0;
  font-size: 1.1rem;
  border-radius: 5px;
  padding: 10px;
  background: #f4f4f4;
  margin: 10px;
}
.contact .form textarea {
  height: 160px;
  max-height: 160px;
  max-width: 100%;
}
.contact .form .buton {
  padding: 10px 40px;
}
@media (min-width: 0px) and (max-width: 767px){
    .contact{
        height: 110vh;
    }
}
</style>