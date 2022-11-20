import { CartItemType } from "../../Types/Types";

const Products = [
    {
        id: 0,
        category: "estate",
        image: "https://www.techall.ru/image/cache/pimg/143953-1200x800.jpg",
        price: 15000,
        title: "Акустическая гитара",
        amount: 500
    },
    {
        id: 1,
        category: "estate",
        image: "https://cdn1.ozone.ru/s3/multimedia-w/6032402120.jpg",
        price: 7000,
        title: "Классическая гитара",
        amount: 500
    },
    {
        id: 2,
        category: "estate",
        image: "https://neopix.ru/upload/iblock/b5c/s4y5v9l7jabx29die8djeue2scvic1r2.jpg",
        price: 55000,
        title: "Барабанная устанока",
        amount: 500
    },
    {
        id: 3,
        category: "estate",
        image: "https://shamray.ru/upload/catalog2/43923/list/1577563845.jpg",
        price: 11500,
        title: "Скрипка",
        amount: 500
    },
    {
        id: 4,
        category: "estate",
        image: "https://big54.ru/upload/iblock/9d0/9d028a4ca764b09f2dcb1aff1ecb9b2e.jpg",
        price: 40000,
        title: "Синтезатор",
        amount: 500
    },
    {
        id: 5,
        category: "estate",
        image: "https://www.muzfox.ru/upload/iblock/215/215fc78e42a199fe3e40b30fd859b047.jpg",
        price: 120990,
        title: "Аккордион",
        amount: 500
    }
];

export const AllProducts = async (): Promise<CartItemType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Products), 1000);
    });
}
