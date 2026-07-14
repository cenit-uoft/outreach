import React from "react";

const LOGOS = [
    {image:`/funders/nserc.png`, size:"200px"},
    {image:`/funders/ece-uoft.png`, size:"500px"},
    {image:`/funders/tri-agency.png`, size:"200px"},

];
export default () => {
    return (
        <div style={{background:"#ebebeb41"}} className="py-8" items-center>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 item-center">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 text-4xl font-semibold sm:text-2xl">
                    Thankful for Our Supporters!
                    </h3>
                    <p className="text-gray-600 mt-3">
                    At CENIT we extend heartfelt thanks to our supporters and collaborators. With their trust, we advance important research and make a real difference.                    </p>
                </div>
                <div className="mt-12 flex justify-center w-full">
                    <ul className="inline-grid grid-cols-2 items-center gap-x-24 gap-y-8 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4 mx-auto">
                        {LOGOS.map((logo, index) => (
                            <li key={index} className="flex items-center justify-center w-full h-full">
                                <img
                                    src={logo.image}
                                    width={logo.size} 
                                    height="50px"
                                    className="object-contain" 
                                    alt="Funder logo"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}