import { v4 as uuid } from "uuid";

import { ecom_logo, landing_image, signup_icon, login_icon, canon_eos_6d, nikkor_200mm, dsmc2, redvolt_microv, fisheye, nikon_z9 ,
  angelbird_ssd, angelbird_av_pro, canon_eos_m50, delkin_card_reader, formatt_filterkit, nanlite_p200, nanlite_pavotube, nikkor_z_58mm,
  nikkor_z_400mm, nikkor_z_mc_105mm, nikon_d6, nikon_d500, nikon_z6, nikkor_micro, peak_design_backpack, peak_design_tripod,
  red_ranger_gemini, red_v_raptor, sachtler_tripod_cage, shure_vocal_virophone, velvet_light_mini
  } from '../assets/index.js'

export const products = [
  {
    _id: uuid(),
    title: "Nanlite Pavotube",
    brand: 'Nanlite',
    description : 'NanLite PavoTube 15C 2ft RGBWW LED Tube with Internal Battery',
    categoryName: "displaylights",
    image: nanlite_pavotube ,
    price: 30000,
    discount: 10,
    discountedprice:  27000,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "VELVET Light MINI 1",
    brand : 'Velvet',
    description : 'VELVET MINI 1 - The Rainproof Half 1X1 LED Panel',
    categoryName: "displaylights",
    image: velvet_light_mini ,
    price:  45000,
    discount:  15,
    discountedprice:  38250,
    rating:  2
  },

  {
    _id: uuid(),
    title: "Nanlite P-200",
    brand: 'Nanlite',
    description : 'Nanlite P-200 5600K AC LED Monolight',
    categoryName: "displaylights",
    image:  nanlite_p200,
    price:  20000,
    discount:  15,
    discountedprice:  17000,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "Red DSMC2 display",
    brand:"RED",
    description : 'RED DIGITAL CINEMA Touch 4.7" LCD',
    categoryName: "displaylights",
    image: dsmc2 ,
    price:  25000,
    discount:  20,
    discountedprice:  20000,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "Peak Design Travel Tripod",
    brand:'Peak Design',
    description : 'Tripod optimized for a full-frame DSLR + telephoto lens',
    categoryName: "accessories",
    image:  peak_design_tripod,
    price:  15000,
    discount:  10,
    discountedprice:  13500,
    rating: 2 
  },

  {
    _id: uuid(),
    title: "Sachtler Roll-Along Tripod Cage",
    brand : "Sachtler",
    description : 'Store,protect & transport accessories in the black padded 41.7" tripod',
    categoryName: "accessories",
    image: sachtler_tripod_cage,
    price:  12000,
    discount:  10,
    discountedprice:  10800,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Peak Design  Backpack 20L v2",
    brand:'Peak Design',
    description : 'Featuring silhouette with minimal dangling straps brilliantly adapts to changing gear,lifestyle & environment',
    categoryName: "accessories",
    image:  peak_design_backpack,
    price:  5000,
    discount:  10,
    discountedprice:  4500,
    rating: 5 
  },

  {
    _id: uuid(),
    title: "Angelbird AV PRO  256 GB | 2 PACK",
    brand : "Angelbird",
    description : 'Fast, Reliable and Widely Compatible SDXC UHS-II V60 Memory Card',
    categoryName: "accessories",
    image:  angelbird_av_pro,
    price:  25000,
    discount:  15,
    discountedprice:  21250,
    rating: 5 
  },

  {
    _id: uuid(),
    title: "Delkin USB 3.0 Memory Card Reader",
    brand : 'Delkin',
    description : 'Works with every type & capacity of SD memory card,including UHS-II,UHS-I Class 10,Class 6,Class 4,SD,SDHC & SDXC',
    categoryName: "accessories",
    image:  delkin_card_reader,
    price:  2500,
    discount:  10,
    discountedprice:  2250,
    rating:  2
  },

  {
    _id: uuid(),
    title: "Formatt Firecrest Filter Kit",
    brand : 'Formatt',
    description : 'The filters are designed for times when you need a cinema camera setup with minimum weight,Steadicam,gimbal or to carry your own kit.',
    categoryName: "accessories",
    image:  formatt_filterkit,
    price:  40000,
    discount:  15,
    discountedprice:  34000,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Angelbird 2TB 3.1 Internal SSD",
    brand : "Angelbird",
    description : 'This drive features Stable Stream technology,TRIM support,ESD & overload protection & host power loss protection for added peace of mind',
    categoryName: "accessories",
    image:  angelbird_ssd,
    price:  55000,
    discount:  20,
    discountedprice:  44000,
    rating:  5
  },

  {
    _id: uuid(),
    title: "Red Micro V Battery",
    brand:"RED",
    description : 'Battery packs a big punch in a very small package.Weighing barely over 1 lb & measuring 3.93" x 2.82" x 1.94", along with 12Amp cells for high output',
    categoryName: "accessories",
    image:  redvolt_microv,
    price:  10000,
    discount:  10,
    discountedprice:  9000,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Canon EOS 6D",
    brand : 'Canon',
    description : 'DSLR features 20.2 MP Full-Frame CMOS sensor,ISO range of 100 ro 25600,for incredible image quality even in low light, and a DIGIC 5+ Image Processor',
    categoryName: "camera",
    image:  canon_eos_6d,
    price:  75000,
    discount:  10,
    discountedprice:  67500,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "Canon EOS M50",
    brand : 'Canon',
    description : 'With an approximately 24.1-megapixel CMOS sensor, it captures fine details and life-like colours better than your typical smartphone.',
    categoryName: "camera",
    image:  canon_eos_m50,
    price:  55000,
    discount:  20,
    discountedprice:  44000,
    rating:  5
  },

  {
    _id: uuid(),
    title: "Nikon D6",
    brand : "Nikon",
    description : 'A high density,105-point fully selectable,all cross-type sensor AF system, allows photographers to set focus anywhere in the frame without recomposing',
    categoryName: "camera",
    image:  nikon_d6,
    price:  35000,
    discount:  15,
    discountedprice:  29750,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Nikon D500",
    brand : "Nikon",
    description : 'Powerful new 153-point AF system delivers superior subject acquisition,Approx. 10 fps continuous shooting',
    categoryName: "camera",
    image:  nikon_d500,
    price:  25000,
    discount:  15,
    discountedprice:  21250,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Nikon Z6",
    brand : "Nikon",
    description : 'Powered by larger Z Mount & shorter 16mm flange focal distance, NIKKOR Z lenses gather more light & break traditional rules of the “sweet spot”.',
    categoryName: "camera",
    image:  nikon_z6,
    price:  25000,
    discount:  20,
    discountedprice:  20000,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Nikon Z9",
    brand : "Nikon",
    description : 'Z 9 captures 45.7-MP stills at an action-freezing 30 fps1, 19-MP stills at 60 fps2 to satisfy the diverse needs of professionals',
    categoryName: "camera",
    image:  nikon_z9,
    price:  42000,
    discount:  15,
    discountedprice:  35700,
    rating:  2
  },

  {
    _id: uuid(),
    title: "Red Ranger Gemini",
    brand:"RED",
    description : 'GEMINI 5K S35 Sensor is built around 15.4MP CMOS sensor,it features a shimmed PL mount,a V-mount battery plate,integrated I/O ports including 12 & 24V output',
    categoryName: "camera",
    image:  red_ranger_gemini,
    price:  85000,
    discount:  25,
    discountedprice:  63750,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Fisheye Nikkor",
    brand : "Nikon",
    description : 'The FISHEYE NIKKOR 8-15mm lens brings versatility & sharpness to extreme wide-angle lenses,freeing you to choose the right fisheye perspective for the shot',
    categoryName: "lens",
    image:  fisheye,
    price:  52000,
    discount:  10,
    discountedprice:  46800,
    rating: 3 
  },

  {
    _id: uuid(),
    title: "Nikkor 200MM",
    brand : "Nikon",
    description : 'Nikon AF-S Nikkor 200 mm f/2G ED Vibration Reduction II Fixed Zoom Lens with Auto Focus for Nikon DSLR Cameras',
    categoryName: "lens",
    image:  nikkor_200mm,
    price:  32000,
    discount:  15,
    discountedprice:  27200,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Nikkor Z 400MM",
    brand : "Nikon",
    description : 'It is a super-telephoto prime lens which features superior optical resolution & Vibration Reduction function to provide maximum performance for user',
    categoryName: "lens",
    image:  nikkor_z_400mm,
    price:  15000,
    discount:  10,
    discountedprice:  13500,
    rating:  2
  },

  {
    _id: uuid(),
    title: "Nikkor Z MC 105MM",
    brand : "Nikon",
    description : 'The NIKKOR Z MC 105mm f/2.8 VR S is the first Z lens with a 1:1 reproduction ratio, it fills the frame with the edge-to-edge sharpness & the overwhelming image quality',
    categoryName: "lens",
    image:  nikkor_z_mc_105mm,
    price:  18500,
    discount:  20,
    discountedprice:  14800,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Red V Raptor",
    brand:"RED",
    description : 'It is an impressive introduction to RED DSMC3 platform.It offers multi-format capture in 8K VV,6K Super35,4K,3K Super16 & anamorphic options.',
    categoryName: "lens",
    image:  red_v_raptor,
    price:  65000,
    discount:  15,
    discountedprice:  55250,
    rating: 3 
  },

  {
    _id: uuid(),
    title: "PCE Micro Nikkor",
    brand : "Nikon",
    description : 'The Lens delivers a standard angle of view plus a 1:2 reproduction ratio ideal for product/catalogue photography and other commercial applications',
    categoryName: "lens",
    image:  nikkor_micro,
    price:  70000,
    discount:  20,
    discountedprice:  56000,
    rating: 5  
  },

  {
    _id: uuid(),
    title: "Nikkor Z 58MM",
    brand : "Nikon",
    description : 'The lens achieves a vast depth-of-field control & elaborate bokeh for portraiture & video,superb point-image reproduction 7 low-light performance',
    categoryName: "lens",
    image:  nikkor_z_58mm,
    price:  25000,
    discount:  10,
    discountedprice:  22500,
    rating:  3
  }
];
