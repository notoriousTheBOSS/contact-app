import React, { useState } from "react";
import useContact from "./../Store/addContact";

const Addcontact = ({ isOpen, onClose, modalClose }) => {
    const [telefon, setTelefon] = useState("");
    const [email, setEmail] = useState("");
    const [telegram, setTelegram] = useState("");
    const { contacts, addContact } = useContact();

    const handleAddContact = (e) => {
        addContact({ telefon, email, telegram });
        setTelefon("");
        setEmail("");
        setTelegram("");
        e.preventDefault();
        modalClose(!onClose);
    };
    if (!isOpen) return null;
    return (
        <>
            <div
                id="popup-modal"
                className="flex min-h-[640px] gap-[30px] flex-col border w-[350px] rounded-2xl mx-auto"
            >
                <div className="flex justify-between w-full h-[60px] items-center shadow-md">
                    <div className="container">
                        <div className="flex justify-between w-full">
                            <div className="flex">
                                <button
                                    onClick={() => modalClose(!onClose)}
                                    className="w-6 h-6"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_4_154)">
                                            <path
                                                d="M19 11H7.83L12.71 6.11997C13.1 5.72997 13.1 5.08997 12.71 4.69997C12.32 4.30997 11.69 4.30997 11.3 4.69997L4.71 11.29C4.32 11.68 4.32 12.31 4.71 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.83 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"
                                                fill="#323232"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4_154">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <h2 className="font-bold ml-[30px] ">Add</h2>
                            </div>
                            <button
                                className="w-6 h-6"
                                onClick={handleAddContact}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_4_153)">
                                        <path
                                            d="M9 16.1701L5.53 12.7001C5.14 12.3101 4.51 12.3101 4.12 12.7001C3.73 13.0901 3.73 13.7201 4.12 14.1101L8.3 18.2901C8.69 18.6801 9.32 18.6801 9.71 18.2901L20.29 7.71007C20.68 7.32007 20.68 6.69007 20.29 6.30007C19.9 5.91007 19.27 5.91007 18.88 6.30007L9 16.1701Z"
                                            fill="#323232"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4_153">
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
                <div>
                    <div className="container">
                        <form className="flex flex-col gap-[20px]">
                            <label
                                htmlFor=""
                                className="flex flex-col gap-[5px]"
                            >
                                <h2>Telefon</h2>
                                <input
                                    required
                                    type="tel"
                                    value={telefon}
                                    onChange={(e) => setTelefon(e.target.value)}
                                    className="w-full border-[#D9D9D9] rounded-sm"
                                    placeholder="+998  _ _   _ _ _   _ _   _ _"
                                />
                            </label>
                            <label
                                htmlFor=""
                                className="flex flex-col gap-[5px]"
                            >
                                <h2>Email</h2>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border-[#D9D9D9] rounded-sm"
                                    placeholder="exapmle@example.com"
                                />
                            </label>
                            <label
                                htmlFor=""
                                className="flex flex-col gap-[5px]"
                            >
                                <h2>Telegram</h2>
                                <input
                                    required
                                    type="text"
                                    value={telegram}
                                    onChange={(e) =>
                                        setTelegram(e.target.value)
                                    }
                                    className="w-full border-[#D9D9D9] rounded-sm"
                                    placeholder="@example"
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Addcontact;
