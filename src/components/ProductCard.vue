<template>
  <div
  :to="'#'"
  style="text-decoration: none"
  @click.prevent="storeProductInfo(product)">
    <div class="col">
      <div class="card item-card h-100">
        <img :src="product.image" class="card-img-top" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text text-success fw-bold txt">{{ product.price }}</p>
          <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> {{ product.location }}</p>
          <p class="card-text text-muted"><i class="fas fa-clock"></i> {{ product.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    storeProductInfo (product) {
      localStorage.setItem('selectedProduct', JSON.stringify(product))
      this.$router.push({ name: 'ProductDetails', params: { products: [product] } })
    }
  }
}
</script>
