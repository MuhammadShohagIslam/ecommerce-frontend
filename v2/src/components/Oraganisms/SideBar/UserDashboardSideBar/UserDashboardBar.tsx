"use client"
import { MdManageAccounts, MdOutlineSyncProblem } from "react-icons/md";
import { DiSublime } from "react-icons/di";
import { RiArrowGoBackLine } from "react-icons/ri";

import SideBarItem from "../../../Molecules/SideBar/UserSideBar/SideBarItem";

const UserDashboardBar = () => {

    return (
        <aside
            className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 hidden lg:block bg-white`}
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white relative">
                <ul className="space-y-2">
                    <SideBarItem link="" name="Dashboard">
                        <svg
                            className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                    </SideBarItem>
                    <SideBarItem link="/dashboard/paidUsers" name="Paid User">
                        <svg
                            className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </SideBarItem>
                    <SideBarItem link="/dashboard/allQuiz" name="All Quiz">
                        <svg
                            className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                    </SideBarItem>
                    <SideBarItem link="/dashboard/allUsers" name="All Users">
                        <svg
                            className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </SideBarItem>
                    <SideBarItem
                        link="/dashboard/allSubmission"
                        name="All Submissions"
                    >
                        <DiSublime className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white" />
                    </SideBarItem>
                    <SideBarItem
                        link="/dashboard/addProblem"
                        name="Add Problem"
                    >
                        <MdOutlineSyncProblem className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white" />
                    </SideBarItem>
                    <SideBarItem
                        link="/dashboard/manageProblems"
                        name="Manage Problems"
                    >
                        <MdManageAccounts className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white" />
                    </SideBarItem>
                </ul>
                <ul className="absolute bottom-0">
                    <SideBarItem link="/" name="Back To Home">
                        <RiArrowGoBackLine className="flex-shrink-0 w-6 h-6 text-gray-500 group-focus-within:text-white transition duration-75 group-hover:text-white" />
                    </SideBarItem>
                </ul>
            </div>
        </aside>
    );
};

export default UserDashboardBar;
