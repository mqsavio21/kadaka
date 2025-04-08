<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LoadingScreen from '../components/LoadingScreen.vue'

const router = useRouter()
const showContent = ref(false)

const menuHighlights = ref([
  {
    name: 'Signature Coffee',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60',
    description: 'House blend dengan aroma khas dan rasa yang mendalam'
  },
  {
    name: 'Artisan Pizza',
    price: 'Rp 120.000',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60',
    description: 'Pizza dengan topping premium dan adonan yang fresh'
  },
  {
    name: 'Truffle Pasta',
    price: 'Rp 95.000',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&auto=format&fit=crop&q=60',
    description: 'Pasta dengan saus creamy dan aroma truffle yang khas'
  }
])

const goToMenu = () => {
  router.push('/menu')
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const handleLoadingComplete = () => {
  showContent.value = true
}
</script>

<template>
  <div class="min-h-screen bg-[#1a1512]">
    <LoadingScreen @loading-complete="handleLoadingComplete" />
    
    <Transition name="fade">
      <div v-show="showContent">
        <!-- Navigation -->
        <nav class="fixed w-full z-50 bg-[#1a1512]/90 backdrop-blur-sm border-b border-[#3d2f25]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16 sm:h-20">
              <div class="flex-shrink-0">
                <img src="/images/kadakalogo.png" alt="Kadaka Logo" class="h-10 sm:h-14 w-auto" />
              </div>
              <div class="flex items-center space-x-4 sm:space-x-8">
                <div class="hidden sm:flex items-center text-[#8b7355] mr-4">
                  <i class="far fa-clock mr-2"></i>
                  <span>Open 8am - 10pm</span>
                </div>
                <button @click="goToHome" class="text-[#d4a574] hover:text-[#e8c5a3] font-medium text-base sm:text-lg">HOME</button>
                <button @click="goToMenu" class="text-[#d4a574] hover:text-[#e8c5a3] font-medium text-base sm:text-lg">MENU</button>
              </div>
            </div>
          </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="relative min-h-screen">
          <div class="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600&auto=format&fit=crop&q=60" 
              alt="Cafe Background" 
              class="w-full h-full object-cover opacity-40" 
            />
            <div class="absolute inset-0 bg-gradient-to-b from-[#1a1512]/80 via-[#1a1512]/60 to-[#1a1512]"></div>
          </div>
          <div class="relative h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold text-[#d4a574] mb-4 sm:mb-6 font-serif">
              Where Every Cup<br>Tells a Story
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-[#8b7355] mb-8 sm:mb-12 max-w-3xl font-serif">
              Experience the perfect blend of artisanal coffee, homemade comfort food, and cozy atmosphere
            </p>
            <button 
              @click="goToMenu" 
              class="bg-[#3d2f25] text-[#d4a574] px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-serif hover:bg-[#4a3930] transition duration-300 uppercase border border-[#d4a574]"
            >
              Explore Our Menu
            </button>
          </div>
        </section>

        <!-- Menu Section -->
        <section id="gallery" class="py-16 sm:py-20 px-4 bg-[#1a1512]">
          <div class="max-w-6xl mx-auto">
            <div class="flex items-center justify-center mb-16 sm:mb-20">
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
              <div class="w-3 h-3 rounded-full bg-[#d4a574] mx-4"></div>
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
            </div>

            <h2 class="text-2xl sm:text-3xl font-bold text-center text-[#d4a574] mb-3 sm:mb-4 font-serif">Our Menu</h2>
            <p class="text-[#8b7355] text-center mb-8 sm:mb-12 font-serif text-sm sm:text-base">FROM THE BEST INDONESIAN SPECIALTY COFFEE TO HEART-WARMING FOODS</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div class="bg-[#2a211c] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#3d2f25] w-full">
                <div class="aspect-w-16 aspect-h-9">
                  <img src="/images/beans.jpg" alt="Coffee" class="w-full h-full object-cover" />
                </div>
                <div class="p-6 sm:p-8">
                  <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-2 sm:mb-3">OUR BEANS</h3>
                  <p class="text-[#8b7355] text-sm sm:text-lg">Biji kopi grade Specialty Arabica dan Fine Robusta dari 9 perkebunan terbaik Indonesia</p>
                </div>
              </div>
              <div class="bg-[#2a211c] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#3d2f25] w-full">
                <div class="aspect-w-16 aspect-h-9">
                  <img src="/images/leafcoffee.png" alt="Coffee Drinks" class="w-full h-full object-cover" />
                </div>
                <div class="p-6 sm:p-8">
                  <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-2 sm:mb-3">COFFEE-BASED DRINKS</h3>
                  <p class="text-[#8b7355] text-sm sm:text-lg">Dari minuman tradisional berbasis espresso sampai berbagai minuman racikan kopi terkini</p>
                </div>
              </div>
              <div class="bg-[#2a211c] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#3d2f25] w-full">
                <div class="aspect-w-16 aspect-h-9">
                  <img src="/images/cupnonbased.png" alt="Non-Coffee" class="w-full h-full object-cover" />
                </div>
                <div class="p-6 sm:p-8">
                  <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-2 sm:mb-3">NON-COFFEE</h3>
                  <p class="text-[#8b7355] text-sm sm:text-lg">Kami juga memiliki menu non-coffee untuk kamu yang ingin pilihan lain selain kopi dan untuk anak - anak</p>
                </div>
              </div>
              <div class="bg-[#2a211c] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#3d2f25] w-full">
                <div class="aspect-w-16 aspect-h-9">
                  <img src="/images/truffle.png" alt="Food" class="w-full h-full object-cover" />
                </div>
                <div class="p-6 sm:p-8">
                  <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-2 sm:mb-3">FOOD & SNACK</h3>
                  <p class="text-[#8b7355] text-sm sm:text-lg">Berbagai macam makanan ringan sampai makanan utama siap menemani secangkir kopimu</p>
                </div>
              </div>
            </div>
            <div class="text-center mt-8 sm:mt-12">
              <button @click="goToMenu" 
                      class="bg-[#3d2f25] text-[#d4a574] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-serif hover:bg-[#4a3930] transition duration-300 uppercase border border-[#d4a574]">
                View Full Menu
              </button>
            </div>
          </div>
        </section>

        <!-- Location and Time Section -->
        <section id="location" class="py-16 sm:py-20 px-4 bg-[#1a1512]">
          <div class="max-w-6xl mx-auto">
            <div class="flex items-center justify-center mb-16 sm:mb-20">
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
              <div class="w-3 h-3 rounded-full bg-[#d4a574] mx-4"></div>
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
            </div>

            <div class="text-center mb-12 sm:mb-16">
              <h2 class="text-3xl sm:text-4xl font-bold text-[#d4a574] mb-3 sm:mb-4 font-serif">Location & Hours</h2>
              <p class="text-[#8b7355] text-base sm:text-lg font-serif">VISIT US AND EXPERIENCE THE BEST COFFEE IN BANDUNG</p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
              <!-- Info Column -->
              <div class="lg:col-span-2 flex flex-col justify-center space-y-6 sm:space-y-8">
                <div class="bg-[#2a211c] p-6 sm:p-8 rounded-lg border border-[#3d2f25]">
                  <div class="mb-6 sm:mb-8">
                    <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-4 flex items-center">
                      <i class="fas fa-map-marker-alt mr-3"></i>
                      Address
                    </h3>
                    <p class="text-[#8b7355] text-sm sm:text-lg leading-relaxed">
                      Jl. Patuha No.24, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40263
                    </p>
                  </div>
                  <div class="mb-6 sm:mb-8">
                    <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-4 flex items-center">
                      <i class="far fa-clock mr-3"></i>
                      Opening Hours
                    </h3>
                    <p class="text-[#8b7355] text-sm sm:text-lg">Daily: 08.00 - 22.00</p>
                  </div>
                  <div>
                    <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-4 flex items-center">
                      <i class="fas fa-phone-alt mr-3"></i>
                      Contact
                    </h3>
                    <div class="space-y-2">
                      <a href="#" class="block text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300 text-sm sm:text-lg">
                        +6281-6486-3433
                      </a>
                      <a href="#" class="block text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300 text-sm sm:text-lg">
                        +6282-1263-89000
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a href="https://www.google.com/maps/dir//Jl.+Patuha+No.24,+Lkr.+Sel.,+Kec.+Lengkong,+Kota+Bandung,+Jawa+Barat+40263/@-6.9262868,107.5421168,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e68e7e13cfd2341:0xedce9458f3f9b118!2m2!1d107.624526!2d-6.9262955?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-[#3d2f25] text-[#d4a574] rounded-full hover:bg-[#4a3930] transition duration-300 border border-[#d4a574] text-sm sm:text-base">
                  <i class="fas fa-directions mr-2"></i>
                  Get Directions
                </a>
              </div>
              </div>

              <!-- Map Column -->
              <div class="lg:col-span-3">
                <div class="w-full h-[300px] sm:h-[450px] rounded-lg overflow-hidden border border-[#3d2f25] shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.701044351433!2d107.6219437748097!3d-6.926293893073472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7e13cfd2341%3A0xedce9458f3f9b118!2sKadaka%20Cafeteria!5e0!3m2!1sid!2sid!4v1744086575405!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-16 sm:py-20 px-4 bg-[#1a1512]">
          <div class="max-w-6xl mx-auto">
            <div class="flex items-center justify-center mb-16 sm:mb-20">
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
              <div class="w-3 h-3 rounded-full bg-[#d4a574] mx-4"></div>
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
            </div>

            <div class="text-center mb-12 sm:mb-16">
              <h2 class="text-3xl sm:text-4xl font-bold text-[#d4a574] mb-3 sm:mb-4 font-serif">What Our Customers Say</h2>
              <p class="text-[#8b7355] text-base sm:text-lg font-serif">REAL EXPERIENCES FROM OUR VALUED GUESTS</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <!-- Review Card 1 -->
              <div class="bg-[#2a211c] p-6 sm:p-8 rounded-lg border border-[#3d2f25] hover:border-[#d4a574] transition-colors duration-300">
                <div class="mb-4">
                  <h4 class="text-[#d4a574] font-medium mb-2">Nada</h4>
                  <div class="flex text-yellow-400">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <p class="text-[#8b7355] italic">"Selasa malam lumayan ramai. Tempat duduk di dalam penuh, jadi harus duduk diluar di temat smoking area. Pernah datang dan duduk di dalam, nyaman sekali dan unik, interior rumah antik"</p>
              </div>

              <!-- Review Card 2 -->
              <div class="bg-[#2a211c] p-6 sm:p-8 rounded-lg border border-[#3d2f25] hover:border-[#d4a574] transition-colors duration-300">
                <div class="mb-4">
                  <h4 class="text-[#d4a574] font-medium mb-2">Yudha Tenggara</h4>
                  <div class="flex text-yellow-400">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
                <p class="text-[#8b7355] italic">"Disini pizza nya enak!!! Adonannya renyah ga tipis dan ga tebel, pas! jadi ga ganggu dan ga menutupi rasa dari toppingnya!!! Cobain juga PIZZA TURN OVER CHEESE sama Nasi Goreng Kadaka nya, untuk harganya kisaran 25ribuan sampe 50 ribuan, enak di dompet nyaman di lambung...

Tempatnya rumah banget, jd kalau siang lumayan adem, tp jangan lupa pake lotion anti nyamuk kalau sore ke malem"</p>
              </div>

              <!-- Review Card 3 -->
              <div class="bg-[#2a211c] p-6 sm:p-8 rounded-lg border border-[#3d2f25] hover:border-[#d4a574] transition-colors duration-300">
                <div class="mb-4">
                  <h4 class="text-[#d4a574] font-medium mb-2">Agus Rahmatulloh</h4>
                  <div class="flex text-yellow-400">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
                <p class="text-[#8b7355] italic">"Tempat nya lucu banget, cafe dalam rumah. Suka banget sama tata ruangannya berasa kaya dirumah sendiri. Makananya enak dan wangi bgt sampe lupa difoto malah langsung di hap. Terimakasih"</p>
              </div>
            </div>

            <div class="text-center mt-8 sm:mt-12">
              <a href="https://www.google.com/search?sca_esv=65c47c1300141edc&sxsrf=AHTn8zp_RwO1U81-zq7SPu1oLN-FqNQ_4g:1744084748232&q=kadaka+cafe+logo&source=lnms&fbs=ABzOT_CdylbGFQLwfKnnm0mX5nUpHk-y9koetxvABQok_puYO7J7VSP4a4UpTHWdC8zd9I-OLPaFIpSwbFFQueUSmLQztQwBFO1kkwMVM2EQT9fJsW2drCAtuXVc8EPm_zB333vtG_9jFpi9PhwrSODXjo05lInu1Di9Ux-OZlad945YZmy89A2u3UEK7uPFzWOtqSuSDQ1bCugoiJYFyIW5AD9NkqetBHS1QvjVYmDiZSrAelJSAMI&sa=X&ved=2ahUKEwjXo4H_xceMAxXVUGwGHV2JA6MQ0pQJegQIExAB&biw=1528&bih=738&dpr=1.25#lrd=0x2e68e7e13cfd2341:0xedce9458f3f9b118,1,,,," 
                 target="_blank" 
                 class="inline-flex items-center px-8 py-3 bg-[#3d2f25] text-[#d4a574] rounded-full hover:bg-[#4a3930] transition duration-300 border border-[#d4a574]">
                <i class="fab fa-google mr-2"></i>
                View All Reviews
              </a>
            </div>
          </div>
        </section>

        <!-- Gallery Section -->
        <section class="py-16 sm:py-20 px-4 bg-[#1a1512]">
          <div class="max-w-6xl mx-auto">
            <div class="flex items-center justify-center mb-16 sm:mb-20">
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
              <div class="w-3 h-3 rounded-full bg-[#d4a574] mx-4"></div>
              <div class="w-16 sm:w-24 h-px bg-[#3d2f25]"></div>
            </div>

            <div class="text-center mb-12 sm:mb-16">
              <h2 class="text-3xl sm:text-4xl font-bold text-[#d4a574] mb-3 sm:mb-4 font-serif">Our Gallery</h2>
              <p class="text-[#8b7355] text-base sm:text-lg font-serif">GLIMPSES OF OUR COZY SPACE</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              <!-- Gallery Image 1 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery1.png" 
                  alt="Cafe Interior" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Gallery Image 2 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery2.png" 
                  alt="Coffee Preparation" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Gallery Image 3 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery3.png" 
                  alt="Outdoor Seating" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Gallery Image 4 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery4.png" 
                  alt="Food Presentation" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Gallery Image 5 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery5.png" 
                  alt="Coffee Art" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Gallery Image 6 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery6.png" 
                  alt="Cafe Ambiance" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Gallery Image 7 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery7.png" 
                  alt="Dessert Display" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Gallery Image 8 -->
              <div class="relative group overflow-hidden rounded-lg aspect-square transition-all duration-300 hover:shadow-[0_0_15px_#d4a574] hover:-translate-y-1">
                <img 
                  src="/images/gallery8.png" 
                  alt="Evening Atmosphere" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-[#d4a574]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div class="text-center mt-8 sm:mt-12">
              <a 
                href="https://www.instagram.com/kadaka_cafe/" 
                target="_blank" 
                class="inline-flex items-center px-8 py-3 bg-[#3d2f25] text-[#d4a574] rounded-full hover:bg-[#4a3930] transition duration-300 border border-[#d4a574]"
              >
                <i class="fab fa-instagram mr-2"></i>
                Follow Us on Instagram
              </a>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="bg-[#1a1512] text-[#8b7355] py-12 sm:py-16 px-4 border-t border-[#3d2f25]">
          <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <!-- Menu Section -->
            <div>
              <h3 class="text-[#d4a574] text-2xl font-serif mb-6">MENU</h3>
              <ul class="space-y-3">
                <li><a href="/" class="hover:text-[#d4a574] transition-colors duration-300">HOME</a></li>
                <li><a href="/menu" class="hover:text-[#d4a574] transition-colors duration-300">MENU</a></li>
              </ul>
            </div>

            <!-- About Section -->
            <div>
              <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-4 sm:mb-6">ABOUT</h3>
              <p class="text-[#8b7355] text-sm sm:text-base mb-6">
                Kadaka began life back in 2023. Owner Kadaka Team has created an establishment known for its great food and warm welcome. 
                The team has a strong pedigree working with some of Indonesia's top coffee roasters and bringing the best coffee experience to you.
              </p>
            </div>
          </div>

          <!-- Copyright -->
          <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#3d2f25]">
            <div class="flex flex-col md:flex-row justify-between items-center">
              <p class="text-sm">Kadaka. ©2025 All Rights Reserved</p>
              <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="https://www.instagram.com/kadaka_cafe/" target="_blank" rel="noopener noreferrer" class="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300">
                  <i class="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://gofood.co.id/bandung/restaurant/kadaka-cafe-resto-patuha-1a4763af-6086-4286-9935-60208bc5934e" target="_blank" rel="noopener noreferrer" class="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300">
                  <i class="fas fa-motorcycle text-xl"></i>
                </a>
                <a href="https://pergikuliner.com/restaurants/bandung/kadaka-cafeteria-gatot-subroto" target="_blank" rel="noopener noreferrer" class="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300">
                  <i class="fas fa-utensils text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 