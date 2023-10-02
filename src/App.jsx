import React, { useState } from "react";
import Addcontact from "./add/addcontact";
import useContact from "./Store/addContact";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const contacts = useContact((state) => state.contacts);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="mt-[150px]">
            <div className="h-[640px] flex flex-col w-[350px] mx-auto border rounded-2xl overflow-hidden">
                {isModalOpen ? (
                    <Addcontact
                        isOpen={isModalOpen}
                        onClose={isModalOpen}
                        modalClose={setIsModalOpen}
                        className="absolute z-50"
                    />
                ) : (
                    ""
                )}
                <div className="h-[60px] flex items-center justify-between shadow-md">
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold">Contacts</h2>
                            <div className="flex items-center gap-[15px]">
                                <button className="w-6 h-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_1_40)">
                                            <path
                                                d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39C15.44 5.61 13.12 3.39 10.32 3.05C6.09 2.53 2.53 6.09 3.05 10.32C3.39 13.12 5.61 15.44 8.39 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                                                fill="#323232"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_40">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button className="w-6 h-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_1_37)">
                                            <path
                                                d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                                                fill="#323232"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_37">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full relative ">
                    <div className="container">
                        <button
                            onClick={openModal}
                            className="absolute w-[60px] h-[60px] top-[439px] left-[200px]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="150"
                                height="146"
                                viewBox="0 0 150 146"
                                fill="none"
                            >
                                <g filter="url(#filter0_d_1_33)">
                                    <circle
                                        cx="80"
                                        cy="66"
                                        r="30"
                                        fill="#00B2FF"
                                    />
                                </g>
                                <path
                                    d="M80 66H72M80 74V66V74ZM80 66V58V66ZM80 66H88H80Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <defs>
                                    <filter
                                        id="filter0_d_1_33"
                                        x="0"
                                        y="0"
                                        width="160"
                                        height="160"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy="14" />
                                        <feGaussianBlur stdDeviation="25" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0.0988889 0 0 0 0 0.141667 0 0 0 0.2 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_1_33"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1_33"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                        <ul className="flex  justify-center flex-col">
                            {contacts.length ? (
                                contacts.map((contact, index) => (
                                    <li
                                        className="py-[12.5px] flex items-center border-b-[2px] justify-between"
                                        key={index}
                                    >
                                        <div className="flex items-center gap-[20px]">
                                            <svg
                                                width="50"
                                                height="50"
                                                viewBox="0 0 50 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clip-path="url(#clip0_4_605)">
                                                    <path
                                                        d="M25 4.16669C13.5 4.16669 4.16669 13.5 4.16669 25C4.16669 36.5 13.5 45.8334 25 45.8334C36.5 45.8334 45.8334 36.5 45.8334 25C45.8334 13.5 36.5 4.16669 25 4.16669ZM25 10.4167C28.4584 10.4167 31.25 13.2084 31.25 16.6667C31.25 20.125 28.4584 22.9167 25 22.9167C21.5417 22.9167 18.75 20.125 18.75 16.6667C18.75 13.2084 21.5417 10.4167 25 10.4167ZM25 40C19.7917 40 15.1875 37.3334 12.5 33.2917C12.5625 29.1459 20.8334 26.875 25 26.875C29.1459 26.875 37.4375 29.1459 37.5 33.2917C34.8125 37.3334 30.2084 40 25 40Z"
                                                        fill="#7B7B7B"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4_605">
                                                        <rect
                                                            width="50"
                                                            height="50"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <div className="flex flex-col">
                                                <h2 className="font-bold text-[18px]">
                                                    {" "}
                                                    {contact.email}
                                                </h2>
                                                <p>{contact.telegram}</p>
                                                <a
                                                    className="text-[14px] opacity-70"
                                                    href={`tel:${contact.telefon}`}
                                                >
                                                    {contact.telefon}
                                                </a>
                                            </div>
                                        </div>
                                        <a href={`tel:${contact.telefon}`}>
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clip-path="url(#clip0_4_606)">
                                                    <path
                                                        d="M24.0375 19.075L20.8625 18.7125C20.1 18.625 19.35 18.8875 18.8125 19.425L16.5125 21.725C12.975 19.925 10.075 17.0375 8.27499 13.4875L10.5875 11.175C11.125 10.6375 11.3875 9.88751 11.3 9.12501L10.9375 5.97501C10.7875 4.71251 9.72499 3.76251 8.44999 3.76251H6.28749C4.87499 3.76251 3.69999 4.93751 3.78749 6.35001C4.44999 17.025 12.9875 25.55 23.65 26.2125C25.0625 26.3 26.2375 25.125 26.2375 23.7125V21.55C26.25 20.2875 25.3 19.225 24.0375 19.075Z"
                                                        fill="#08AE2D"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4_606">
                                                        <rect
                                                            width="30"
                                                            height="30"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                ))
                            ) : (
                                <div className="grid place-items-center gap-[20px] mt-[170px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="106"
                                        height="100"
                                        viewBox="0 0 106 100"
                                        fill="none"
                                    >
                                        <path
                                            d="M93.397 35.4264L104.479 24.3445C104.936 23.8883 105.151 23.2429 105.059 22.604C104.969 21.965 104.581 21.4054 104.015 21.0944L90.6928 13.7789C89.6995 13.2337 88.4521 13.5969 87.9061 14.5902C87.361 15.5843 87.7233 16.8318 88.7174 17.3769L99.643 23.376L90.1324 32.8858L55.9263 14.1028L65.4361 4.59302L75.0493 9.8722C76.0426 10.4174 77.2908 10.055 77.836 9.06089C78.3819 8.06758 78.0188 6.81933 77.0247 6.27418L66.0614 0.253421C65.2613 -0.18591 64.2672 -0.0440096 63.6227 0.601358L52.54 11.684L41.4573 0.601358C40.8119 -0.0440096 39.8178 -0.185109 39.0185 0.253421L1.06449 21.0944C0.498487 21.4054 0.111266 21.9642 0.0206741 22.604C-0.0707195 23.2429 0.144136 23.8883 0.601104 24.3445L11.683 35.4264L0.601104 46.5074C0.144136 46.9644 -0.0707195 47.609 0.0206741 48.2487C0.111266 48.8877 0.498487 49.4473 1.06449 49.7575L12.5336 56.0557V77.1067C12.5336 77.8563 12.9417 78.5457 13.5982 78.9065L51.5523 99.7467C51.8601 99.9158 52.2001 100 52.54 100C52.8799 100 53.2198 99.9158 53.5277 99.7467L91.4817 78.9065C92.1383 78.5457 92.5464 77.8563 92.5464 77.1067V56.0557L104.015 49.7583C104.581 49.4473 104.969 48.8877 105.059 48.2487C105.151 47.6098 104.936 46.9644 104.479 46.5082L93.397 35.4264ZM52.54 53.9248L18.8502 35.4256L52.54 16.9256L86.2298 35.4256L52.54 53.9248ZM39.6446 4.59302L49.1536 14.1028L14.9475 32.8858L5.43775 23.376L39.6446 4.59302ZM14.9491 37.9661L49.1552 56.7491L39.6446 66.2597L5.43775 47.4767L14.9491 37.9661ZM88.4417 75.8929L54.5923 94.4795V73.4998C54.5923 72.3662 53.6736 71.4475 52.54 71.4475C51.4064 71.4475 50.4876 72.3662 50.4876 73.4998V94.4795L16.6383 75.8929V58.3101L39.0185 70.5993C39.3288 70.7693 39.6687 70.8526 40.0054 70.8526C40.5369 70.8526 41.0629 70.6458 41.4573 70.2514L52.54 59.1687L63.6227 70.2514C64.0171 70.6466 64.543 70.8526 65.0745 70.8526C65.4112 70.8526 65.7512 70.7693 66.0614 70.5993L88.4417 58.3101V75.8929ZM65.4361 66.2597L55.9255 56.7483L90.1316 37.9661L99.643 47.4759L65.4361 66.2597Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M83.0791 13.9921C83.6186 13.9921 84.1461 13.7725 84.5301 13.3901C84.9117 13.0084 85.1314 12.4793 85.1314 11.9398C85.1314 11.3994 84.9117 10.8703 84.5301 10.4887C84.1485 10.1063 83.6186 9.88744 83.0791 9.88744C82.5371 9.88744 82.0096 10.1063 81.628 10.4887C81.244 10.8703 81.0267 11.3994 81.0267 11.9398C81.0267 12.4793 81.244 13.0084 81.628 13.3901C82.0096 13.7725 82.5395 13.9921 83.0791 13.9921Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M52.54 64.6338C52.0004 64.6338 51.4705 64.8527 51.0889 65.2351C50.7073 65.6183 50.4876 66.1458 50.4876 66.6862C50.4876 67.2273 50.7073 67.7548 51.0889 68.1388C51.4705 68.5205 52.0004 68.7385 52.54 68.7385C53.0795 68.7385 53.6094 68.5205 53.991 68.1388C54.3726 67.7548 54.5923 67.2273 54.5923 66.6862C54.5923 66.1458 54.3726 65.6183 53.991 65.2351C53.6094 64.8527 53.0795 64.6338 52.54 64.6338Z"
                                            fill="black"
                                        />
                                    </svg>
                                    <p className="font-medium text-[#000000] opacity-70">
                                        You have no contacts yet
                                    </p>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
