import React, { useState, useEffect, useRef } from "react";
import { getPagesUnderRoute } from "nextra/context";
// import Link from "next/link";

export default () => {
  const [technologies, setTechnologies] = useState([]);
  const elmRef = useRef(null);
  
  useEffect(() => {
    const technologies = getPagesUnderRoute("/technology");
    technologies.sort((a, b) => {
      return (
        new Date(a.frontMatter?.date).getTime() -
        new Date(b.frontMatter?.date).getTime()
      );
    });
    // console.log(teamsByCategoryMap)
    setTechnologies(technologies);

    // TODO: Temp trick until update will publish in the Nextra
    const parent = elmRef.current?.parentElement?.parentElement?.parentElement;
    // const parentDiv = parent?.parentElement;
    const divCfgMargin = parent?.children[0];

    const firstNav = parent.querySelector('nav');

       
    divCfgMargin?.classList.remove('_w-64');
    firstNav?.classList.remove('_w-64');
    return () => {
        divCfgMargin?.classList.add('_w-64');
        firstNav?.classList.add('_w-64');
    }

  }, []);

return (
    <section className="py-4" ref={elmRef}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            CENIT Technology and Software
          </h3>
          <p className="text-gray-600 mt-3">Explore our technologies and software.</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {Array.isArray(technologies) && technologies.map((page, idx) => (
              <li key={idx} className="transition transform hover:-translate-y-1 duration-200">

                <a href={page.route} className="block group hover:no-underline">

                  <div className="w-full h-60 sm:h-52 md:h-56 overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition duration-200">
                    <img
                      src={page.frontMatter?.image}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-200"
                      alt={page.frontMatter?.title || "Research Image"}
                    />
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-xl text-gray-700 font-semibold group-hover:text-[#35538E] transition duration-200">
                      {page.frontMatter?.title}
                    </h4>
                    
                    <p className="mt-2 text-slate-500 line-clamp-3">
                      {page.frontMatter?.story}
                    </p>
                  </div>

                </a> 

              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
