"use client";

import Image from "next/image";
import moment from "moment";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";

import { IReview } from "@/types/review.types";

const ReviewList = ({ reviewProduct }: { reviewProduct: IReview }) => {
    const { rating, userId, comment, createdAt } = reviewProduct;

    return (
        <div className="grid grid-cols-10 mb-5">
            <div>
                {userId && userId.profileImage ? (
                    <Image
                        className="w-10 h-10 rounded-full"
                        src={userId.profileImage}
                        alt={userId.name}
                        width={40}
                        height={40}
                    />
                ) : (
                    <FaUserGraduate className="w-10 h-10 text-gray-900 p-1 rounded-full ring-2 ring-green-300" />
                )}
            </div>
            <div className="col-span-6 border-b-2">
                <p className="font-bold text-primary capitalize">
                    {userId?.name}
                </p>
                <ul className="flex mb-2">
                    {Array.from(Array(5).keys()).map((star: number) => (
                        <li key={star}>
                            <BsFillStarFill
                                className={`${
                                    rating > star
                                        ? "text-orange-400"
                                        : "text-gray-200"
                                }
                        h-3.5 w-3.5 flex-shrink-0`}
                            />
                        </li>
                    ))}
                    <span className="ml-1 text-gray-400 text-sm relative -top-1">
                        {createdAt && moment(createdAt).fromNow()}
                    </span>
                </ul>
                <p className="mb-2 font-light text-primary">{comment}</p>
            </div>
        </div>
    );
};

export default ReviewList;
