import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { FaShoppingCart } from "react-icons/fa";
import { MdPageview } from "react-icons/md";
import { useStoreContext } from "@/lib/contexts/StoreContextProvider";
import { StoreActionType } from "@/lib/states/storeReducer/storeReducer.type";

const Product = ({ product }: any) => {
    const [isAddToCart, setIsAddToCart] = useState(false);
    const { _id, slug, title, images, description, quantity } = product;
    const { dispatch } = useStoreContext();
    const handleAddCart = () => {
        // create cart array
        let carts = [];
        // // checking available window or not
        if (typeof window !== "undefined") {
            // checking already carts to the window localStorage
            let cartsFromLocalStorage: string | null =
                window.localStorage.getItem("carts");
            if (cartsFromLocalStorage !== null) {
                carts = JSON.parse(cartsFromLocalStorage);
            }
        }
        // added cart
        carts.push({
            ...product,
            count: 1,
        });
        // tooltip
        setIsAddToCart(true);
        // remove duplicates
        const uniqueCarts = _.uniqWith(carts, _.isEqual);
        // set cart object in windows localStorage
        window.localStorage.setItem("carts", JSON.stringify(uniqueCarts));

        // added cart in store context
        dispatch({
            type: StoreActionType.ADD_TO_CART,
            payload: uniqueCarts,
        });
        // // show drawer carts in the side bar
        // dispatch({
        //     type: "VISIBLE_DRAWER",
        //     payload: true,
        // });
    };

    // const offerProductPercentage = Math.round(
    //     ((originalPrice - price) / originalPrice) * 100
    // );

    return (
        <div className="rounded-lg shadow-md group cursor-pointer">
            <div className="h-72 relative">
                <div className="absolute top-3 rounded-full left-3 w-14 h-14 bg-success flex justify-center items-center flex-col">
                    <span className="text-white -mb-2">Off</span>
                    <span className="flex justify-center items-center text-white">
                        {/* {offerProductPercentage}% */}
                        50%
                    </span>
                </div>
                <ul className="transition duration-300 ease-in-out invisible flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:visible">
                    <li
                        className={`py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white ${
                            isAddToCart ? "bg-primary" : "bg-success"
                        } bg-success transition ease-in-out delay-15 cursor-pointer tooltip tooltip-primary`}
                        data-tip={
                            isAddToCart
                                ? "Already To Cart"
                                : "Add To Cart"
                        }
                        onClick={() => handleAddCart()}
                    >
                        <FaShoppingCart />
                    </li>

                    <label htmlFor="my-modal-3">
                        <Link href={`products/${slug}`}>
                            <li
                                className={`py-3 flex items-center px-3 rounded-lg ml-2 border-2 border-success hover:bg-primary hover:border-primary hover:text-white  text-white bg-success transition ease-in-out delay-15 cursor-pointer tooltip tooltip-primary`}
                                data-tip={"Details Product"}
                            >
                                 <MdPageview fill="#fff"/>
                            </li>
                        </Link>
                    </label>
                </ul>
                <Image
                    className="h-full w-full"
                    src={`${images && images.length && images[0].url}`}
                    alt={title}
                    width="0"
                    height="0"
                />
            </div>
            <div className="p-5">
                <h5 className="my-2 text-xl font-semibold tracking-tight text-primary">
                    {title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description.length > 90
                        ? `${description.slice(0, 90)} ...`
                        : description}
                </p>
            </div>
        </div>
    );
};

export default Product;
