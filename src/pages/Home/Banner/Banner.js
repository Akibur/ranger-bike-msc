import React from 'react';

export default function Banner() {
    return (
        <div class="bg-gray-800 ">
            <div class="text-center w-full mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-2 z-20">
                <h2 class="text-3xl md:text-6xl font-extrabold text-white ">
                    <span class="block">
                        Buy Premium Bikes
                    </span>
                    <span class="block text-indigo-500">
                        It&#x27;s today or never.
                    </span>
                </h2>
                <p class="text-base mt-4 max-w-5xl mx-auto text-gray-400">
                    Rangers is noted for a style of customization that gave rise to the chopper motorcycle style. The company traditionally marketed heavyweight, air-cooled cruiser motorcycles with engine displacements greater than 700 cc, but it has broadened its offerings                 </p>
                <div class="lg:mt-0 lg:flex-shrink-0">
                    <div class="mt-12 inline-flex rounded-md shadow">
                        <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            View Bikes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
