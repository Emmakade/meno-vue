<template>
	<!-- Item 1 -->
	      <router-link
	          to="#"
	          style="text-decoration: none;"
	          @click.prevent="storeProductInfo({
	          name: 'Blower',
	          price: '₦50,000.00',
	          location: ' Nigeria',
	          time: '3 days ago',
	          image: 'https://storage.googleapis.com/a1aa/image/Yd04F-NVeldtKAQTppKEgTwowb8tPZ1BeuuVvBgfsJg.jpg'
	        })">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/Yd04F-NVeldtKAQTppKEgTwowb8tPZ1BeuuVvBgfsJg.jpg" class="card-img-top" alt="Blower">
	                  <div class="card-body">
	                      <h5 class="card-title">Blower</h5>
	                      <p class="card-text text-success fw-bold txt">₦50,000.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Nigeria</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 3 days ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, '14 inches blended wig', '$35.00', 'Nicosia, Cyprus', '1 week ago', 'https://storage.googleapis.com/a1aa/image/56D68JzuyXBaGCCOO8sWta15LcWvQFdkI1fG80k3uBU.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/56D68JzuyXBaGCCOO8sWta15LcWvQFdkI1fG80k3uBU.jpg" class="card-img-top" alt="14 inches blended wig">
	                  <div class="card-body">
	                      <h5 class="card-title">14 inches blended wig</h5>
	                      <p class="card-text text-success fw-bold txt">$35.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Nicosia, Cyprus</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 1 week ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 3 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, '24 inches wig available f...', '$36.00', 'Nicosia, Cyprus', '1 week ago', 'https://storage.googleapis.com/a1aa/image/U1swvxdIWgPDjxTyW4eFLZpQ1xrblUfBlItIQZjPS2A.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/U1swvxdIWgPDjxTyW4eFLZpQ1xrblUfBlItIQZjPS2A.jpg" class="card-img-top" alt="24 inches wig available f...">
	                  <div class="card-body">
	                      <h5 class="card-title">24 inches wig available f...</h5>
	                      <p class="card-text text-success fw-bold txt">$36.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Nicosia, Cyprus</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 1 week ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 4 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, '18 inches curly wig avail...', '$38.00', 'Nicosia, Cyprus', '1 week ago', 'https://storage.googleapis.com/a1aa/image/t_hFNMsJPh2mUzjFiQSzQfOMkVAYTZFnwLk2DxS1BCM.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/t_hFNMsJPh2mUzjFiQSzQfOMkVAYTZFnwLk2DxS1BCM.jpg" class="card-img-top" alt="18 inches curly wig avail...">
	                  <div class="card-body">
	                      <h5 class="card-title">18 inches curly wig avail...</h5>
	                      <p class="card-text text-success fw-bold txt">$38.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Nicosia, Cyprus</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 1 week ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 5 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Electric Guitar', '₺3,500.00', 'Lefke', '2 weeks ago', 'https://storage.googleapis.com/a1aa/image/AmGtN-0iEiLmxQD0JLcjs8tVslFw35Ai0kDnY_NcFzE.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/AmGtN-0iEiLmxQD0JLcjs8tVslFw35Ai0kDnY_NcFzE.jpg" class="card-img-top" alt="Electric Guitar">
	                  <div class="card-body">
	                      <h5 class="card-title">Electric Guitar</h5>
	                      <p class="card-text text-success fw-bold txt">₺3,500.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 2 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 6 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Winter Jacket', '₺200.00', '4RJ3+255, Laü Lefke Yolu,...', '2 weeks ago', 'https://storage.googleapis.com/a1aa/image/aEjg_W3IFED9vjnn6EZ3WAy43o-8VzBLuE4XheR7GsU.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/aEjg_W3IFED9vjnn6EZ3WAy43o-8VzBLuE4XheR7GsU.jpg" class="card-img-top" alt="Winter Jacket">
	                  <div class="card-body">
	                      <h5 class="card-title">Winter Jacket</h5>
	                      <p class="card-text text-success fw-bold txt">₺200.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> 4RJ3+255, Laü Lefke Yolu,...</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 2 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 7 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Samsung galaxy fold 3', '₺35,000.00', 'Gönyeli', '2 weeks ago', 'https://storage.googleapis.com/a1aa/image/Afs-iHy68BfWLfbW8jTw8KYm-2fbQmZZQEUa3IaZgWs.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/Afs-iHy68BfWLfbW8jTw8KYm-2fbQmZZQEUa3IaZgWs.jpg" class="card-img-top" alt="Samsung galaxy fold 3">
	                  <div class="card-body">
	                      <h5 class="card-title">Samsung galaxy fold 3</h5>
	                      <p class="card-text text-success fw-bold txt">₺35,000.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Gönyeli</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 2 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 8 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Iphone 11 pro max', '₺11,500.00', 'Lefke', '2 weeks ago', 'https://storage.googleapis.com/a1aa/image/PWdmC5nS3c4RPhEM8uap8bZWDU4CaJKrXqgGdBGUQD8.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/PWdmC5nS3c4RPhEM8uap8bZWDU4CaJKrXqgGdBGUQD8.jpg" class="card-img-top" alt="Iphone 11 pro max">
	                  <div class="card-body">
	                      <h5 class="card-title">Iphone 11 pro max</h5>
	                      <p class="card-text text-success fw-bold txt">₺11,500.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 2 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 9 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Shareable room availabl...', '₺1,000.00', '4RJ3+255, Laü Lefke Yolu,...', '3 weeks ago', 'https://storage.googleapis.com/a1aa/image/RgcTPl0RHrN88i9h-wrQCdpS7roxkYD-fFWfGIuPgAw.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/RgcTPl0RHrN88i9h-wrQCdpS7roxkYD-fFWfGIuPgAw.jpg" class="card-img-top" alt="Shareable room availabl...">
	                  <div class="card-body">
	                      <h5 class="card-title">Shareable room availabl...</h5>
	                      <p class="card-text text-success fw-bold txt">₺1,000.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> 4RJ3+255, Laü Lefke Yolu,...</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 3 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 10 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'A room available in a 2+1', '₺2,000.00', '4RJ3+255, Laü Lefke Yolu,...', '3 weeks ago', 'https://storage.googleapis.com/a1aa/image/ShXuL1SX73r4FAtxz7du4jem6A6DLoLkKO0SRDXYJuQ.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/ShXuL1SX73r4FAtxz7du4jem6A6DLoLkKO0SRDXYJuQ.jpg" class="card-img-top" alt="A room available in a 2+1">
	                  <div class="card-body">
	                      <h5 class="card-title">A room available in a 2+1</h5>
	                      <p class="card-text text-success fw-bold txt">₺2,000.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> 4RJ3+255, Laü Lefke Yolu,...</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 3 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 11 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Hp Deskjet 2135', '₺1,000.00', 'Atatürk Caddesi, Hamitk...', '3 weeks ago', 'https://storage.googleapis.com/a1aa/image/8Ki6tzZLNROCGS2oPLdWwgogd2uRaoed3DRN823gGfs.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/8Ki6tzZLNROCGS2oPLdWwgogd2uRaoed3DRN823gGfs.jpg" class="card-img-top" alt="Hp Deskjet 2135">
	                  <div class="card-body">
	                      <h5 class="card-title">Hp Deskjet 2135</h5>
	                      <p class="card-text text-success fw-bold txt">₺1,000.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Atatürk Caddesi, Hamitk...</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 3 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 12 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Arzum Hera 1600 vacuum', '₺1,500.00', 'Okmar 2 Cemal Hamit Sk...', '3 weeks ago', 'https://storage.googleapis.com/a1aa/image/gAePlOotXLla0bTmU7v4unfFm--VLpMFUeDcos7-06I.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/gAePlOotXLla0bTmU7v4unfFm--VLpMFUeDcos7-06I.jpg" class="card-img-top" alt="Arzum Hera 1600 vacuum">
	                  <div class="card-body">
	                      <h5 class="card-title">Arzum Hera 1600 vacuum</h5>
	                      <p class="card-text text-success fw-bold txt">₺1,500.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Okmar 2 Cemal Hamit Sk...</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 3 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 13 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Samsung Galaxy A54', 'Contact for price', 'Lefke', '3 weeks ago', 'https://storage.googleapis.com/a1aa/image/9NUSROk1ZcJm8450eMLduZazXVhUcziW6TbiCf1zkfQ.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/9NUSROk1ZcJm8450eMLduZazXVhUcziW6TbiCf1zkfQ.jpg" class="card-img-top" alt="Samsung Galaxy A54">
	                  <div class="card-body">
	                      <h5 class="card-title">Samsung Galaxy A54</h5>
	                      <p class="card-text text-success fw-bold txt">Contact for price</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 3 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 14 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'French tea/coffee press ...', '₺800.00', 'Lefke', '4 weeks ago', 'https://storage.googleapis.com/a1aa/image/aRLM1950TxOraIS1UkZZCDEj57G8IkmNbEk_4fDQTEI.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/aRLM1950TxOraIS1UkZZCDEj57G8IkmNbEk_4fDQTEI.jpg" class="card-img-top" alt="French tea/coffee press ...">
	                  <div class="card-body">
	                      <h5 class="card-title">French tea/coffee press ...</h5>
	                      <p class="card-text text-success fw-bold txt">₺800.00</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 4 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
	      <!-- Item 15 -->
	      <router-link to="/product-details" style="text-decoration: none;" onclick="storeProductInfo(event, 'Samsung Galaxy A54', 'Contact for price', 'Lefke', '3 weeks ago', 'https://storage.googleapis.com/a1aa/image/9NUSROk1ZcJm8450eMLduZazXVhUcziW6TbiCf1zkfQ.jpg')">
	          <div class="col">
	              <div class="card item-card h-100">
	                  <img src="https://storage.googleapis.com/a1aa/image/9NUSROk1ZcJm8450eMLduZazXVhUcziW6TbiCf1zkfQ.jpg" class="card-img-top" alt="Samsung Galaxy A54">
	                  <div class="card-body">
	                      <h5 class="card-title">Samsung Galaxy A54</h5>
	                      <p class="card-text text-success fw-bold txt">Contact for price</p>
	                      <p class="card-text text-muted"><i class="fas fa-map-marker-alt"></i> Lefke</p>
	                      <p class="card-text text-muted"><i class="fas fa-clock"></i> 3 weeks ago</p>
	                  </div>
	              </div>
	          </div>
	      </router-link>
</template>

<script>
export default {
	props: {
		storeProductInfo: {
			type: Function,
			required: true
		}
	}
}
</script>
