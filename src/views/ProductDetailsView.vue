<template>
    <main class="container py-4">
        <button class="btn btn-link text-secondary mb-4"  @click="handleBackButton" style="border: none; text-decoration: none;">
            <i class="fas fa-arrow-left"></i> Back
        </button>
        <div class="row" v-if="product">
            <div class="col-lg-7 mt-8">
                <div class="d-flex">
                    <img :src="product.image" class="product-image" alt="Product Image">
                </div>
            </div>
            <div class="col-lg-5">
                <div class="bg-white p-4 product-card d-flex flex-column">
                    <h1 class="h4 font-weight-bold">{{ product.name }}</h1>
                    <p class="text-muted"><i class="fas fa-map-marker-alt" /> {{ product.location }}</p>
                    <p id="product-time" class="text-muted"><i class="fas fa-clock" />{{ product.time }}</p>
                    <p class="h4 text-success font-weight-bold"><i class="fa-solid fa-money-bills" /> {{ product.price }}</p>
                    <p class="text-muted"><i class="fas fa-user" /> Alex</p>
                    <!-- Contact Button (Outside Modal) -->
                    <button class="btn btn-dark btn-block mb-3 mt-auto" data-bs-toggle="modal" data-bs-target="#contactModal">
                        Contact
                    </button>
                    <!-- Social Actions (Like and Share) -->
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-link text-dark">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn btn-link text-dark">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                    <!-- Safety Tips Icon (Outside Modal) -->
                    <p class="text-warning mt-3" data-bs-toggle="modal" data-bs-target="#safetyTipsModal">
                        <i class="fas fa-exclamation-triangle"></i> Safety Tips
                    </p>
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    Product Details not found!
                </div>
            </div>
        </div>
        <!-- Contact Modal -->
        <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contactModalLabel">Contact</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Contact Info will be inserted here -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Safety Tips Modal -->
        <div class="modal fade" id="safetyTipsModal" tabindex="-1" aria-labelledby="safetyTipsModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="safetyTipsModalLabel" style="cursor: pointer;">Safety Tips</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Safety Tips will be inserted here -->
                    </div>
                </div>
            </div>
        </div>
        <section class="mt-5">
            <h2 class="h4 font-weight-bold mb-4">More From Seller</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white p-3 product-card">
                        <a href="products-details.html" style="text-decoration: none; color: inherit;" onclick="storeProductInfo(event, '24 inches wig available for sale', '$36.00', 'Nicosia, Cyprus', '1 week ago', 'https://storage.googleapis.com/a1aa/image/Ce1vllInmeX39Q7TWU-ApugZqz0MYptfdg2PkZYlbXY.jpg')">
                            <img src="https://storage.googleapis.com/a1aa/image/Ce1vllInmeX39Q7TWU-ApugZqz0MYptfdg2PkZYlbXY.jpg" alt="24 inches wig" class="w-100 mb-2">
                            <h3 class="h6 font-weight-bold text-success">$36.00</h3>
                            <p class="text-muted">24 inches wig available for sale</p>
                            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Nicosia, Cyprus</p>
                            <p class="text-muted"><i class="fas fa-clock"></i> 1 week ago</p>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white p-3 product-card">
                        <a href="products-details.html" style="text-decoration: none; color: inherit;" onclick="storeProductInfo(event, '18 inches curly wig available for sale', '$38.00', 'Nicosia, Cyprus', '1 week ago', 'https://storage.googleapis.com/a1aa/image/zHtix75mGYzRro5_pje1NzkH5qOGWAVzupOrO6Xf4RA.jpg')">
                            <img src="https://storage.googleapis.com/a1aa/image/zHtix75mGYzRro5_pje1NzkH5qOGWAVzupOrO6Xf4RA.jpg" alt="18 inches curly wig" class="w-100 mb-2">
                            <h3 class="h6 font-weight-bold text-success">$38.00</h3>
                            <p class="text-muted">18 inches curly wig available for sale</p>
                            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Nicosia, Cyprus</p>
                            <p class="text-muted"><i class="fas fa-clock"></i> 1 week ago</p>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white p-3 product-card">
                        <a href="products-details.html" style="text-decoration: none; color: inherit;" onclick="storeProductInfo(event, 'iPhone 11 pro max', '₺11,500.00', 'Lefke', '2 weeks ago', 'https://storage.googleapis.com/a1aa/image/3YGWoq6hNM5RpBbhVp1bsKVTRTO2lLSbEb650MEe10o.jpg')">
                            <img src="https://storage.googleapis.com/a1aa/image/3YGWoq6hNM5RpBbhVp1bsKVTRTO2lLSbEb650MEe10o.jpg" alt="iPhone 11 pro max" class="w-100 mb-2">
                            <h3 class="h6 font-weight-bold text-success">₺11,500.00</h3>
                            <p class="text-muted">iPhone 11 pro max</p>
                            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
                            <p class="text-muted"><i class="fas fa-clock"></i> 2 weeks ago</p>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white p-3 product-card">
                        <a href="products-details.html" style="text-decoration: none; color: inherit;" onclick="storeProductInfo(event, 'Samsung Galaxy A54', 'Contact for price', 'Lefke', '3 weeks ago', 'https://storage.googleapis.com/a1aa/image/PQ-7JErFMrJ_H-plDYjFIJ8vdb0hrl71bFzsfdqjzaU.jpg')">
                            <img src="https://storage.googleapis.com/a1aa/image/PQ-7JErFMrJ_H-plDYjFIJ8vdb0hrl71bFzsfdqjzaU.jpg" alt="Samsung Galaxy A54" class="w-100 mb-2">
                            <h3 class="h6 font-weight-bold text-success">Contact for price</h3>
                            <p class="text-muted">Samsung Galaxy A54</p>
                            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
                            <p class="text-muted"><i class="fas fa-clock"></i> 3 weeks ago</p>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white p-3 product-card">
                        <a href="products-details.html" style="text-decoration: none; color: inherit;" onclick="storeProductInfo(event, 'Samsung Galaxy S10 Plus', 'Contact for price', 'Lefke', '1 month ago', 'https://storage.googleapis.com/a1aa/image/0zwBSowXyhiltIW_259pgj82H1Vkw9NuVh7MhsdYX6M.jpg')">
                            <img src="https://storage.googleapis.com/a1aa/image/0zwBSowXyhiltIW_259pgj82H1Vkw9NuVh7MhsdYX6M.jpg" alt="Samsung Galaxy S10 Plus" class="w-100 mb-2">
                            <h3 class="h6 font-weight-bold text-success">Contact for price</h3>
                            <p class="text-muted">Samsung Galaxy S10 Plus</p>
                            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
                            <p class="text-muted"><i class="fas fa-clock"></i> 1 month ago</p>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="bg-white p-3 product-card">
                        <a href="products-details.html" style="text-decoration: none; color: inherit;" onclick="storeProductInfo(event, 'iPhone 15 Pro max', '₺41,000.00', 'Lefke', '1 month ago', 'https://storage.googleapis.com/a1aa/image/lFAY3vLBDQv7dPa9-tRufpRc_GFEplrbhBJKqq9HRag.jpg')">
                            <img src="https://storage.googleapis.com/a1aa/image/lFAY3vLBDQv7dPa9-tRufpRc_GFEplrbhBJKqq9HRag.jpg" alt="iPhone 15 Pro max" class="w-100 mb-2">
                            <h3 class="h6 font-weight-bold text-success">₺41,000.00</h3>
                            <p class="text-muted">iPhone 15 Pro max</p>
                            <p class="text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
                            <p class="text-muted"><i class="fas fa-clock"></i> 1 month ago</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { ref, onMounted } from 'vue'

export default {
  setup () {
    const product = ref(null)

    onMounted(() => {
      const storedProduct = localStorage.getItem('selectedProduct')
      if (storedProduct) {
        product.value = JSON.parse(storedProduct)
        console.log(product.value, 'product')
      }
    })

    return { product }
  },
  methods: {
    handleBackButton () {
      localStorage.clear()
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.product-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
.product-card {
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    height: 100%;
}
.product-card img {
    border-radius: 0.5rem;
}
.product-card h3 {
    font-size: 1.25rem;
}
.product-card p {
    font-size: 0.875rem;
}
.header-logo {
    height: 40px;
}
.header-avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.header-avatar-badge {
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: white;
    font-size: 0.75rem;
    border-radius: 50%;
    padding: 0.25rem;
}

/* Dark Mode Styles */
.dark-mode {
    background-color: #121212;
    color: #e0e0e0;
}

.dark-mode .bg-white {
    background-color: #1e1e1e !important;
}

.dark-mode .text-dark {
    color: #e0e0e0 !important;
}

.dark-mode .text-muted {
    color: #b0b0b0 !important;
}

.dark-mode .product-card {
    background-color: #1e1e1e;
    box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.1);
}

.dark-mode .navbar,
.dark-mode .navbar-light {
    background-color: #1e1e1e !important;
    border-bottom: 1px solid #333;
}

.dark-mode .navbar-light .navbar-nav .nav-link {
    color: #e0e0e0 !important;
}

.dark-mode .btn-dark {
    background-color: #333;
    border-color: #444;
}

.dark-mode .btn-dark:hover {
    background-color: #444;
}

.dark-mode .btn-link {
    color: #bbb !important;
}

.dark-mode .header-avatar-badge {
    background-color: #ff4444;
}

.dark-mode .modal-content {
    background-color: #222;
    color: #e0e0e0;
}

.dark-mode .modal-header {
    border-bottom: 1px solid #444;
}

.dark-mode .modal-footer {
    border-top: 1px solid #444;
}

.dark-mode .dropdown-menu {
    background-color: #222;
    border-color: #444;
}

.dark-mode .dropdown-item {
    color: #ddd;
}

.dark-mode .dropdown-item:hover {
    background-color: #333;
}

.dropdown-menu {
    display: none;
    position: absolute;
    left: -230px;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.dropdown-menu.show {
    display: block;
}
</style>
