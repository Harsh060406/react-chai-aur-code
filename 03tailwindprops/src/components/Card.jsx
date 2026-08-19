import React from 'react'

function Card({username}) {
    // console.log("props", props)
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 gap-8">
            <a href="#" className="block max-w-sm rounded-xl bg-white p-4 shadow-lg transition hover:shadow-xl">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&q=80&w=1160"
                    className="h-64 w-full rounded-lg object-cover sm:h-40 lg:h-40"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{username}</h3>
                <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam
                    incidunt.
                </p>
            </a>
        </div>
    )
}

export default Card