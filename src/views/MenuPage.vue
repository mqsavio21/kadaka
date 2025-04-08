<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import LoadingScreen from '../components/LoadingScreen.vue'

const router = useRouter()
const showContent = ref(false)
const activeCategory = ref('food')
const slidePositions = ref({}) // Track slide position for each category
const isMobileMenuOpen = ref(false)

const categories = [
  { id: 'food', name: 'Food' },
  { id: 'beverages', name: 'Beverages' }
]

const menuItems = ref([
  // Food Categories
  {
    name: 'Pizza ',
    category: 'food',
    subcategory: 'pizza',
    image: '/images/pizza.png',
    description: 'Choice of: american (thick) / italian (thin crust)',
    items: [
      { name: 'Turn Over Cheese', description: 'Folded pizza filled with premium cheese blend' },
      { name: 'Meat Feast', description: 'Loaded with various premium meats and cheese' },
      { name: 'Chicken Matah 🌶️', description: 'Indonesian-inspired pizza with spicy Balinese matah chicken' },
      { name: 'Sweet Fruit Pizza', description: 'Unique dessert pizza topped with fresh seasonal fruits' }
    ]
  },
  {
    name: 'Western',
    category: 'food',
    subcategory: 'western',
    image: '/images/western.png',
    items: [
      { name: 'English Breakfast', description: 'Classic English breakfast with eggs, sausages, and sides' },
      { name: 'Chicken Steak', description: 'Grilled chicken steak served with special sauce' }
    ]
  },
  {
    name: 'Pasta',
    category: 'food',
    subcategory: 'pasta',
    image: '/images/pasta.png',
    items: [
      { name: 'Fettucine Cream Mushroom', description: 'Creamy fettucine pasta with fresh mushrooms' },
      { name: 'Fettucine Carbonara', description: 'Classic carbonara with creamy sauce' },
      { name: 'Spaghetti Bolognese', description: 'Traditional meat sauce spaghetti' },
      { name: 'Spicy Oil 🌶️', description: 'Aglio olio style pasta with spicy kick' }
    ]
  },
  {
    name: 'Rice Bowl',
    category: 'food',
    subcategory: 'rice-bowl',
    image: '/images/ricebowl.png',
    description: 'Choice of sauce: blackpepper / matah / mushroom / teriyaki / barbeque',
    items: [
      { name: 'Beef', description: 'Tender sliced beef with your choice of sauce' },
      { name: 'Sei Sapi', description: 'Smoked beef specialty with your choice of sauce' },
      { name: 'Chicken', description: 'Grilled chicken with your choice of sauce' }
    ]
  },
  {
    name: 'Baked Rice',
    category: 'food',
    subcategory: 'baked-rice',
    image: '/images/bakedrice.png',
    items: [
      { name: 'Kadaka (Chicken)', description: 'Our signature baked rice with chicken' },
      { name: 'Beef Mushroom', description: 'Baked rice with beef and mushroom topping' }
    ]
  },
  {
    name: 'Noodles',
    category: 'food',
    subcategory: 'noodles',
    image: '/images/noodles.png',
    items: [
      { name: 'Mie Baso', description: 'Choice of: yamien / kuah (soup)' },
      { name: 'Mie Tom Yam 🌶️', description: 'Spicy Thai-inspired noodle soup' },
      { name: 'Mie Goreng', description: 'Classic Indonesian fried noodles' },
      { name: 'Mie Godog', description: 'Traditional Indonesian boiled noodle soup' }
    ]
  },
  {
    name: 'Regular',
    category: 'food',
    subcategory: 'regular',
    image: '/images/regular.png',
    items: [
      { name: 'Nasi Ayam Komplit', description: 'Complete chicken rice set with all the fixings' },
      { name: 'Nasi Ayam Geprek 🌶️', description: 'Crushed spicy fried chicken with rice' },
      { name: 'Nasi Soto Rempah', description: 'Traditional Indonesian spiced soup with rice' }
    ]
  },
  {
    name: 'Fried Rice',
    category: 'food',
    subcategory: 'fried-rice',
    image: '/images/friedrice.png',
    items: [
      { name: 'Jadoel 👍', description: 'Classic Indonesian fried rice recipe' },
      { name: 'Vaganza', description: 'Special fried rice with premium toppings' },
      { name: 'Kadaka 👍', description: 'Our signature fried rice special' },
      { name: 'Cikur 🌶️', description: 'Spicy fried rice with kencur spice' },
      { name: 'Seafood', description: 'Fried rice with mixed seafood' },
      { name: 'Beef Blackpepper', description: 'Fried rice with black pepper beef' }
    ]
  },
  {
    name: 'Ribs / Iga ',
    category: 'food',
    subcategory: 'ribs',
    image: '/images/ribs.png',
    items: [
      { name: 'Nasi Rendang Iga', description: 'Beef ribs in rich rendang sauce with rice' },
      { name: 'Iga Bakar', description: 'Grilled beef ribs with special sauce' },
      { name: 'Sop Iga', description: 'Traditional Indonesian beef rib soup' }
    ]
  },
  {
    name: 'Snacks',
    category: 'food',
    subcategory: 'snacks',
    image: '/images/snacks.png',
    items: [
      { name: 'Pisang Goreng', description: 'Fried banana fritters' },
      { name: 'Singkong Goreng', description: 'Fried cassava' },
      { name: 'Gehu / Bala-Bala', description: 'Stuffed tofu / vegetable fritters' },
      { name: 'Mendoan', description: 'Thin tempeh fritters' },
      { name: 'Risoles', description: 'Indonesian style spring rolls' },
      { name: 'Samosa', description: 'Triangular pastry with savory filling' },
      { name: 'Roti Bakar', description: 'Grilled bread with choice of: pisang keju / kacang coklat / keju coklat' },
      { name: 'Colenak', description: 'Traditional Sundanese fermented cassava with sweet coconut topping' },
      { name: 'Fries', description: 'Classic french fries' },
      { name: 'Fries & Sauces', description: 'French fries with selection of sauces' },
      { name: 'Cimol', description: 'Tapioca balls snack' },
      { name: 'Baso Ikan Goreng', description: 'Fried fish balls' },
      { name: 'Tahu Crispy Balur 🌶️', description: 'Crispy coated tofu with spicy seasoning' },
      { name: 'Cheese Cake', description: 'Classic creamy cheese cake' },
      { name: 'Dimsum', description: 'Assorted steamed dumplings' }
    ]
  },
  {
    name: 'Sandwich',
    category: 'food',
    subcategory: 'sandwich',
    image: '/images/sandwich.png',
    items: [
      { name: 'Chicken', description: 'Grilled chicken sandwich with fresh vegetables' },
      { name: 'Beef', description: 'Tender beef sandwich with special sauce' }
    ]
  },

  // Beverages Categories
  {
    name: 'Coffee',
    category: 'beverages',
    subcategory: 'coffee',
    image: '/images/coffee.png',
    description: 'Premium coffee selections crafted with care',
    items: [
      { name: 'Es Kopsus Gula Aren', description: 'Special coffee with palm sugar' },
      { name: 'Es Kopsus Pandan', description: 'Special coffee with pandan flavor' },
      { name: 'Espresso', description: 'Choice of: single / double' },
      { name: 'Americano / Long Black', description: 'Choice of: single / double' },
      { name: 'Cappucino', description: 'Classic Italian coffee with steamed milk' },
      { name: 'Cafe Latte', description: 'Espresso with steamed milk' },
      { name: 'Caramel Latte', description: 'Cafe latte with caramel syrup' },
      { name: 'Vanilla Latte', description: 'Cafe latte with vanilla syrup' },
      { name: 'Hazelnut Latte', description: 'Cafe latte with hazelnut syrup' },
      { name: 'Affogato', description: 'Choice of: chocolate / strawberry / vanilla' }
    ]
  },
  {
    name: 'Manual Brew',
    category: 'beverages',
    subcategory: 'manual',
    image: '/images/manualbrew.png',
    description: 'Hand-crafted coffee using traditional brewing methods',
    items: [
      { name: 'True Brew (Tubruk)', description: 'Choice of: robusta / blend' },
      { name: 'True Brew (Tubruk)', description: 'Choice of: arabica natural / wine' },
      { name: 'Vietnam Drip', description: 'Vietnamese style drip coffee' },
      { name: 'V60 / Kalita', description: 'Pour-over coffee' },
      { name: 'Japanese Ice / Lemon', description: 'Japanese-style iced coffee or with lemon' }
    ]
  },
  {
    name: 'Mojitos & Cooler',
    category: 'beverages',
    subcategory: 'mojitos',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop&q=60',
    description: 'Refreshing mocktails and coolers',
    items: [
      { name: 'Kadaka Green Fizz', description: 'Refreshing green fizzy drink' },
      { name: 'Blue Ocean', description: 'Blue-colored refreshing cooler' },
      { name: 'Mojitos', description: 'Choice of: lemon / strawberry / lychee' }
    ]
  },
  {
    name: 'Milkshake',
    category: 'beverages',
    subcategory: 'milkshake',
    image: '/images/milkshake.png',
    description: 'Creamy milkshakes made with premium ice cream',
    items: [
      { name: 'Chocolate', description: 'Rich chocolate milkshake' },
      { name: 'Strawberry', description: 'Fresh strawberry milkshake' },
      { name: 'Vanilla', description: 'Classic vanilla milkshake' }
    ]
  },
  {
    name: 'Non Coffee',
    category: 'beverages',
    subcategory: 'non-coffee',
    image: '/images/noncoffee.png',
    description: 'Variety of non-coffee beverages and traditional drinks',
    items: [
      { name: 'Plain Tea', description: 'Classic plain tea' },
      { name: 'Sweet Tea', description: 'Tea with added sweetener' },
      { name: 'Milk Tea', description: 'Tea with milk' },
      { name: 'Lemon Tea', description: 'Tea with fresh lemon' },
      { name: 'Lychee Tea', description: 'Tea with lychee flavor' },
      { name: 'Red Thai Tea', description: 'Traditional Thai red tea' },
      { name: 'Green Thai Tea', description: 'Traditional Thai green tea' },
      { name: 'Chocolate Original', description: 'Classic hot chocolate' },
      { name: 'Chocolate Hazelnut/Mint', description: 'Choice of: hazelnut or mint flavored chocolate' },
      { name: 'Red Velvet', description: 'Red velvet chocolate drink' },
      { name: 'Bandrek', description: 'Traditional Indonesian ginger drink' },
      { name: 'Bandrek Latte', description: 'Bandrek with steamed milk' },
      { name: 'Lemon Jahe Sereh', description: 'Lemon ginger lemongrass drink' },
      { name: 'Wedang Uwuh', description: 'Traditional Javanese herbal drink' },
      { name: 'Teh Jahe Sereh', description: 'Tea with ginger and lemongrass' },
      { name: 'Air Mineral', description: 'Mineral water' }
    ]
  },
  {
    name: 'Ice Cream',
    category: 'beverages',
    subcategory: 'ice-cream',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800&auto=format&fit=crop&q=60',
    description: 'Premium ice cream with various flavors',
    items: [
      { name: 'Chocolate Ice Cream', description: 'Rich chocolate ice cream' },
      { name: 'Strawberry Ice Cream', description: 'Fresh strawberry ice cream' },
      { name: 'Vanilla Ice Cream', description: 'Classic vanilla ice cream' }
    ]
  },
  {
    name: 'Yoghurt',
    category: 'beverages',
    subcategory: 'yoghurt',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=60',
    description: 'Fresh yoghurt drinks with fruit flavors',
    items: [
      { name: 'Grape Yoghurt', description: 'Fresh yoghurt with grape flavor' },
      { name: 'Strawberry Yoghurt', description: 'Fresh yoghurt with strawberry flavor' },
      { name: 'Lychee Yoghurt', description: 'Fresh yoghurt with lychee flavor' }
    ]
  },
  {
    name: 'Smoothies',
    category: 'beverages',
    subcategory: 'smoothies',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&auto=format&fit=crop&q=60',
    description: 'Creamy smoothies made with yoghurt, fresh fruits, and milk',
    items: [
      { name: 'Grape Smoothie', description: 'Yoghurt + fruit + fresh milk + whip cream on top' },
      { name: 'Strawberry Smoothie', description: 'Yoghurt + fruit + fresh milk + whip cream on top' },
      { name: 'Lychee Smoothie', description: 'Yoghurt + fruit + fresh milk + whip cream on top' }
    ]
  },
  {
    name: 'Juice',
    category: 'beverages',
    subcategory: 'juice',
    image: '/images/juice.jpg',
    description: 'Fresh-squeezed fruit juices',
    items: [
      { name: 'Melon Juice', description: 'Fresh melon juice' },
      { name: 'Buah Naga Juice', description: 'Fresh dragon fruit juice' },
      { name: 'Sirsak Juice', description: 'Fresh soursop juice' },
      { name: 'Strawberry Juice', description: 'Fresh strawberry juice' },
      { name: 'Lychee Juice', description: 'Fresh lychee juice' }
    ]
  }
])

const filteredMenu = computed(() => {
  return menuItems.value.filter(item => item.category === activeCategory.value)
})

const goToHome = () => {
  router.push('/')
}

// Initialize slide positions for categories with many items
const initializeSlidePositions = () => {
  const categoriesWithSlides = ['snacks', 'coffee', 'non-coffee']
  categoriesWithSlides.forEach(category => {
    slidePositions.value[category] = 0
  })
}

// Call initialization when component mounts
initializeSlidePositions()

const moveSlide = (subcategory, direction) => {
  const items = menuItems.value.find(section => section.subcategory === subcategory)?.items || []
  const maxPosition = Math.max(0, Math.ceil(items.length / 5) - 1)
  const newPosition = slidePositions.value[subcategory] + direction
  
  if (newPosition >= 0 && newPosition <= maxPosition) {
    slidePositions.value[subcategory] = newPosition
  }
}

const getVisibleItems = (items, subcategory) => {
  const startIndex = slidePositions.value[subcategory] * 5
  return items.slice(startIndex, startIndex + 5)
}

const handleLoadingComplete = () => {
  showContent.value = true
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
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
                <img src="/images/kadakalogo.png" alt="KOPI NIKMAT" class="h-10 sm:h-14 w-auto" />
              </div>
              <!-- Desktop Menu -->
              <div class="hidden sm:flex items-center space-x-4 sm:space-x-8">
                <div class="flex items-center text-[#8b7355] mr-4">
                  <i class="far fa-clock mr-2"></i>
                  <span>Open 8am - 10pm</span>
                </div>
                <button @click="goToHome" class="text-[#d4a574] hover:text-[#e8c5a3] font-medium text-base sm:text-lg">HOME</button>
                <button @click="goToMenu" class="text-[#d4a574] hover:text-[#e8c5a3] font-medium text-base sm:text-lg">MENU</button>
              </div>
              <!-- Mobile Menu Button -->
              <div class="sm:hidden">
                <button 
                  @click="toggleMobileMenu"
                  class="text-[#d4a574] hover:text-[#e8c5a3] p-2"
                >
                  <i class="fas fa-bars text-2xl"></i>
                </button>
              </div>
            </div>
            <!-- Mobile Menu Dropdown -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform -translate-y-4 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-4 opacity-0"
            >
              <div v-show="isMobileMenuOpen" class="sm:hidden py-2 space-y-2">
                <div class="flex items-center text-[#8b7355] px-4 py-2">
                  <i class="far fa-clock mr-2"></i>
                  <span>Open 8am - 10pm</span>
                </div>
                <button 
                  @click="goToHome" 
                  class="block w-full text-left px-4 py-2 text-[#d4a574] hover:bg-[#3d2f25] transition-colors duration-200"
                >
                  HOME
                </button>
                <button 
                  @click="goToMenu" 
                  class="block w-full text-left px-4 py-2 text-[#d4a574] hover:bg-[#3d2f25] transition-colors duration-200"
                >
                  MENU
                </button>
              </div>
            </Transition>
          </div>
        </nav>

        <!-- Add padding top to account for fixed header -->
        <div class="pt-16 sm:pt-20 min-h-screen bg-[#1a1512]">
          <!-- Category Tabs -->
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <h1 class="text-4xl sm:text-5xl font-bold text-[#d4a574] mb-8 sm:mb-12 text-center font-serif">Our Menu</h1>
            <div class="flex flex-wrap justify-center gap-3">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="activeCategory = category.id"
                :class="[
                  'px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 border',
                  activeCategory === category.id
                    ? 'bg-[#3d2f25] text-[#d4a574] border-[#d4a574]'
                    : 'bg-transparent text-[#8b7355] border-[#3d2f25] hover:border-[#d4a574] hover:text-[#d4a574]'
                ]"
              >
                {{ category.name }}
              </button>
            </div>
          </div>

          <!-- Menu Grid -->
          <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="space-y-12 sm:space-y-16">
              <div v-for="section in filteredMenu" :key="section.name" class="space-y-6 sm:space-y-8">
                <h2 class="text-2xl sm:text-3xl font-serif text-[#d4a574] border-b border-[#3d2f25] pb-4">{{ section.name }}</h2>
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                  <!-- Category Description with Image (Left Column) -->
                  <div class="lg:col-span-5">
                    <div class="bg-[#2a211c] rounded-lg overflow-hidden border border-[#3d2f25] transform hover:scale-105 transition duration-300">
                      <div v-if="section.image" class="relative w-full pb-[75%] sm:pb-[100%]">
                        <img 
                          :src="section.image" 
                          :alt="section.name" 
                          class="absolute inset-0 w-full h-full object-cover" 
                        />
                      </div>
                      <div class="p-4 sm:p-6">
                        <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-2 sm:mb-3">{{ section.name }}</h3>
                        <p class="text-[#8b7355] text-base sm:text-lg">
                          {{ 
                            section.subcategory === 'pizza' ? 'Discover our artisanal pizzas with Choice of thick American style or thin Italian crust including premium toppings.' :
                            section.subcategory === 'western' ? 'Classic Western dishes with our unique Kadaka twist.' :
                            section.subcategory === 'pasta' ? 'Fresh pasta dishes prepared with authentic recipes and premium ingredients.' :
                            section.subcategory === 'rice-bowl' ? 'Flavorful rice bowls with your choice of protein and signature sauces: blackpepper/ matah/ mushroom/ teriyaki/ barbeque.' :
                            section.subcategory === 'baked-rice' ? 'Comforting baked rice dishes topped with premium ingredients.' :
                            section.subcategory === 'noodles' ? 'Traditional and fusion noodle dishes to satisfy your cravings.' :
                            section.subcategory === 'regular' ? 'Classic Indonesian rice dishes with authentic flavors and generous portions.' :
                            section.subcategory === 'fried-rice' ? 'Signature fried rice variations with premium ingredients and special seasonings.' :
                            section.subcategory === 'ribs' ? 'Tender and flavorful beef ribs prepared in various traditional and modern styles.' :
                            section.subcategory === 'snacks' ? 'A delightful selection of traditional Indonesian snacks and modern favorites.' :
                            section.subcategory === 'sandwich' ? 'Fresh and hearty sandwiches made with premium ingredients.' :
                            section.subcategory === 'coffee' ? 'Premium coffee selections crafted with care, featuring both classic and specialty drinks.' :
                            section.subcategory === 'manual' ? 'Hand-crafted coffee using traditional brewing methods for the perfect cup.' :
                            section.subcategory === 'mojitos' ? 'Refreshing mocktails and coolers perfect for any time of day.' :
                            section.subcategory === 'milkshake' ? 'Creamy milkshakes made with premium ice cream and fresh ingredients.' :
                            section.subcategory === 'non-coffee' ? 'A diverse selection of traditional and modern non-coffee beverages.' :
                            section.subcategory === 'ice-cream' ? 'Premium ice cream with various flavors and toppings.' :
                            section.subcategory === 'yoghurt' ? 'Fresh yoghurt drinks with natural fruit flavors.' :
                            section.subcategory === 'smoothies' ? 'Creamy smoothies made with yoghurt, fresh fruits, and milk.' :
                            section.subcategory === 'juice' ? 'Fresh-squeezed fruit juices made with premium ingredients.' :
                            'Explore our carefully crafted menu items.'
                          }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Full Menu Items List (Right Column) -->
                  <div class="lg:col-span-7">
                    <div v-if="['snacks', 'coffee', 'non-coffee'].includes(section.subcategory)" class="relative">
                      <!-- Previous Button -->
                      <button 
                        v-if="slidePositions[section.subcategory] > 0"
                        @click="moveSlide(section.subcategory, -1)" 
                        class="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 z-10 bg-[#3d2f25] text-[#d4a574] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#4a3930] transition duration-300 shadow-lg"
                      >
                        <i class="fas fa-chevron-left"></i>
                      </button>

                      <!-- Menu Items -->
                      <div class="space-y-3 sm:space-y-4 px-2 sm:px-0">
                        <div 
                          v-for="item in getVisibleItems(section.items, section.subcategory)" 
                          :key="item.name"
                          class="bg-[#2a211c] rounded-lg p-4 sm:p-6 border border-[#3d2f25] hover:border-[#d4a574] transition-colors duration-300"
                        >
                          <h3 class="text-lg sm:text-xl font-serif text-[#d4a574] mb-2">{{ item.name }}</h3>
                          <p class="text-[#8b7355] text-sm sm:text-base">{{ item.description }}</p>
                        </div>
                      </div>

                      <!-- Next Button -->
                      <button 
                        v-if="slidePositions[section.subcategory] < Math.ceil(section.items.length / 5) - 1"
                        @click="moveSlide(section.subcategory, 1)" 
                        class="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 z-10 bg-[#3d2f25] text-[#d4a574] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#4a3930] transition duration-300 shadow-lg"
                      >
                        <i class="fas fa-chevron-right"></i>
                      </button>
                    </div>

                    <!-- Regular display for other categories -->
                    <div v-else class="space-y-3 sm:space-y-4">
                      <div 
                        v-for="item in section.items" 
                        :key="item.name"
                        class="bg-[#2a211c] rounded-lg p-4 sm:p-6 border border-[#3d2f25] hover:border-[#d4a574] transition-colors duration-300"
                      >
                        <h3 class="text-lg sm:text-xl font-serif text-[#d4a574] mb-2">{{ item.name }}</h3>
                        <p class="text-[#8b7355] text-sm sm:text-base">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <!-- Back to Home Button -->
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
            <button
              @click="goToHome"
              class="bg-[#3d2f25] text-[#d4a574] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-serif hover:bg-[#4a3930] transition duration-300 uppercase border border-[#d4a574]"
            >
              Back to Home
            </button>
          </div>

          <!-- Footer -->
          <footer class="bg-[#1a1512] text-[#8b7355] py-12 sm:py-16 px-4 border-t border-[#3d2f25]">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <!-- Menu Section -->
              <div>
                <h3 class="text-xl sm:text-2xl font-serif text-[#d4a574] mb-4 sm:mb-6">MENU</h3>
                <ul class="space-y-2 sm:space-y-3">
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
            <div class="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#3d2f25]">
              <div class="flex flex-col sm:flex-row justify-between items-center">
                <p class="text-xs sm:text-sm">Kadaka. ©2025 All Rights Reserved</p>
                <div class="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
                  <a href="https://www.instagram.com/kadaka_cafe/" target="_blank" rel="noopener noreferrer" class="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300">
                    <i class="fab fa-instagram text-lg sm:text-xl"></i>
                  </a>
                  <a href="https://gofood.co.id/bandung/restaurant/kadaka-cafe-resto-patuha-1a4763af-6086-4286-9935-60208bc5934e" target="_blank" rel="noopener noreferrer" class="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300">
                    <i class="fas fa-motorcycle text-lg sm:text-xl"></i>
                  </a>
                  <a href="https://pergikuliner.com/restaurants/bandung/kadaka-cafeteria-gatot-subroto" target="_blank" rel="noopener noreferrer" class="text-[#8b7355] hover:text-[#d4a574] transition-colors duration-300">
                    <i class="fas fa-utensils text-lg sm:text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
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