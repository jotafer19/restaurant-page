import cevicheImage from "./assets/meals-images/ceviche.jpg";
import salmonTacosImage from "./assets/meals-images/salmon_tacos.jpg";
import caboSanLucasImage from "./assets/meals-images/cabo_san_lucas.jpg";
import shrimpCocktailImage from "./assets/meals-images/shrimp_cocktail.jpg";
import chileanSeaBassImage from "./assets/meals-images/sea_bass.jpg";
import porkLoinImage from "./assets/meals-images/pork_loin.jpg";
import escalopasImage from "./assets/meals-images/escalopas.jpg";
import eggsBenedictImage from "./assets/meals-images/eggs_benedict.jpg";

const meals = [
    {
        name: "Ceviche",
        image: cevicheImage,
        description: "Chilled shrimp and bay scallops with lime and tomato juices.",
        price: "$15",
    },
    {
        name: "Salmon Tacos",
        image: salmonTacosImage,
        description: "Blackened Salmon with fresh spinach, avocado and pineapple-corn relish.",
        price: "$20",
    },
    {
        name: "Cabo San Lucas",
        image: caboSanLucasImage,
        description: "Grilled shrimp and grilled vegetables with cilantro-pepita sauce and poblano rice.",
        price: "$22",
    },
    {
        name: "Shrimp Cocktail",
        image: shrimpCocktailImage,
        description: "Four jumbo shrimp with our homemade Cocktail sauce.",
        price: "$16",
    },
    {
        name: "Chilean Sea Bass",
        image: chileanSeaBassImage,
        description: "Pecan encrusted Sea Bass, sautéed asparagus, cilantro potatoes, and pineapple cream sauce.",
        price: "$40",
    },
    {
        name: "Pork Loin",
        image: porkLoinImage,
        description: "Oven roasted, 12 oz thick cut, bone-in pork loin with house demi-glace, golden Yukon potatoes and a port wine poached pear.",
        price: "$30",
    },
    {
        name: "Escalopas",
        image: escalopasImage,
        description: "Macadamia nut encrusted jumbo sea scallops with mango-basil sauce and a port wine poached pear salad.",
        price: "$38",
    },
    {
        name: "Eggs Benedict",
        image: eggsBenedictImage,
        description: "Poached egg atop an english muffin with queso sauce.",
        price: "$27",
    },
]

export default meals;