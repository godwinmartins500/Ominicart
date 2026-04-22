import { useRef } from 'react'
import { GiMeat, GiPlantRoots } from 'react-icons/gi'
import {
  MdOutdoorGrill, MdHouse, MdDirectionsCar,
  MdKitchen, MdElectricBolt, MdCheckroom, MdAddShoppingCart
} from 'react-icons/md'
import './ProductSections.css'

/* ─────────────────────────────────────────────
   Category meta (colours/icons match CategoryStrip)
───────────────────────────────────────────── */
const CATEGORY_META = {
  'Raw Food': {
    icon: GiMeat,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #16a34a, #4ade80)',
      '--cat-shadow':   'rgba(22,163,74,0.3)',
      '--cat-border':   'rgba(74,222,128,0.35)',
    },
  },
  'Cooked Food': {
    icon: MdOutdoorGrill,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #ea580c, #fb923c)',
      '--cat-shadow':   'rgba(234,88,12,0.3)',
      '--cat-border':   'rgba(251,146,60,0.35)',
    },
  },
  'Houses': {
    icon: MdHouse,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
      '--cat-shadow':   'rgba(30,58,138,0.35)',
      '--cat-border':   'rgba(59,130,246,0.35)',
    },
  },
  'Cars': {
    icon: MdDirectionsCar,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #7c3aed, #a78bfa)',
      '--cat-shadow':   'rgba(124,58,237,0.3)',
      '--cat-border':   'rgba(167,139,250,0.35)',
    },
  },
  'Kitchen Utensils': {
    icon: MdKitchen,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #be185d, #ec4899)',
      '--cat-shadow':   'rgba(190,24,93,0.3)',
      '--cat-border':   'rgba(236,72,153,0.35)',
    },
  },
  'Electronics': {
    icon: MdElectricBolt,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #0891b2, #22d3ee)',
      '--cat-shadow':   'rgba(8,145,178,0.3)',
      '--cat-border':   'rgba(34,211,238,0.35)',
    },
  },
  'Fashion': {
    icon: MdCheckroom,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #b45309, #fbbf24)',
      '--cat-shadow':   'rgba(180,83,9,0.3)',
      '--cat-border':   'rgba(251,191,36,0.35)',
    },
  },
  'Fresh Produce': {
    icon: GiPlantRoots,
    style: {
      '--cat-gradient': 'linear-gradient(135deg, #065f46, #34d399)',
      '--cat-shadow':   'rgba(6,95,70,0.3)',
      '--cat-border':   'rgba(52,211,153,0.35)',
    },
  },
}

/* ─────────────────────────────────────────────
   Product data — 10 per category
───────────────────────────────────────────── */
const SECTIONS = [
  {
    category: 'Raw Food',
    count: '240+ items',
    items: [
      { id:1,  name: 'Premium Wagyu Beef A5',     sub: 'Per kg',       price: '₦12,500', badge: 'Best Seller', rating: 5, img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: 'Tilapia Fish (Whole)',       sub: 'Per kg',       price: '₦2,800',  badge: 'Fresh',       rating: 4, img: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: 'Chicken Breast (Boneless)', sub: 'Per 500g',     price: '₦3,500',  badge: 'Popular',     rating: 4, img: 'https://images.unsplash.com/photo-1604503468506-a8da13d11d36?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: 'Goat Meat (Chunks)',        sub: 'Per kg',       price: '₦5,200',  badge: 'New',         rating: 4, img: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: 'Pork Belly Strips',         sub: 'Per 500g',     price: '₦4,100',  badge: null,          rating: 3, img: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: 'Smoked Turkey Wings',       sub: 'Per piece',    price: '₦1,800',  badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1574780745979-e1671516ad04?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: 'Lamb Shoulder Chops',       sub: 'Per kg',       price: '₦8,900',  badge: 'Premium',     rating: 5, img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: 'Snail (Dry Cleaned)',       sub: 'Per dozen',    price: '₦3,200',  badge: null,          rating: 3, img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: 'Catfish (Live)',            sub: 'Per kg',       price: '₦2,100',  badge: 'Live',        rating: 4, img: 'https://images.unsplash.com/photo-1548944604-40b76dd3d7b3?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: 'Bush Meat Assorted',        sub: 'Per pack',     price: '₦6,500',  badge: 'Exotic',      rating: 4, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=70' },
    ],
  },
  {
    category: 'Cooked Food',
    count: '180+ items',
    items: [
      { id:1,  name: 'Party Jollof Rice',         sub: 'Per plate',    price: '₦3,200',  badge: "Chef's Pick", rating: 5, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: 'Egusi Soup + Swallow',      sub: 'Full portion', price: '₦2,800',  badge: 'Popular',     rating: 5, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: 'Grilled Suya (300g)',       sub: 'Per order',    price: '₦2,200',  badge: 'Spicy',       rating: 4, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: 'Pepper Soup (Assorted)',    sub: 'Per bowl',     price: '₦3,500',  badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: 'Fried Rice + Chicken',      sub: 'Per plate',    price: '₦2,600',  badge: 'Combo',       rating: 4, img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: 'Banga Soup + Starch',       sub: 'Full portion', price: '₦3,000',  badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: 'Puff Puff (20 pcs)',        sub: 'Per pack',     price: '₦800',    badge: 'Snack',       rating: 4, img: 'https://images.unsplash.com/photo-1571197119738-773957b0e626?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: 'Shawarma (Chicken)',        sub: 'Per wrap',     price: '₦2,000',  badge: 'Hot',         rating: 4, img: 'https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: 'Moin Moin (6 wraps)',       sub: 'Per order',    price: '₦1,500',  badge: null,          rating: 3, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: 'Nkwobi (Special)',          sub: 'Per pot',      price: '₦4,500',  badge: 'Exclusive',   rating: 5, img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&auto=format&fit=crop&q=70' },
    ],
  },
  {
    category: 'Houses',
    count: '95+ listings',
    items: [
      { id:1,  name: '4-Bed Lekki Duplex',        sub: 'Lekki Phase 1', price: '₦85M',   badge: 'New',         rating: 5, img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: '3-Bed Apartment VI',        sub: 'Victoria Island',price: '₦55M',   badge: 'Hot',         rating: 4, img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: 'Studio Flat Ikeja',         sub: 'Ikeja GRA',    price: '₦12M',    badge: 'Budget',      rating: 3, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: '5-Bed Mansion Ikoyi',       sub: 'Ikoyi',        price: '₦320M',   badge: 'Luxury',      rating: 5, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: '2-Bed Bungalow Surulere',   sub: 'Surulere',     price: '₦28M',    badge: null,          rating: 3, img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: 'Penthouse Eko Atlantic',    sub: 'Eko Atlantic',  price: '₦450M',   badge: 'Premium',     rating: 5, img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: 'Terrace House Ajah',        sub: 'Ajah',         price: '₦42M',    badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: '4-Bed Detached Magodo',     sub: 'Magodo GRA',   price: '₦110M',   badge: 'Spacious',    rating: 4, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: 'Self-Contain Yaba',         sub: 'Yaba',         price: '₦8M',     badge: 'Cheap',       rating: 3, img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: '3-Bed Semi-Detached Osapa', sub: 'Osapa London', price: '₦68M',    badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&auto=format&fit=crop&q=70' },
    ],
  },
  {
    category: 'Cars',
    count: '320+ listings',
    items: [
      { id:1,  name: '2023 Toyota Camry XSE',     sub: 'Tokunbo',      price: '₦28.5M',  badge: 'Clean',       rating: 5, img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: '2022 Lexus RX 350',         sub: 'Foreign Used', price: '₦52M',    badge: 'Luxury',      rating: 5, img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: '2021 Honda Civic Sport',    sub: 'Tokunbo',      price: '₦18M',    badge: 'Popular',     rating: 4, img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: '2020 Mercedes C300',        sub: 'Foreign Used', price: '₦45M',    badge: 'Hot',         rating: 5, img: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: '2019 Toyota Corolla',       sub: 'Nigerian Used',price: '₦11M',    badge: 'Budget',      rating: 3, img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: '2023 BMW X5 xDrive40i',    sub: 'Brand New',    price: '₦125M',   badge: 'New',         rating: 5, img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: '2022 Ford Ranger Raptor',   sub: 'Foreign Used', price: '₦38M',    badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: '2021 Hyundai Tucson',       sub: 'Tokunbo',      price: '₦22M',    badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: '2020 Kia Stinger GT',       sub: 'Foreign Used', price: '₦19M',    badge: 'Sporty',      rating: 4, img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: '2023 Tesla Model 3',        sub: 'Brand New',    price: '₦95M',    badge: 'Electric',    rating: 5, img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&auto=format&fit=crop&q=70' },
    ],
  },
  {
    category: 'Kitchen Utensils',
    count: '410+ items',
    items: [
      { id:1,  name: 'Pro 12-Piece Cookware Set', sub: 'Stainless Steel',price: '₦45,000',badge: 'Bundle',      rating: 5, img: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: 'Cast Iron Skillet 12"',     sub: 'Lodge Brand',  price: '₦18,000', badge: 'Popular',     rating: 5, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: 'Chef Knife Set (7pcs)',     sub: 'German Steel',  price: '₦22,000', badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: 'Stand Mixer 5Qt',           sub: '10-speed',     price: '₦85,000', badge: 'Premium',     rating: 5, img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: 'Air Fryer 5.5L',           sub: 'Digital Timer', price: '₦35,000', badge: 'Hot',         rating: 4, img: 'https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: 'Cutting Board Set (3pcs)',  sub: 'Bamboo',       price: '₦8,500',  badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: 'Blender 1500W',            sub: 'Heavy Duty',   price: '₦28,000', badge: 'Powerful',    rating: 4, img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: 'Mortar & Pestle (Large)',   sub: 'Granite',      price: '₦6,500',  badge: null,          rating: 3, img: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: 'Pressure Cooker 10L',       sub: 'Aluminium',    price: '₦14,000', badge: 'Save Time',   rating: 4, img: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: 'Non-Stick Pot Set (5pcs)',  sub: 'Granite Coat', price: '₦32,000', badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&auto=format&fit=crop&q=70' },
    ],
  },
  {
    category: 'Electronics',
    count: '530+ items',
    items: [
      { id:1,  name: 'Samsung 65" QLED 4K TV',   sub: 'Smart TV',     price: '₦680,000',badge: 'Flash Sale',  rating: 5, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: 'iPhone 15 Pro Max 256GB',   sub: 'Brand New',    price: '₦1.2M',   badge: 'Hot',         rating: 5, img: 'https://images.unsplash.com/photo-1695048132238-9d3de77c26b2?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: 'Sony WH-1000XM5',          sub: 'Noise Cancel', price: '₦185,000',badge: null,          rating: 5, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: 'MacBook Air M2 13"',        sub: '8GB 256GB',    price: '₦980,000',badge: 'Popular',     rating: 5, img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: 'PS5 Digital Edition',       sub: 'With 2 Games', price: '₦420,000',badge: 'Bundle',      rating: 5, img: 'https://images.unsplash.com/photo-1607853202273-232359dbb8b1?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: 'Xiaomi 5000mAh Powerbank', sub: '33W Fast Charge',price: '₦18,000',badge: null,         rating: 4, img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: 'Canon EOS R50 Camera',      sub: 'Mirrorless',   price: '₦550,000',badge: 'Creator',     rating: 5, img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: 'JBL Flip 6 Speaker',        sub: 'Bluetooth',    price: '₦65,000', badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: 'Dell 27" 4K Monitor',       sub: 'USB-C 65W',    price: '₦290,000',badge: 'Work',        rating: 4, img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: 'DJI Mini 4 Pro Drone',      sub: 'With RC2',     price: '₦720,000',badge: 'New',         rating: 5, img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&auto=format&fit=crop&q=70' },
    ],
  },
  {
    category: 'Fashion',
    count: '860+ items',
    items: [
      { id:1,  name: 'Ankara Luxury Blazer',      sub: "Men's",        price: '₦18,000', badge: 'Limited',     rating: 5, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: 'Adire Wrap Dress',          sub: "Women's",      price: '₦12,000', badge: 'Trending',    rating: 4, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: 'Agbada Set (3-piece)',       sub: "Men's",        price: '₦35,000', badge: 'Traditional', rating: 5, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: 'Boubou Lace Kaftan',        sub: "Women's",      price: '₦22,000', badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: 'Leather Oxford Shoes',      sub: 'Size 39-46',   price: '₦28,000', badge: 'Premium',     rating: 4, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: 'Beaded Evening Bag',        sub: "Women's",      price: '₦9,500',  badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: 'Senator Suit (2-piece)',     sub: "Men's",        price: '₦25,000', badge: 'Classic',     rating: 4, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4466?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: 'Kente Print Skirt Set',     sub: "Women's",      price: '₦14,500', badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: 'Lagos Street Cap',          sub: 'Unisex',       price: '₦4,500',  badge: 'Casual',      rating: 3, img: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: 'Gold Plated Gele Set',      sub: "Women's",      price: '₦8,000',  badge: 'Party',       rating: 5, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=70' },
    ],
  },
  {
    category: 'Fresh Produce',
    count: '150+ items',
    items: [
      { id:1,  name: 'Organic Farm Box (15+ veg)', sub: 'Weekly Box',  price: '₦8,500',  badge: 'Farm Direct', rating: 5, img: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&auto=format&fit=crop&q=70' },
      { id:2,  name: 'Sweet Plantain (Bunch)',    sub: 'Per bunch',    price: '₦1,200',  badge: 'Ripe',        rating: 4, img: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&auto=format&fit=crop&q=70' },
      { id:3,  name: 'Garden Eggs (Basket)',      sub: 'Per basket',   price: '₦2,000',  badge: null,          rating: 3, img: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&auto=format&fit=crop&q=70' },
      { id:4,  name: 'Tomato (Basket 18kg)',      sub: 'Plateau State', price: '₦14,000',badge: 'Fresh',       rating: 4, img: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&auto=format&fit=crop&q=70' },
      { id:5,  name: 'Watermelon (Large)',        sub: 'Per piece',    price: '₦3,500',  badge: 'Juicy',       rating: 5, img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&auto=format&fit=crop&q=70' },
      { id:6,  name: 'Pepper Mix (Tatashe+Rodo)', sub: 'Per 5kg',     price: '₦5,500',  badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&auto=format&fit=crop&q=70' },
      { id:7,  name: 'Ugu Leaves (Fresh)',        sub: 'Per bunch',    price: '₦600',    badge: 'Daily',       rating: 4, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=70' },
      { id:8,  name: 'Pawpaw (Medium)',           sub: 'Per piece',    price: '₦800',    badge: null,          rating: 3, img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&auto=format&fit=crop&q=70' },
      { id:9,  name: 'Coconut (Large, 10pcs)',    sub: 'Per dozen',    price: '₦4,000',  badge: null,          rating: 4, img: 'https://images.unsplash.com/photo-1546447143-7d4204f9f8f6?w=400&auto=format&fit=crop&q=70' },
      { id:10, name: 'Bitter Leaf (Washed)',      sub: 'Per 500g pack',price: '₦900',    badge: 'Organic',     rating: 4, img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&auto=format&fit=crop&q=70' },
    ],
  },
]

/* ─────────────────────────────────────────────
   Star Rating helper
───────────────────────────────────────────── */
function Stars({ rating }) {
  return (
    <div className="ps-card-rating">
      {[1,2,3,4,5].map(n => (
        <span key={n} className={`ps-star ${n <= rating ? '' : 'empty'}`}>★</span>
      ))}
      <span className="ps-rating-num">({rating}.0)</span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Single Product Card
───────────────────────────────────────────── */
function ProductCard({ item, catStyle }) {
  return (
    <div className="ps-card" style={catStyle}>
      <div className="ps-img-wrap">
        <img
          src={item.img}
          alt={item.name}
          className="ps-card-img"
          draggable={false}
          loading="lazy"
        />
        {item.badge && <span className="ps-badge">{item.badge}</span>}
      </div>
      <div className="ps-card-body">
        <div className="ps-card-name">{item.name}</div>
        <div className="ps-card-sub">{item.sub}</div>
        <Stars rating={item.rating} />
        <div className="ps-card-footer">
          <span className="ps-card-price">{item.price}</span>
          <button className="ps-card-btn" title="Add to cart">
            <MdAddShoppingCart size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Single Category Section (drag-to-scroll)
───────────────────────────────────────────── */
function CategorySection({ section }) {
  const meta    = CATEGORY_META[section.category]
  const Icon    = meta.icon
  const trackRef = useRef(null)
  const drag    = useRef({ down: false, startX: 0, scrollLeft: 0 })

  const onMouseDown  = (e) => { drag.current = { down: true, startX: e.pageX - trackRef.current.offsetLeft, scrollLeft: trackRef.current.scrollLeft } }
  const onMouseLeave = ()  => { drag.current.down = false }
  const onMouseUp    = ()  => { drag.current.down = false }
  const onMouseMove  = (e) => {
    if (!drag.current.down) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.4
  }

  const slug = section.category.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="product-section">
      {/* Header */}
      <div className="ps-header">
        <div className="ps-title-group">
          <div className="ps-icon-wrap" style={meta.style}>
            <Icon size={18} />
          </div>
          <h2 className="ps-title">
            {section.category}
            <span className="ps-count"> · {section.count}</span>
          </h2>
        </div>
        <div className="ps-header-actions">
          <div className="ps-scroll-arrows">
            <button
              className="ps-arrow-btn"
              onClick={() => trackRef.current.scrollBy({ left: -320, behavior: 'smooth' })}
              aria-label="Scroll left"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="ps-arrow-btn"
              onClick={() => trackRef.current.scrollBy({ left: 320, behavior: 'smooth' })}
              aria-label="Scroll right"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          <a href={`/category/${slug}`} className="ps-see-more">
            See more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="ps-scroll-wrapper">
        <div
          ref={trackRef}
          className="ps-track"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {section.items.map(item => (
            <ProductCard key={item.id} item={item} catStyle={meta.style} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Main Export
───────────────────────────────────────────── */
export default function ProductSections() {
  return (
    <div className="product-sections">
      {SECTIONS.map(section => (
        <CategorySection key={section.category} section={section} />
      ))}
    </div>
  )
}