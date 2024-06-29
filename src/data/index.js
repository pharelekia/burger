import s1 from "@/assets/s1.png";
import s2 from "@/assets/s2.png";
import s3 from "@/assets/s3.png";
import s4 from "@/assets/s4.png";
import s5 from "@/assets/s5.png";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
import m4 from "@/assets/m4.png";
import m5 from "@/assets/m5.png";
import m6 from "@/assets/m6.png";
import bo1 from "@/assets/bo1.png";
import bo2 from "@/assets/bo2.png";
import bo3 from "@/assets/bo3.png";
import bo4 from "@/assets/bo4.png";
import bo5 from "@/assets/bo5.png";
import bo6 from "@/assets/bo6.png";
import b1 from "@/assets/b1.png";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";
import b4 from "@/assets/b4.png";
import b5 from "@/assets/b5.png";
import b6 from "@/assets/b6.png";
import sa1 from "@/assets/sa1.png";
import sa2 from "@/assets/sa2.png";
import sa3 from "@/assets/sa3.png";
import sa4 from "@/assets/sa4.png";
import sa5 from "@/assets/sa5.png";
import d1 from "@/assets/d1.png";
import d2 from "@/assets/d2.png";
import d3 from "@/assets/d3.png";
import d4 from "@/assets/d4.png";
import d5 from "@/assets/d5.png";

export const constants = {
    snacks: [
        {
            imgUrl: s1,
            price: 100,
            name: 'Frites',
            description: 'Pommes de terre frites'
        },
        {
            imgUrl: s2, price: 100,
            name: 'Onion rings',
            description: "Rondelles d'oignon frits"
        },
        {
            imgUrl: s3, price: 100,
            name: 'Nuggets',
            description: 'Nuggets de poulet frits'
        },
        {
            imgUrl: s4, price: 100,
            name: 'Nuggets fromage',
            description: 'Nuggets de fromage frits'
        },
        {
            imgUrl: s5, price: 100,
            name: 'Ailes de poulet',
            description: 'Ailes de poulet Barbecue'
        },
    ],
    menus: [
        {
            id: 1,
            imgUrl: m1, price: 100,
            name: 'Menu classic',
            description: 'Sandwich: Burger, Salade, Tomate, Cornichon + Frites + Boisson'
        },
        {
            id: 2,
            imgUrl: m2, price: 100,
            name: 'Menu bacon',
            description: 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson'
        },
        {
            id: 3,
            imgUrl: m3, price: 100,
            name: 'Menu big',
            description: 'Sandwich: Double Burger, Fromage, Cornichon, Salade + Frites + Boisson'
        },
        {
            id: 4,
            imgUrl: m4, price: 100,
            name: 'Menu chicken',
            description: 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise + Frites + Boisson'
        },
        {
            id: 4,
            imgUrl: m5, price: 100,
            name: 'Menu fish',
            description: 'Sandwich: Poisson, Salade, Mayonnaise, Cornichon + Frites + Boisson'
        },
        {
            id: 5,
            imgUrl: m6, price: 100,
            name: 'Menu double steak',
            description: 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson'
        },
    ],
    boissons: [
        {
            imgUrl: bo1, price: 100,
            name: 'Coca-cola',
            description: 'Au choix: Petit, Moyen ou Grand'
        },
        {
            imgUrl: bo2, price: 100,
            name: 'Coca-cola-light',
            description: 'Au choix: Petit, Moyen ou Grand'
        },
        {
            imgUrl: bo3, price: 100,
            name: 'Coca-cola-zero',
            description: 'Au choix: Petit, Moyen ou Grand'
        },
        {
            imgUrl: bo4, price: 100,
            name: 'Fanta',
            description: 'Au choix: Petit, Moyen ou Grand'
        },
        {
            imgUrl: bo5, price: 100,
            name: 'Sprite',
            description: 'Au choix: Petit, Moyen ou Grand'
        },
        {
            imgUrl: bo6, price: 100,
            name: 'Nestea',
            description: 'Au choix: Petit, Moyen ou Grand'
        },
    ],
    burgers: [
        {
            imgUrl: b1, price: 100,
            name: 'Classic',
            description: 'Sandwich: Burger, Salade, Tomate, Cornichon'
        },
        {
            imgUrl: b2, price: 100,
            name: 'Bacon',
            description: 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate'
        },
        {
            imgUrl: b3, price: 100,
            name: 'Big',
            description: 'Sandwich: Double Burger, Fromage, Cornichon, Salade'
        },
        {
            imgUrl: b4, price: 100,
            name: 'Chicken',
            description: 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise'
        },
        {
            imgUrl: b5, price: 100,
            name: 'Fish',
            description: 'Sandwich: Poisson Pané, Salade, Mayonnaise, Cornichon'
        },
        {
            imgUrl: b6, price: 100,
            name: 'Double steak',
            description: 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate'
        },
    ],
    salades: [
        {
            imgUrl: sa1, price: 100,
            name: 'Cesar poulet pane',
            description: 'Poulet Pané, Salade, Tomate et la fameuse sauce César'
        },
        {
            imgUrl: sa2, price: 100,
            name: 'Cesar poulet grille',
            description: "Poulet Grillé, Salade, Tomate et la fameuse sauce César"
        },
        {
            imgUrl: sa3, price: 100,
            name: 'Salade light',
            description: 'Salade, Tomate, Concombre, Maïs et Vinaigre balsamique'
        },
        {
            imgUrl: sa4, price: 100,
            name: 'Poulet pane',
            description: 'Poulet Pané, Salade, Tomate et la sauce de votre choix'
        },
        {
            imgUrl: sa5, price: 100,
            name: 'Poulet grille',
            description: 'Poulet Grillé, Salade, Tomate et la sauce de votre choix'
        },
    ],
    desserts: [
        {
            imgUrl: d1, price: 100,
            name: 'Fondant au chocolat',
            description: 'Au choix: Chocolat Blanc ou au lait'
        },
        {
            imgUrl: d2, price: 100,
            name: 'Muffin',
            description: 'Au choix: Au fruits ou au chocolat'
        },
        {
            imgUrl: d3, price: 100,
            name: 'Beignet',
            description: 'Au choix: Au chocolat ou à la vanille'
        },
        {
            imgUrl: d4, price: 100,
            name: 'Milkshake',
            description: 'Au choix: Fraise, Vanille ou Chocolat'
        },
        {
            imgUrl: d5, price: 100,
            name: 'Sundae',
            description: 'Au choix: Fraise, Caramel ou Chocolat'
        },
    ]
}