<template>
  <div class="container text-center my-5">
    <h1 ref="typewriter" class="display-4 fw-bold text-success">{{ currentText || "\u00A0" }}</h1>
    <div class="input-group search-bar mx-auto my-4 mt-5 d-flex">
      <input type="text" class="form-control w-50 py-3" placeholder="Search for an item, city or a user..."
        id="search-input" v-model="searchQuery">
      <button class="btn btn-outline-success" type="button" @click="searchItem">
        <i class="fas fa-search"></i>
      </button>
      <button class="btn btn-outline-secondary" type="button" @click="toggleFilter">
        <i class="fas fa-filter"></i>
      </button>
    </div>
    <!-- Filter Dropdown (Initially hidden) -->
    <div id="filter-dropdown" class="d-none mt-2">
      <label for="filter-category">Filter by Category:</label>
      <select id="filter-category" class="form-control">
        <option value="">Select a category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="books">Books</option>
        <!-- Add more filter options as needed -->
      </select>
    </div>
    <button class="btn btn-success ms-5 mt-3" @click.prevent="$router.push('/post')"> + Post Items</button>
    <!-- Category buttons -->
    <div class="category-container mt-5">
      <div class="row row-cols-2 row-cols-md-4 g-2 g-md-3 justify-content-left mb-4">
        <button class="btn btn-success text-white col category-btn">All</button>
        <button class="btn btn-outline-secondary col category-btn">Phones</button>
        <button class="btn btn-outline-secondary col category-btn">Shoes</button>
        <button class="btn btn-outline-secondary col category-btn">Food</button>
        <button class="btn btn-outline-secondary col category-btn">Hair</button>
        <button class="btn btn-outline-secondary col category-btn">Exchange</button>
        <button class="btn btn-outline-secondary col category-btn">Cars</button>
        <!-- Hidden buttons -->
        <div id="more-buttons" class="d-none">
          <button class="btn btn-outline-secondary col category-btn">Apartment</button>
          <button class="btn btn-outline-secondary col category-btn">Baby Products</button>
          <button class="btn btn-outline-secondary col category-btn">Beauty</button>
          <button class="btn btn-outline-secondary col category-btn">Books</button>
          <button class="btn btn-outline-secondary col category-btn">Cleaning</button>
          <button class="btn btn-outline-secondary col category-btn">Clothes</button>
        </div>
        <!-- More / Show Less button -->
        <button id="toggle-button" class="btn btn-outline-secondary col category-btn"
          onclick="toggleButtons()">More</button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" @click="goToProductDetails(product)"/>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import products from '@/assets/products.json'
import { useRouter } from 'vue-router'

export default {
  components: {
    ProductCard
  },
  setup () {
    // Typewriter Effect
    const router = useRouter()
    const texts = [
      'Buy Freely, Sell Freely',
      'Buying Made Simple',
      'Selling Made Easier',
      'Where Commerce Lives',
      'Share and Sell Your Products',
      'Discover and Buy Easily'
    ]

    const currentText = ref('\u00A0')
    const isLoading = ref(true)
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    function typeWriter () {
      const text = texts[textIndex]

      currentText.value = text.substring(0, charIndex) || '\u00A0'

      let speed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === text.length) {
        speed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
      }

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1
      setTimeout(typeWriter, speed)
    }

    // Run Typewriter on Mount
    onMounted(() => {
      typeWriter()
      setTimeout(() => {
        isLoading.value = false
      }, 3000) // Simulate loading time
    })

    const goToProductDetails = (product) => {
      router.push({ name: 'ProductDetails', params: { products: [product] } })
      //  console.log(product)
    }

    return {
      currentText,
      products,
      goToProductDetails,
      isLoading
    }
  }
}
</script>

<style scoped>
h1 {
  min-height: 1em
}
</style>
