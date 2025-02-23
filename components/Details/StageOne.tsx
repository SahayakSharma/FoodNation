import React from "react";


export default function StageOne() {
    return (
        <div className="w-full h-full">
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="mt-[20px]">
                    <p className="text-[20px]">Full Name</p>
                    <input type="text" className="w-[50%] h-[40px] bg-[#f3f3f3] rounded-md px-[20px]" />
                </div>
                <div className="mt-[20px]">
                    <p className="text-[20px]">Username</p>
                    <input type="text" className="w-[50%] h-[40px] bg-[#f3f3f3] rounded-md px-[20px]" />
                </div>
                <div className="mt-[20px]">
                    <p className="text-[20px]">Full Name</p>
                    <input type="text" className="w-[50%] h-[40px] bg-[#f3f3f3] rounded-md px-[20px]" />
                </div>
                <div className="mt-[20px]">
                    <p className="text-[20px]">Full Name</p>
                    <input type="text" className="w-[50%] h-[40px] bg-[#f3f3f3] rounded-md px-[20px]" />
                </div>
            </form>
        </div>
    )
}