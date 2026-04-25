import { ServiceProvider, Component, Part } from '../types';

// Miele PW 6080 Vario specific data based on the user journey
export const mieleServiceProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "Miele Center Hausgerätewelt GmbH",
    rating: 4.9,
    reviews: 156,
    distance: "2.3 km away",
    specialization: "Authorized Miele Service Center",
    estimatedTime: "≤ 3 hours (avg 110 min)",
    hourlyRate: "€235-€265",
    avatar: "🔧",
    address: "Schmidener Str. 231, Stuttgart",
    phone: "0711-505368-0"
  },
  {
    id: 2,
    name: "Miele Factory Hotline",
    rating: 4.8,
    reviews: 2340,
    distance: "Remote support",
    specialization: "Official Miele Technical Support",
    estimatedTime: "Immediate consultation",
    hourlyRate: "0800 225 5705",
    avatar: "📞",
    address: "Remote Diagnosis",
    phone: "0800 225 5705"
  }
];

export const mieleComponents: Component[] = [
  {
    id: 'drain-pump',
    name: 'Drain Pump #6239560',
    health: 20,
    status: 'Critical',
    recommendation: 'Replace',
    needsReplacement: true,
    partNumber: '6239560',
    description: 'DPS25-375 (220-240V) drain pump assembly'
  },
  {
    id: 'pressure-switch',
    name: 'Pressure Switch #6996821',
    health: 82,
    status: 'Good',
    recommendation: 'Monitor',
    needsReplacement: false,
    partNumber: '6996821',
    description: 'Dual-diaphragm pressure sensor'
  },
  {
    id: 'pressure-hose',
    name: 'Pressure Hose #D217337',
    health: 70,
    status: 'Fair',
    recommendation: 'Monitor',
    needsReplacement: false,
    partNumber: 'D217337',
    description: 'Air-trap pressure hose'
  },
  {
    id: 'inlet-valve',
    name: 'Water Inlet Valve Set',
    health: 95,
    status: 'Good',
    recommendation: 'No action',
    needsReplacement: false,
    partNumber: 'PW6065-IV',
    description: 'Aqua-stop solenoid valve assembly'
  }
];

export const mieleParts: { [key: string]: Part[] } = {
  'drain-pump': [
    {
      id: '1',
      name: 'Miele Original Drain Pump #6239560',
      price: 95.00,
      rating: 4.8,
      reviews: 89,
      deliveryDays: 2,
      inStock: true,
      seller: 'Miele Spare Parts Store',
      partNumber: '6239560',
      description: 'Original Miele DPS25-375 (220-240V)',
      url: 'https://www.mieleusa.com/category/1387047/spare-parts-for-washing-machines'
    },
    {
      id: '2',
      name: 'ASC Catering Drain Pump PW6080',
      price: 75.00,
      rating: 4.5,
      reviews: 156,
      deliveryDays: 3,
      inStock: true,
      seller: 'ASC Catering Supplies',
      partNumber: '6239560-ASC',
      description: 'Compatible drain pump for PW6080',
      url: 'https://www.ascateringsupplies.com/drain-pump-miele-washing-machine-pw6080.html'
    },
    {
      id: '3',
      name: 'Ersatzteil-Check Alternative Pump',
      price: 13.84,
      rating: 4.2,
      reviews: 203,
      deliveryDays: 5,
      inStock: true,
      seller: 'Ersatzteil-Check',
      partNumber: '6239564-ALT',
      description: 'Compatible alternative drain pump',
      url: 'https://ersatzteil-check.de/product/ablaufpumpe-wie-miele-6239564-fuer-waschmaschine/'
    }
  ],
  'pressure-switch': [
    {
      id: '4',
      name: 'Miele Pressure Switch #6996821',
      price: 108.00,
      rating: 4.7,
      reviews: 67,
      deliveryDays: 3,
      inStock: true,
      seller: 'LuwaLuxury',
      partNumber: '6996821',
      description: 'Original Miele dual-diaphragm pressure switch',
      url: 'https://luwaluxury.com/products/miele-pressure-switch'
    }
  ],
  'pressure-hose': [
    {
      id: '5',
      name: 'Miele Pressure Hose #D217337',
      price: 29.90,
      rating: 4.6,
      reviews: 45,
      deliveryDays: 4,
      inStock: true,
      seller: 'Huoltopalvelu',
      partNumber: 'D217337',
      description: 'Air-trap pressure connection hose',
      url: 'https://www.huoltopalvelu.com/Miele-pressure-switch-hose'
    }
  ],
  'inlet-valve': [
    {
      id: '6',
      name: 'Miele Water Inlet Valve Set',
      price: 60.00,
      rating: 4.4,
      reviews: 78,
      deliveryDays: 6,
      inStock: true,
      seller: 'eBay',
      partNumber: 'PW6065-IV',
      description: 'Aqua-stop inlet valve assembly',
      url: 'https://www.ebay.com/itm/254284972310'
    }
  ]
};

export const mieleRepairSteps = [
  {
    id: 1,
    title: "Isolate Power",
    description: "Turn off the machine using the On/Off rocker switch and disconnect from wall power. Safety first - never work on live electrical equipment.",
    image: "/1.png",
    duration: "1 min",
    tools: ["None required"],
    safety: "High voltage warning - ensure complete power isolation"
  },
  {
    id: 2,
    title: "Open Drain System Flap",
    description: "Locate the drain access panel in the lower-right corner of the machine. Pull out the supplied drain tool from its holder.",
    image: "/2.png",
    duration: "1 min",
    tools: ["Supplied drain tool"],
    safety: "Prepare for water spillage"
  },
  {
    id: 3,
    title: "Unscrew Lint Trap Lid Halfway",
    description: "Slowly unscrew the lint trap lid. Water will begin to drain - approximately 35 liters with a full load. Caution: water may be hot.",
    image: "/3.png",
    duration: "5-8 min",
    tools: ["Drain tool", "Towels", "Container"],
    safety: "Hot water warning - allow cooling time if recently used"
  },
  {
    id: 4,
    title: "Remove Lid and Check Impeller",
    description: "Remove the lint trap lid completely. Check for foreign objects (coins, buttons). Locate the impeller and try to spin it by hand.",
    image: "/4.png",
    duration: "2-3 min",
    tools: ["Flashlight"],
    safety: "Sharp edges - handle carefully"
  },
  {
    id: 5,
    title: "Remove Pump Assembly",
    description: "If impeller is jammed, remove the entire pump assembly. Locate and remove two Torx T20 screws securing the pump.",
    image: "/5.png",
    duration: "3-5 min",
    tools: ["Torx T20 screwdriver"],
    safety: "Support pump weight when removing screws"
  },
  {
    id: 6,
    title: "Install New Pump",
    description: "Clip in the new DPS25-375 (220-240V) pump assembly. Ensure all connections are secure and properly seated.",
    image: "/6.png",
    duration: "3-5 min",
    tools: ["Torx T20 screwdriver"],
    safety: "Ensure correct voltage rating (220-240V)"
  },
  {
    id: 7,
    title: "Refit Lid and Test",
    description: "Replace the lint trap lid and run a 3-minute drain test. Monitor water level sensor response.",
    image: "/3.png",
    duration: "5 min",
    tools: ["None"],
    safety: "Monitor for leaks during test"
  },
  {
    id: 8,
    title: "Final System Check",
    description: "If drain test fails, proceed to pressure switch diagnosis. Check hose D217337 and switch 6996821 connections.",
    image: "/4.png",
    duration: "2-3 min",
    tools: ["Multimeter (if available)"],
    safety: "Electrical testing requires qualified personnel"
  }
];

export const mieleServicePackages = [
  {
    id: 'inspect',
    name: 'Inspect',
    description: 'Annual preventive maintenance',
    price: '€189/year',
    features: [
      'Annual inspection',
      'Basic maintenance',
      'Performance check',
      'Fault diagnosis'
    ]
  },
  {
    id: 'prevent',
    name: 'Prevent',
    description: 'Includes labour & travel costs',
    price: '€399/year',
    features: [
      'Everything in Inspect',
      'Labour costs covered',
      'Travel expenses included',
      'Priority scheduling'
    ]
  },
  {
    id: 'complete',
    name: 'Complete',
    description: 'Full coverage with parts & loaner',
    price: '€699/year',
    features: [
      'Everything in Prevent',
      'All parts included',
      'Loaner machine provided',
      '30-day follow-up guarantee'
    ]
  }
];