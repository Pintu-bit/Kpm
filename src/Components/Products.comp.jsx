import React from "react";
import "tailwindcss/tailwind.css";
import seed1 from '../assets/seed1.png'
import seed2 from '../assets/seed2.png'
import seed3 from '../assets/seed3.png'
import seed4 from '../assets/seed4.png'

const Products = () => {
    // Define the seed products and their descriptions
    const products = [
        {
            id: "gangaprasad",
            name:"GANGAPRASAD",
            image: seed1,
            description: [
                "Duration 140 - 145 days.",
                "Medium coarse and weighty grains.",
                "The height of the tree is about 80 cm.",
                "The rice is tender and delicious.",
                "High tolerance to disease.",
            ],
        },
        {
            id: "subhajit",
            name:"SUBHAJIT",
            image: seed2,
            description: [
                "Duration 115 - 120 days.",
                "Long and weight grains",
                "The height of the tree is about 75 cm.",
                
                "High tolerance to disease.",
            ],
        },
        {
            id: "villain",
            name:"VILLAIN",
            image: seed3,
            description: [
                " Duration 125 - 130 days.",
                "Medium coarse and weighty grains.",
                "The height of the tree is about 75 cm.",
                "The rice is tender and delicious.",
                "High tolerance to disease.",
            ],
        },
                {
            id: "kpbold",
            name:"KPBOLD",
            image: seed4,
            description: [
                " Duration 145 - 150 days.",
                " Coarse and long weighty grains.",
                "The height of the tree is about 70cm.",
                "High tolerance to disease.",
                
            ],
        },
    ];

    // Return the JSX code for the products section
    return (
        <section id="#products" className=" p-4 bg-green-200">
            <h2 className="font-bold italic text-black text-[3rem]">Our Products</h2>
            <div className="flex flex-col gap-4">
                {products.map((product, index) => (
                    // Use a card component to display the product image and description
                    <section key={product.id} id={product.id} className="bg-white rounded-lg shadow-lg">
                        {/* Use flexbox and order utilities to change the order of the image and description on odd positions */}
                        <div
                            className={`flex  p-4 bg-gradient-to-r from-green-100 to-green-300 flex-col sm:flex-row ${index % 2 === 0 ? "sm:order-1" : "sm:order-2"
                                }`}
                        >
                        <div className="md:w-[50%]">
                        <img
                                src={product.image}
                                alt={`Seed ${index + 1}`}
                                className="md:w-[18rem] h-[16rem] sm:w-1/2 md:h-[18rem]  rounded-t-lg sm:rounded-l-lg sm:rounded-r-none"
                            />
                        </div>
                          
                            <div className=" md:w-[60%]">
                                <h2 className="text-2xl mb-2 ml-2  font-bold text-green-700">{product.name}</h2>
                                <ul className=" text-gray-600 list-disc list-inside">
                                    {product.description.map((item) => (
                                        <li style={{fontFamily:'sans-serif'}} className="font-bold" key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default Products;
