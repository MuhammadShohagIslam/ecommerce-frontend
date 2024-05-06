"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
// import { useDispatch } from "react-redux";

import Button from "../../Atoms/Button/Button";
import CustomModal from "../../Atoms/Modal/CustomModal";
import ConfirmCartModal from "../Modal/ConfirmCartModal";
import ProductImages from "./ProductImages";

import { IProduct } from "@/types/product.type";

interface ProductCartViewProps {
    product: IProduct;
    handleClose: () => void;
}

const ProductCartPreview: React.FC<ProductCartViewProps> = ({
    product,
    handleClose,
}) => {
    /* state */
    const [openModal, setOpenModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const {
        brand,
        name,
        imageURLs,
        _id,
        quantity: productQuantity,
        price,
        discount,
    } = product;

    /* Set price from payment section */
    const discountPrice = Math.ceil(price * (discount / 100));
    const netPrice = Math.ceil(price - discountPrice) * quantity;

    // const dispatch = useDispatch();

    /* Handle add to cart */
    const handleAddToCart = () => {
        const addedProduct = {
            name,
            price: Number(netPrice),
            status,
            brand,
            imageURLs,
            _id,
            productQuantity,
        };
        // dispatch(addToCart({ ...addedProduct, quantity })),
        setOpenModal((prevState) => !prevState);
    };

    /* Handle product quantity increment here */
    const handleIncrement = () => {
        if (quantity < productQuantity) {
            setQuantity(quantity + 1);
        } else {
            toast.error("You can not order more than quantity");
        }
    };

    /* Handle product quantity decrement here */
    const handleDecrement = () => {
        // handle decrement
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            toast.error("You can not order less than 1 product ");
        }
    };

    return (
        <div className="bg-white rounded-md p-3 md:p-6 mx-5 shadow-lg w-full lg:w-[40%] h-auto overflow-auto">
            <div className="flex justify-end mb-2 lg:-mt-3 -mr-3">
                <FaWindowClose
                    onClick={handleClose}
                    className="text-2xl text-black hover:text-green-400 transition-all cursor-pointer"
                />
            </div>
            {/* main content */}
            <div className="">
                {/* image */}
                <div className="mb-5 lg:mb-0 col-span-3 px-16">
                    <ProductImages
                        productName={name}
                        viewProductImages={imageURLs}
                        imageClassName="mx-auto cursor-pointer w-full max-h-40 object-contain"
                        downImageClassName={"w-[40px] h-[40px] cursor-pointer"}
                    />
                </div>

                <div className="grid grid-cols-3 mt-5">
                    <div className="justify-self-start ">
                        <div className="text-md font-semibold mb-2">
                            {name?.length > 35
                                ? name.slice(0, 35) + "..."
                                : name}
                        </div>
                    </div>

                    <div className="justify-self-center relative">
                        <h2 className="text-lg text-red-500 font-semibold mb-2">
                            ${netPrice}
                        </h2>
                        <Button
                            onClick={handleAddToCart}
                            label={"Add Cart"}
                            className="text-white w-32 h-10 bg-black font-medium rounded  hover:bg-green-400 border-2 border-transparent absolute bottom-0 left-1/2 -translate-x-1/2"
                        />
                    </div>

                    <div className="justify-self-end">
                        <div className="flex items-center space-x-2 mt-3">
                            <label className="cursor-pointer ">
                                <input
                                    type="radio"
                                    name="color"
                                    value="green"
                                    className="hidden peer"
                                />
                                <span className="peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white inline-block w-5 h-5 bg-green-400 rounded-sm"></span>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="color"
                                    value="blue"
                                    className="hidden peer"
                                />
                                <span className="peer-checked:ring-2 peer-checked:ring-blue-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white inline-block w-5 h-5 bg-blue-400 rounded-sm"></span>
                            </label>
                            <label className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="color"
                                    value="red"
                                    className="hidden peer"
                                />
                                <span className="peer-checked:ring-2 peer-checked:ring-red-500 peer-checked:ring-offset-2 peer-checked:ring-offset-white inline-block w-5 h-5 bg-red-400 rounded-sm"></span>
                            </label>
                        </div>

                        <div className="flex items-center space-x-2 mt-3">
                            <label className="cursor-pointer flex justify-center items-center">
                                <input
                                    type="radio"
                                    name="size"
                                    value="SM"
                                    className="hidden peer"
                                />
                                <span className="flex justify-center items-center peer-checked:ring-2 peer-checked:ring-black/60 peer-checked:ring-offset-2 peer-checked:ring-offset-white h-6 w-6 border border-black/60 rounded-full text-[12px] font-bold">
                                    SM
                                </span>
                            </label>
                            <label className="cursor-pointer flex justify-center items-center">
                                <input
                                    type="radio"
                                    name="size"
                                    value="MD"
                                    className="hidden peer"
                                />
                                <span className="flex justify-center items-center peer-checked:ring-2 peer-checked:ring-black/60 peer-checked:ring-offset-2 peer-checked:ring-offset-white h-6 w-6 border border-black/60 rounded-full text-[12px] font-bold">
                                    MD
                                </span>
                            </label>
                            <label className="cursor-pointer flex justify-center items-center">
                                <input
                                    type="radio"
                                    name="size"
                                    value="LG"
                                    className="hidden peer"
                                />
                                <span className="flex justify-center items-center peer-checked:ring-2 peer-checked:ring-black/60 peer-checked:ring-offset-2 peer-checked:ring-offset-white h-6 w-6 border border-black/60 rounded-full text-[12px] font-bold">
                                    LG
                                </span>
                            </label>
                            <label className="cursor-pointer flex justify-center items-center">
                                <input
                                    type="radio"
                                    name="size"
                                    value="XXL"
                                    className="hidden peer"
                                />
                                <span className="flex justify-center items-center peer-checked:ring-2 peer-checked:ring-black/60 peer-checked:ring-offset-2 peer-checked:ring-offset-white h-6 w-6 border border-black/60 rounded-full text-[12px] font-bold">
                                    XL
                                </span>
                            </label>
                        </div>

                        {/* product quantity increment and decrement section */}
                        {!product.quantity ? ( // out of stock button
                            <button
                                disabled
                                className={
                                    "flex items-center justify-center gap-1 btn bg-btnPrimary  text-primary py-2 rounded-md mt-5 px-10 font-bold"
                                }
                            >
                                Out of Stock
                            </button>
                        ) : (
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <div className="flex items-center w-fit h-[40px] gap-2 rounded-sm">
                                    {/* button */}
                                    <input
                                        type="number"
                                        value={quantity}
                                        className="w-6 rounded-l-lg bg-black/60 h-full outline-none text-center text-white font-semibold"
                                        readOnly
                                    />
                                    <div className="space-y-1">
                                        <div
                                            onClick={handleDecrement}
                                            className={`rounded-t-lg cursor-pointer bg-black/60 hover:bg-black/60 h-full flex items-center px-2 ${
                                                quantity === 1
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
                                        >
                                            <BiMinus
                                                size={20}
                                                className="text-white"
                                            />
                                        </div>

                                        {/* button */}
                                        <div
                                            onClick={handleIncrement}
                                            className={`rounded-b-lg cursor-pointer bg-black/60 hover:bg-gray-100 h-full flex items-center px-2 ${
                                                quantity == 79
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
                                        >
                                            <BiPlus
                                                size={20}
                                                className="text-white"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        onClick={handleAddToCart}
                                        className={`cursor-pointer bg-black/60 hover:bg-black/60 h-full flex items-center px-2 rounded-r-lg ${
                                            quantity === 1
                                                ? "opacity-50 cursor-not-allowed"
                                                : ""
                                        }`}
                                    >
                                        <BsFillCartPlusFill
                                            size={20}
                                            className="text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Add to Cart modal  */}
            {openModal && (
                <CustomModal onClose={() => setOpenModal((prev) => !prev)}>
                    <ConfirmCartModal
                        handleCart={() => setOpenModal((prev) => !prev)}
                        productName={product.name}
                    />
                </CustomModal>
            )}
        </div>
    );
};

export default ProductCartPreview;
