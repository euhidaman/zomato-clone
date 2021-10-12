import React from 'react'

const FoodOptions = () => {
    return (
        <div className="flex justify-around px-20 mt-10 overflow-auto md:w-full" >

            <div className="flex">
                <button className="px-3 py-3 mx-5 bg-pink-100 rounded-full hover:bg-pink-200 ">
                    <img className="w-10 h-10 bg-pink-100 hover:bg-pink-200 md:w-60"
                        src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                        alt="delivery" />
                </button>
                <h1 className="mt-3.5 font-okra text-xl text-pink-600">Delivery</h1>
            </div>

            <div className="flex">
                <button className="px-3 py-3 mx-5 rounded-full bg-gray-50 hover:bg-pink-100">
                    <img className="w-10 h-10 bg-gray-100 hover:bg-pink-100"
                        src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
                        alt="delivery" />
                </button>
                <h1 className="mt-3.5 font-okra text-xl text-gray-500">Dining Out</h1>
            </div>

            <div className="flex">
                <button class="bg-gray-50 hover:bg-pink-100 mx-5 py-3 px-3 rounded-full">
                    <img className="w-10 h-10 bg-gray-100 hover:bg-pink-100"
                        src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                        alt="delivery" />
                </button>
                <h1 className="mt-3.5 font-okra text-xl text-gray-500">Nightlife</h1>
            </div>

            <div className="flex">
                <button className="px-3 py-3 mx-5 rounded-full bg-gray-50 hover:bg-pink-100">
                    <img className="w-10 h-10 bg-gray-100 hover:bg-pink-100"
                        src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                        alt="delivery" />
                </button>
                <h1 className="mt-3.5 font-okra text-xl text-gray-500">Nutrition</h1>
            </div>
        </div>
    )
}

export default FoodOptions
