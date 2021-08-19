<template>
  <div>
    <div class="container">
      <Header />
      <Features />
      <Features2 />
      <Reviews />
      <AboutUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "@/components/home/Header.vue";
import Features from "@/components/home/Features.vue";
import Features2 from "@/components/home/Features2.vue";
import Reviews from "@/components/home/Reviews.vue";
import AboutUs from "@/components/home/AboutUs.vue";
import Pricing from "@/components/home/Pricing.vue";
import Contact from "@/components/home/Contact.vue";
import Footer from "@/components/home/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Features,
    Features2,
    Reviews,
    AboutUs,
    Pricing,
    Contact,
    Footer
  }
};
</script>
