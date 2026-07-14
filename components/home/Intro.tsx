import React, { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import { getPagesUnderRoute } from "nextra/context";
import { getStaticPaths } from "next/dist/build/templates/pages";
import Logo from '../cenit/LogoLarge'
import Cenit from '../cenit/CENITLarge'

export default function SliderControlsInside() {
    return (
        <section style={{background:"#FFFFFF"}} className="flex items-center py-12 bg-white">
            <div className="w-full max-w-screen-xl mx-auto md:px-8 flex flex-col justify-center items-center">
                <div className="w-full items-center justify-center gap-8 lg:gap-32 mx-auto sm:px-4 md:px-0 lg:flex">
                    
                    <div className="flex-1 flex justify-center lg:justify-end sm:hidden lg:flex">
                        <Logo className="w-64"/>
                    </div>
                    <div className="max-w-5xl sm:mx-auto px-4 space-y-2 mt-6 sm:px-0 md:mt-0 lg:max-w-xl flex flex-col items-center justify-center text-left">
                        <p className="text-gray-800 text-4xl font-semibold sm:text-4xl">
                            <Cenit className='w-96' />
                        </p>
                        <p className="mt-8 text-2xl font-medium text-indigo-900">
                            
                            
                            The Centre of Excellence for Networking Innovation in Toronto (CENIT) was established in 2023 with support from the Canada Excellence Research Chair in Intelligent Digital Infrastructures at the University of Toronto. CENIT focuses on reimagining how the Internet could operate using more processing power, storage capacity, and machine intelligence inside networks; and developing  just and equitable intelligent digital infrastructures that can serve all segments of society. 
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

