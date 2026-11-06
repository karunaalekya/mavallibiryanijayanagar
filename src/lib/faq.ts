import { cfg } from './site';
const addr = `${cfg.address.line}, ${cfg.address.city} ${cfg.address.pin}`;
// [question, answer]. Plain text only (also used for FAQPage schema).
export const faq: [string, string][] = [
  ['How do I order?', 'Use the order page. We take orders by call and WhatsApp, and on Swiggy and Zomato when they are live for this outlet. You can also pick up from the outlet. On the menu page, tap Add on the dishes you want and send the list to us on WhatsApp.'],
  ['Where is the outlet?', `We are at ${addr}. The contact page has a Get directions button.`],
  ['What are your opening hours?', cfg.hours ? `${cfg.hours}.` : 'Timings can vary by day, so please call or WhatsApp us to confirm before you come.'],
  ['Do you deliver?', 'For delivery, order on Swiggy or Zomato when they are live for this outlet. For pickup, order by call or WhatsApp. Ask us on WhatsApp if you want to know whether we can reach your area.'],
  ['Is this the official Mavalli Biryani website?', 'This is the website of the Jayanagar outlet only. Menu, prices and timings here are for this outlet and can differ from other Mavalli Biryani outlets.'],
  ['Do you take bulk or party orders?', 'Yes. Send the date, number of people and dishes on the catering page and we will reply with a quote.'],
  ['Do you have vegetarian dishes?', 'Yes. Veg fried rice, mushroom fried rice, jeera rice, curd rice, akki rotti, mushroom pepper dry and paneer chilly. Vegetarian categories carry a green leaf on the menu. Our kitchen also cooks meat, so tell us if you need strictly separate handling.'],
  ['What is the Sunday special?', 'On Sundays we serve thatte idly, kaal soup and plain soup at the Sunday prices shown in the menu. They are not on the regular menu on other days.'],
  ['What is kaal soup?', 'Kaal means leg in Kannada. Kaal soup is a hot soup served with a leg piece and is priced per piece on the menu.'],
  ['How do I pay?', 'This website takes no payments. We tell you how to pay when we confirm your order. Orders on Swiggy and Zomato are paid in those apps.'],
  ['Can I cancel or change an order?', 'Yes, before we start cooking. Call or WhatsApp us straight away. Our refund and cancellation page explains what happens after cooking starts and how refunds are paid.'],
  ['What if something is wrong with my order?', 'Tell us on WhatsApp as soon as you can, ideally within two hours, with a photo if possible. If the fault is ours we will replace the dish or refund the affected items.'],
  ['I have a food allergy. Can you help?', 'Please tell us when you order. Our kitchen handles meat, dairy, nuts, gluten and spices, so we cannot promise that any dish is free of an allergen.'],
  ['Are prices inclusive of GST?', 'Prices are in rupees and GST is charged as applicable. The amount we confirm when you order is the amount you pay.'],
  ['Is the food FSSAI registered?', `Yes. FSSAI registration number ${cfg.fssai}.`],
  ['Does this website store my details?', 'No. The cart and chat helper keep what you type in your browser only, and analytics cookies stay off unless you accept them. Read the privacy policy for details.'],
  ['How do I make a complaint?', `Email ${cfg.email} or message us on WhatsApp. We acknowledge complaints within 48 hours and aim to resolve them within one month.`],
];
