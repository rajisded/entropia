import type { DemoCategory, DemoMenuItem } from '../types';
import { categoryImageSrc, itemImageSrc } from './images';

export const DEMO_CATEGORIES: DemoCategory[] = [
  { id: 'burgers', name: 'Burgers', imageSrc: categoryImageSrc('burgers') },
  { id: 'pizza', name: 'Pizza', imageSrc: categoryImageSrc('pizza') },
  { id: 'wraps', name: 'Wraps', imageSrc: categoryImageSrc('wraps') },
  { id: 'starters', name: 'Starters', imageSrc: categoryImageSrc('starters') },
  { id: 'rice-bowls', name: 'Rice Bowls', imageSrc: categoryImageSrc('rice-bowls') },
  { id: 'combos', name: 'Combos', imageSrc: categoryImageSrc('combos') },
  { id: 'south-indian', name: 'South Indian', imageSrc: categoryImageSrc('south-indian') },
  { id: 'chinese', name: 'Chinese', imageSrc: categoryImageSrc('chinese') },
  { id: 'breads', name: 'Breads', imageSrc: categoryImageSrc('breads') },
  { id: 'drinks', name: 'Drinks', imageSrc: categoryImageSrc('drinks') },
  { id: 'desserts', name: 'Desserts', imageSrc: categoryImageSrc('desserts') },
  { id: 'ice-cream', name: 'Ice Cream', imageSrc: categoryImageSrc('ice-cream') },
];

type ItemSeed = {
  name: string;
  description: string;
  price: number;
  veg: boolean;
};

const CATEGORY_ITEMS: Record<string, ItemSeed[]> = {
  burgers: [
    { name: 'Smoky Paneer Burger', description: 'Grilled paneer, mint chutney, soft bun', price: 189, veg: true },
    { name: 'Chicken Tikka Burger', description: 'Tandoori patty, pickled onion', price: 219, veg: false },
    { name: 'Aloo Tikki Stack', description: 'Crispy aloo patty, tamarind mayo', price: 149, veg: true },
    { name: 'BBQ Lamb Burger', description: 'Slow lamb, cheddar, caramelized onion', price: 279, veg: false },
    { name: 'Veggie Supreme', description: 'Beetroot patty, avocado, sprouts', price: 199, veg: true },
    { name: 'Double Cheese Melt', description: 'Two patties, four cheese layers', price: 249, veg: false },
    { name: 'Mushroom Swiss', description: 'Sautéed mushrooms, Swiss cheese', price: 229, veg: true },
    { name: 'Crispy Fish Burger', description: 'Beer-battered fillet, tartar sauce', price: 259, veg: false },
  ],
  pizza: [
    { name: 'Margherita Classic', description: 'Tomato, fresh mozzarella, basil', price: 299, veg: true },
    { name: 'Farmhouse Veg', description: 'Peppers, corn, olives, mushrooms', price: 349, veg: true },
    { name: 'Pepperoni Feast', description: 'Double pepperoni, oregano', price: 399, veg: false },
    { name: 'Tandoori Chicken', description: 'Spiced chicken, onion, coriander', price: 429, veg: false },
    { name: 'Four Cheese', description: 'Mozzarella, cheddar, parmesan, gouda', price: 379, veg: true },
    { name: 'BBQ Chicken', description: 'Smoky sauce, grilled chicken, jalapeño', price: 449, veg: false },
    { name: 'Paneer Makhani', description: 'Creamy makhani sauce, paneer cubes', price: 369, veg: true },
    { name: 'Mediterranean', description: 'Feta, olives, sun-dried tomato', price: 389, veg: true },
  ],
  wraps: [
    { name: 'Paneer Tikka Wrap', description: 'Mint yogurt, onion salad', price: 169, veg: true },
    { name: 'Chicken Caesar Wrap', description: 'Romaine, parmesan, caesar dressing', price: 189, veg: false },
    { name: 'Falafel Hummus', description: 'Crispy falafel, tahini, pickles', price: 159, veg: true },
    { name: 'Keema Kathi Roll', description: 'Spiced mince, paratha wrap', price: 199, veg: false },
    { name: 'Veggie Crunch', description: 'Lettuce, cucumber, chipotle mayo', price: 149, veg: true },
    { name: 'Grilled Fish Wrap', description: 'Lemon herb fish, slaw', price: 209, veg: false },
    { name: 'BBQ Paneer Wrap', description: 'Smoky paneer, coleslaw', price: 179, veg: true },
    { name: 'Egg Bhurji Roll', description: 'Masala eggs, thin roti', price: 129, veg: false },
  ],
  starters: [
    { name: 'Crispy Fries', description: 'Skin-on fries, peri peri dust', price: 119, veg: true },
    { name: 'Chicken Wings', description: '8 pcs, hot buffalo glaze', price: 249, veg: false },
    { name: 'Paneer Tikka', description: 'Charred cottage cheese, chutney', price: 219, veg: true },
    { name: 'Nachos Supreme', description: 'Cheese sauce, salsa, jalapeños', price: 199, veg: true },
    { name: 'Fish Fingers', description: 'Golden crumb, tartar dip', price: 229, veg: false },
    { name: 'Hara Bhara Kebab', description: 'Spinach, peas, green chutney', price: 189, veg: true },
    { name: 'Onion Rings', description: 'Beer batter, smoky dip', price: 129, veg: true },
    { name: 'Chicken Popcorn', description: 'Bite-sized crispy chicken', price: 179, veg: false },
  ],
  'rice-bowls': [
    { name: 'Butter Chicken Bowl', description: 'Jeera rice, creamy gravy', price: 289, veg: false },
    { name: 'Paneer Makhani Bowl', description: 'Basmati rice, rich tomato gravy', price: 259, veg: true },
    { name: 'Teriyaki Chicken Bowl', description: 'Sticky glaze, sesame, greens', price: 279, veg: false },
    { name: 'Veg Fried Rice', description: 'Wok-tossed rice, soy, spring onion', price: 199, veg: true },
    { name: 'Dal Khichdi Bowl', description: 'Comfort lentils, ghee tadka', price: 179, veg: true },
    { name: 'Thai Green Curry Bowl', description: 'Jasmine rice, coconut curry', price: 269, veg: true },
    { name: 'Egg Curry Rice', description: 'Boiled eggs, homestyle masala', price: 219, veg: false },
    { name: 'Prawn Garlic Rice', description: 'Butter garlic prawns on rice', price: 329, veg: false },
  ],
  combos: [
    { name: 'Family Feast', description: '2 burgers + large fries + 2 drinks', price: 549, veg: false },
    { name: 'Office Lunch Box', description: 'Rice bowl, salad, dessert, drink', price: 299, veg: true },
    { name: 'Kids Happy Meal', description: 'Mini burger, fries, juice', price: 199, veg: false },
    { name: 'Pizza Party Pack', description: 'Medium pizza + garlic bread + 2 drinks', price: 599, veg: true },
    { name: 'Couple Combo', description: '2 wraps + fries + brownie', price: 449, veg: true },
    { name: 'Value Meal', description: 'Burger + fries + soft drink', price: 249, veg: false },
    { name: 'Breakfast Combo', description: 'Paratha, eggs, chai', price: 179, veg: false },
    { name: 'Late Night Snack', description: 'Wings + fries + mocktail', price: 399, veg: false },
  ],
  'south-indian': [
    { name: 'Masala Dosa', description: 'Crisp crepe, potato filling, chutney', price: 149, veg: true },
    { name: 'Idli Sambar (3pc)', description: 'Steamed rice cakes, lentil stew', price: 99, veg: true },
    { name: 'Medu Vada', description: 'Crispy lentil donuts, sambar', price: 109, veg: true },
    { name: 'Uttapam', description: 'Thick dosa, onion & tomato', price: 139, veg: true },
    { name: 'Chicken Chettinad', description: 'Fiery curry, appam pair', price: 279, veg: false },
    { name: 'Filter Coffee', description: 'Strong decoction, frothy milk', price: 59, veg: true },
    { name: 'Pongal', description: 'Ven pongal, ghee, pepper', price: 119, veg: true },
    { name: 'Hyderabadi Biryani', description: 'Dum rice, raita, salan', price: 299, veg: false },
  ],
  chinese: [
    { name: 'Veg Hakka Noodles', description: 'Wok noodles, soy, vegetables', price: 189, veg: true },
    { name: 'Chicken Manchurian', description: 'Crispy balls, tangy gravy', price: 229, veg: false },
    { name: 'Chilli Paneer Dry', description: 'Capsicum, onion, soy glaze', price: 219, veg: true },
    { name: 'Schezwan Fried Rice', description: 'Spicy rice, peppers, garlic', price: 199, veg: true },
    { name: 'Dim Sum Basket', description: 'Steamed dumplings, chilli oil', price: 249, veg: false },
    { name: 'Kung Pao Chicken', description: 'Peanuts, dried chilli, rice', price: 269, veg: false },
    { name: 'Spring Rolls (4pc)', description: 'Crispy veg rolls, sweet chilli', price: 149, veg: true },
    { name: 'Hot & Sour Soup', description: 'Tofu, mushroom, vinegar kick', price: 129, veg: true },
  ],
  breads: [
    { name: 'Butter Naan', description: 'Tandoor naan, brushed butter', price: 59, veg: true },
    { name: 'Garlic Naan', description: 'Chopped garlic, coriander', price: 79, veg: true },
    { name: 'Cheese Naan', description: 'Stuffed mozzarella', price: 99, veg: true },
    { name: 'Tandoori Roti', description: 'Whole wheat, charred spots', price: 39, veg: true },
    { name: 'Laccha Paratha', description: 'Flaky layers, ghee', price: 69, veg: true },
    { name: 'Kulcha Amritsari', description: 'Stuffed potato kulcha', price: 89, veg: true },
    { name: 'Roomali Roti', description: 'Thin handkerchief bread', price: 49, veg: true },
    { name: 'Stuffed Paratha', description: 'Paneer filling, pickle', price: 109, veg: true },
  ],
  drinks: [
    { name: 'Mango Lassi', description: 'Thick yogurt, cardamom', price: 89, veg: true },
    { name: 'Masala Cold Coffee', description: 'Chilled coffee, cinnamon', price: 99, veg: true },
    { name: 'Fresh Lime Soda', description: 'Sweet or salted, crushed ice', price: 69, veg: true },
    { name: 'Berry Smoothie', description: 'Mixed berries, honey, yogurt', price: 129, veg: true },
    { name: 'Iced Tea Peach', description: 'Brewed tea, peach syrup', price: 79, veg: true },
    { name: 'Chocolate Shake', description: 'Rich cocoa, whipped cream', price: 119, veg: true },
    { name: 'Virgin Mojito', description: 'Mint, lime, soda', price: 99, veg: true },
    { name: 'Fresh Orange Juice', description: 'Squeezed to order', price: 109, veg: true },
  ],
  desserts: [
    { name: 'Gulab Jamun Sundae', description: 'Warm jamun, vanilla ice cream', price: 149, veg: true },
    { name: 'Chocolate Brownie', description: 'Walnut brownie, hot fudge', price: 129, veg: true },
    { name: 'Kulfi Falooda', description: 'Rose milk, vermicelli, pistachio', price: 159, veg: true },
    { name: 'Cheesecake Slice', description: 'Baked NY style, berry compote', price: 179, veg: true },
    { name: 'Rasmalai', description: 'Soft cottage cheese, saffron milk', price: 139, veg: true },
    { name: 'Churros & Dip', description: 'Cinnamon sugar, chocolate sauce', price: 149, veg: true },
    { name: 'Apple Pie', description: 'Warm pie, vanilla scoop', price: 169, veg: true },
    { name: 'Tiramisu Cup', description: 'Espresso soak, mascarpone', price: 189, veg: true },
  ],
  'ice-cream': [
    { name: 'Vanilla Scoop', description: 'Classic Madagascar vanilla', price: 79, veg: true },
    { name: 'Chocolate Fudge', description: 'Dark cocoa, fudge ripple', price: 89, veg: true },
    { name: 'Mango Sorbet', description: 'Alphonso mango, dairy-free', price: 99, veg: true },
    { name: 'Pistachio Gelato', description: 'Roasted pistachio, creamy', price: 109, veg: true },
    { name: 'Cookie Dough', description: 'Vanilla base, cookie chunks', price: 99, veg: true },
    { name: 'Strawberry Swirl', description: 'Fresh berry ribbon', price: 89, veg: true },
    { name: 'Kulfi Stick', description: 'Malai kulfi, cardamom', price: 69, veg: true },
    { name: 'Sundae Builder', description: '3 scoops, toppings bar', price: 149, veg: true },
  ],
};

export const DEMO_MENU_ITEMS: DemoMenuItem[] = DEMO_CATEGORIES.flatMap((category) => {
  const seeds = CATEGORY_ITEMS[category.id] ?? [];
  return seeds.map((item, index) => ({
    id: `${category.id}-${index + 1}`,
    categoryId: category.id,
    name: item.name,
    description: item.description,
    price: item.price,
    veg: item.veg,
    imageSrc: itemImageSrc(category.id, index),
  }));
});

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
