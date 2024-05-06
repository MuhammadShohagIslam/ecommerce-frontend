import { FaCalendar, FaUsers, FaUser } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import FunFactCard from "../../Molecules/FunFactCard";

function FunFactArea() {
    return (
        <section
            className="relative bg-center bg-cover flex justify-center items-center lg:h-[400px]  py-10"
            style={{
                backgroundImage:
                    "url('http://localhost:5173/src/assets/Image/fun-fact/s2.jpg')"
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container relative z-30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 justify-items-center items-center ">
                    <FunFactCard
                        icon={
                            <>
                                <FaCalendar className="text-black text-4xl mb-2" />
                            </>
                        }
                        count={30}
                        name={" Years in Business"}
                    />
                    <FunFactCard
                        icon={
                            <>
                                <CgGym className="text-black text-4xl mb-2" />
                            </>
                        }
                        count={15060}
                        name={"Equipment For Sale"}
                    />
                    <FunFactCard
                        icon={
                            <>
                                <FaUser className="text-black text-4xl mb-2" />
                            </>
                        }
                        count={14030}
                        name={"Qualified Staff"}
                    />
                    <FunFactCard
                        icon={
                            <>
                                <FaUsers className="text-black text-4xl mb-2" />
                            </>
                        }
                        count={80}
                        name={"SATISFIED CUSTOMERS"}
                    />
                </div>
            </div>
        </section>
    );
}

export default FunFactArea;