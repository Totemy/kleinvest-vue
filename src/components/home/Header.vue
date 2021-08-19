<template>
  <div>
    <nav class="navbar navbar-expand-lg px-lg-0">
      <h3>BrandName</h3>
      <button class="navbar-toggler"><span class="navbar-toggler-icon btn-search"></span></button>
      <button class="navbar-toggler"><span class="navbar-toggler-icon btn-shop"></span></button>
      <button
        class="navbar-toggler"
        type="button"
        @click.prevent="isOpenNavbar = !isOpenNavbar"
      >
        <span class="navbar-toggler-icon btn-burger"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isOpenNavbar }">
        <ul
          class="navbar-nav ml-lg-auto"
          @click.prevent="isOpenNavbar = !isOpenNavbar"
        >
          <li class="nav-item">
            <div class="nav-link">Home</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">Product</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">Pricing</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">Contact</div>
          </li>
        </ul>
        <div class="navbar-nav ml-lg-auto">
          <div class="nav-item login">Login</div>
          <button class="nav-item btn btn-buy login-btn">
            Become a member
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpenNavbar: false
    };
  }
};
</script>
