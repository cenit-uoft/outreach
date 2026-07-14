import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { memo } from "react";
import IconBar from './IconBar';
import { FrontMatter } from './type';
import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown'; 

const WrapLink = ({ href, children }: { href?: string, children: ReactNode }) => {
    if (href) {
        return (<Link href={href}>{children}</Link>);
    }
    return children;
}

const MemberCard = memo(({ frontMatter, route, idx = 0, showImage = true }: { route?: string, frontMatter?: FrontMatter, idx?: number, showImage?: boolean }) => {

    const { range, current_position } = frontMatter;
    
    // Kept your sizing logic, but added bottom margin for vertical stacking
    const imageSize = idx == 0 ? "w-64 h-64 mb-4" : "w-28 h-28 mb-4";

    const View = (
        <>
            {(showImage) && (
                <div className={`flex-none ${imageSize}`}>
                    <WrapLink href={route}>
                        <img
                            src={frontMatter?.image}
                            className="w-full h-full rounded-full object-cover"
                            alt=""
                        />
                    </WrapLink>
                </div>
            )}

            {/* Added a width utility to ensure the text content fills the card space */}
            <div className="w-full">
                <WrapLink href={route}>
                    <h2 className="text-xl hover:text-2xl font-semibold text-indigo-950">{frontMatter.title}</h2>
                </WrapLink>
                <WrapLink href={route}>
                    <p className="whitespace-pre-line text-indigo-950 mt-1">{frontMatter.role}</p>
                </WrapLink>
                {range && (
                    <div className="text-sm text-gray-600 mt-1">
                        <ReactMarkdown>{`${range} ${current_position}`}</ReactMarkdown>
                    </div>
                )}

                {/* Centered the social icons for the stacked layout */}
                <div className="mt-3 flex gap-3 justify-center">
                    {
                        IconBar.map((item, iconIdx) => {
                            const value = frontMatter[item.field]
                            if (value) {
                                return (
                                    <Link key={iconIdx} href={value} target="_blank" className="hover:text-indigo-600">
                                        {item.icon}
                                    </Link>
                                );
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </>
    );

    if (idx < 1) {
        return (
            <center>
                <div className="w-full">
                    {View}
                </div>
            </center>
        );
    }

    return (
        <li key={idx} className="flex flex-col items-center text-center mt-8 p-6 bg-white rounded-2xl shadow-sm border-2 border-indigo-950">
         {View}
        </li>
    );
});

export default MemberCard;
