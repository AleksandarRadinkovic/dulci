// Izvor: Dulci_katalog.pdf (veleprodajni katalog, 01.11.2026.)
// Cijene su VP bez PDV-a. Prikaz cijena je trenutno isključen.
export const SHOW_PRICES = false;

export type Category = 'mono' | 'torte' | 'sufle' | 'casice';
export type Badge = 'new' | 'vegan' | 'bestseller' | 'recommended';

export type Product = {
  slug: string;
  category: Category;
  name: { sr: string; en: string };
  image: string;
  imageCut?: string;
  price: number;
  badges: Badge[];
  available?: boolean;
};

export const categories: Category[] = ['mono', 'torte', 'sufle', 'casice'];

const img = (category: Category, file: string) =>
  `/images/products/${category}/${file}.webp`;

export const products: Product[] = [
  // Monoporcije (VP cijena po komadu)
  { slug: 'mono-cokoladni-uzitak', category: 'mono', name: { sr: 'Čokoladni užitak', en: 'Chocolate Delight' }, image: img('mono', '01-mono-cokoladni-uzitak-cijeli'), imageCut: img('mono', '01-mono-cokoladni-uzitak-presjek'), price: 3.3, badges: ['new'] },
  { slug: 'mono-karamel-snita', category: 'mono', name: { sr: 'Karamel šnita', en: 'Caramel Slice' }, image: img('mono', '10-mono-karamel-snita-cijeli'), imageCut: img('mono', '10-mono-karamel-snita-presjek'), price: 4.4, badges: ['new'] },
  { slug: 'mono-vegan-pistacija-malina', category: 'mono', name: { sr: 'Vegan Pistacija-malina', en: 'Vegan Pistachio-Raspberry' }, image: img('mono', '03-vegan-mono-pistacija-malina-cijela'), imageCut: img('mono', '03-vegan-mono-pistacija-malina-presjek'), price: 4.7, badges: ['new', 'vegan'] },
  { slug: 'mono-vegan-visnja', category: 'mono', name: { sr: 'Vegan Višnja', en: 'Vegan Sour Cherry' }, image: img('mono', '04-vegan-mono-visnja-cijela'), imageCut: img('mono', '04-vegan-mono-visnja-presjek'), price: 3.76, badges: ['new', 'vegan'] },
  { slug: 'mono-vegan-mango', category: 'mono', name: { sr: 'Vegan Mango', en: 'Vegan Mango' }, image: img('mono', '05-vegan-mono-mango-cijela'), imageCut: img('mono', '05-vegan-mono-mango-presjek'), price: 4.1, badges: ['new', 'vegan'] },
  { slug: 'mono-vegan-nocciola', category: 'mono', name: { sr: 'Vegan Nocciola', en: 'Vegan Nocciola' }, image: img('mono', '06-vegan-mono-nocciola-cijela'), imageCut: img('mono', '06-vegan-mono-nocciola-presjek'), price: 4.4, badges: ['new', 'vegan'] },
  { slug: 'mono-capri-jagoda', category: 'mono', name: { sr: 'Capri Jagoda', en: 'Capri Strawberry' }, image: img('mono', '02-mono-capri-jagoda-cijeli'), imageCut: img('mono', '02-mono-capri-jagoda-presjek'), price: 3.76, badges: ['bestseller'] },
  { slug: 'mono-ferrero', category: 'mono', name: { sr: 'Ferrero', en: 'Ferrero' }, image: img('mono', '07-mono-ferrero-cijeli'), imageCut: img('mono', '07-mono-ferrero-presjek'), price: 3.67, badges: [] },
  { slug: 'mono-coko-karamela', category: 'mono', name: { sr: 'Čoko-karamela', en: 'Choco-Caramel' }, image: img('mono', '08-mono-coko-karamela-cijeli'), imageCut: img('mono', '08-mono-coko-karamela-presjek'), price: 4.4, badges: [] },
  { slug: 'mono-borovnica-kajsija', category: 'mono', name: { sr: 'Borovnica-kajsija', en: 'Blueberry-Apricot' }, image: img('mono', '09-mono-borovnica-kajsija-cijeli'), imageCut: img('mono', '09-mono-borovnica-kajsija-presjek'), price: 4.3, badges: [] },
  { slug: 'mono-malina-pistacija', category: 'mono', name: { sr: 'Malina-pistacija', en: 'Raspberry-Pistachio' }, image: img('mono', '11-mono-malina-pistacija-cijeli'), imageCut: img('mono', '11-mono-malina-pistacija-presjek'), price: 4.7, badges: ['bestseller'] },
  { slug: 'mono-mango', category: 'mono', name: { sr: 'Mango', en: 'Mango' }, image: img('mono', '12-mono-mango-cijeli'), imageCut: img('mono', '12-mono-mango-presjek'), price: 3.76, badges: [] },
  { slug: 'mono-tart-ljesnjak', category: 'mono', name: { sr: 'Tart lješnjak', en: 'Hazelnut Tart' }, image: img('mono', '13-mono-tart-ljesnjak-cijeli'), imageCut: img('mono', '13-mono-tart-ljesnjak-presjek'), price: 3.76, badges: [] },
  { slug: 'mono-tart-visnja', category: 'mono', name: { sr: 'Tart višnja', en: 'Sour Cherry Tart' }, image: img('mono', '14-mono-tart-visnja-cijeli'), imageCut: img('mono', '14-mono-tart-visnja-presjek'), price: 3.76, badges: [] },

  // Torte (VP cijena po parčetu)
  { slug: 'torta-malina-bijela-cokolada', category: 'torte', name: { sr: 'Malina-bijela čokolada', en: 'Raspberry-White Chocolate' }, image: img('torte', '04-torta-malina-bijela-cokolada'), imageCut: img('torte', '04-torta-malina-bijela-cokolada-presjek'), price: 3.9, badges: ['new'] },
  { slug: 'torta-lotus', category: 'torte', name: { sr: 'Lotus torta', en: 'Lotus Cake' }, image: img('torte', '06-torta-lotus'), imageCut: img('torte', '06-torta-lotus-presjek'), price: 4.1, badges: ['new', 'bestseller'] },
  { slug: 'torta-san-sebastian', category: 'torte', name: { sr: 'San Sebastian cheesecake', en: 'San Sebastian Cheesecake' }, image: img('torte', '01-san-sebastian-cijela'), imageCut: img('torte', '01-san-sebastian-sa-prelivom-presjek'), price: 3.76, badges: ['new'] },
  { slug: 'torta-jagoda-bijela-cokolada', category: 'torte', name: { sr: 'Jagoda-bijela čokolada', en: 'Strawberry-White Chocolate' }, image: img('torte', '09-torta-jagoda-bijela-cokolada'), imageCut: img('torte', '09-torta-jagoda-bijela-cokolada-presjek'), price: 3.9, badges: ['new'] },
  { slug: 'torta-borovnica-cheesecake', category: 'torte', name: { sr: 'Borovnica cheesecake', en: 'Blueberry Cheesecake' }, image: img('torte', '01-torta-borovnica-cheesecake'), imageCut: img('torte', '01-torta-borovnica-cheesecake-presjek'), price: 3.76, badges: ['new'] },
  { slug: 'torta-pistacija-cheesecake', category: 'torte', name: { sr: 'Pistacija cheesecake', en: 'Pistachio Cheesecake' }, image: img('torte', '08-torta-pistacija-cheesecake'), imageCut: img('torte', '08-torta-pistacija-cheesecake-presjek'), price: 4.1, badges: [] },
  { slug: 'torta-kraljica-cokolade', category: 'torte', name: { sr: 'Kraljica čokolade', en: 'Queen of Chocolate' }, image: img('torte', '03-torta-dulcinea'), imageCut: img('torte', '03-torta-dulcinea-presjek'), price: 4.26, badges: ['bestseller'] },
  { slug: 'torta-kinder', category: 'torte', name: { sr: 'Kinder torta', en: 'Kinder Cake' }, image: img('torte', '05-torta-kinder'), imageCut: img('torte', '05-torta-kinder-presjek'), price: 3.41, badges: [] },
  { slug: 'torta-malina-pistacija', category: 'torte', name: { sr: 'Malina-pistacija torta', en: 'Raspberry-Pistachio Cake' }, image: img('torte', '07-torta-malina-pistacija'), imageCut: img('torte', '07-torta-malina-pistacija-presjek'), price: 4.7, badges: ['bestseller'] },
  { slug: 'torta-tart-ljesnjak', category: 'torte', name: { sr: 'Tart lješnjak', en: 'Hazelnut Tart' }, image: img('torte', '11-torta-tart-ljesnjak'), imageCut: img('torte', '11-torta-tart-ljesnjak-presjek'), price: 3.76, badges: [] },
  { slug: 'torta-tart-visnja', category: 'torte', name: { sr: 'Tart višnja', en: 'Sour Cherry Tart' }, image: img('torte', '12-torta-tart-visnja'), imageCut: img('torte', '12-torta-tart-visnja-presjek'), price: 3.76, badges: [] },
  { slug: 'torta-mango', category: 'torte', name: { sr: 'Mango', en: 'Mango' }, image: img('torte', '13-torta-mango'), imageCut: img('torte', '13-torta-mango-presjek'), price: 3.76, badges: [] },
  { slug: 'torta-vegan-coko-ljesnjak', category: 'torte', name: { sr: 'Čoko-lješnjak', en: 'Choco-Hazelnut' }, image: img('torte', '02-vegan-torta-coko-ljesnjak'), imageCut: img('torte', '02-vegan-torta-coko-ljesnjak-presjek'), price: 3.59, badges: ['vegan'] },
  { slug: 'torta-vegan-malina-kokos', category: 'torte', name: { sr: 'Malina-kokos', en: 'Raspberry-Coconut' }, image: img('torte', '10-vegan-torta-malina-kokos'), imageCut: img('torte', '10-vegan-torta-malina-kokos-presjek'), price: 3.33, badges: ['vegan'] },

  // Dulci Sufflé (VP cijena po komadu)
  { slug: 'sufle-cokolada', category: 'sufle', name: { sr: 'Sufle Čokolada', en: 'Chocolate Soufflé' }, image: img('sufle', '01-sufle-cokolada'), imageCut: img('sufle', '01-sufle-cokolada-detalj'), price: 3.12, badges: [] },
  { slug: 'sufle-pistacija', category: 'sufle', name: { sr: 'Sufle Pistacija', en: 'Pistachio Soufflé' }, image: img('sufle', '02-sufle-pistacija'), imageCut: img('sufle', '02-sufle-pistacija-detalj'), price: 3.46, badges: ['recommended'] },
  { slug: 'sufle-pistacija-malina', category: 'sufle', name: { sr: 'Sufle Pistacija-malina', en: 'Pistachio-Raspberry Soufflé' }, image: img('sufle', '03-sufle-pistacija-malina'), imageCut: img('sufle', '03-sufle-pistacija-malina-detalj'), price: 3.55, badges: ['recommended'] },

  // Dolce Vetro – deserti u čašici (VP cijena po komadu)
  { slug: 'casica-borovnica', category: 'casice', name: { sr: 'Borovnica', en: 'Blueberry' }, image: img('casice', '01-casica-borovnica'), price: 3.5, badges: ['new'], available: false },
  { slug: 'casica-kajsija', category: 'casice', name: { sr: 'Kajsija', en: 'Apricot' }, image: img('casice', '02-casica-kajsija'), price: 3.5, badges: ['new'], available: false },
  { slug: 'casica-lotus', category: 'casice', name: { sr: 'Lotus', en: 'Lotus' }, image: img('casice', '03-casica-lotus'), price: 3.81, badges: ['new'], available: false },
  { slug: 'casica-nutella', category: 'casice', name: { sr: 'Nutella', en: 'Nutella' }, image: img('casice', '04-casica-nutella'), price: 3.5, badges: ['new'], available: false },
  { slug: 'casica-pistacija', category: 'casice', name: { sr: 'Pistacija', en: 'Pistachio' }, image: img('casice', '05-casica-pistacija'), price: 3.81, badges: ['new'], available: false },
  { slug: 'casica-twix', category: 'casice', name: { sr: 'Twix', en: 'Twix' }, image: img('casice', '06-casica-twix'), price: 3.5, badges: ['new'], available: false },
];

export const formatPrice = (price: number) =>
  `${price.toFixed(2).replace('.', ',')} KM`;
