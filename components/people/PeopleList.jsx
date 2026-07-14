import { getPagesUnderRoute } from "nextra/context";
import { memo, useEffect, useRef, useState } from "react";
import MemberCard from './MemberCard';

export default memo(() => {
    const backgroundImageRef = useRef(null);
    const [teams, setTeams] = useState({});

    // Define mapping for the 5 categories based on 'C1', 'C2', etc.
    const categoryLabels = {
        "C1": "CENIT Core Members",
        "C2": "CENIT Staffs",
        "C3": "Post-doctoral Fellows and Graduate Students",
        "C4": "Collaborators",
        "C5": "Alumni"
    };

    useEffect(() => {
        const teamPages = getPagesUnderRoute("/people");
        const teamsByCategoryMap = {};

        teamPages.forEach((member) => {
            const categoryStr = member.frontMatter?.category || '';
            const key = categoryStr.split('_') || [];
            
            // Extracting key (C1) and value (x10) for sorting
            const categoryKey = key[0] || '-';
            const categoryValue = parseInt(key[1]) || 0;

            if (!teamsByCategoryMap[categoryKey]) {
                teamsByCategoryMap[categoryKey] = [];
            }

            teamsByCategoryMap[categoryKey].push({
                member,
                value: categoryValue 
            });
        });
    
        // Sort, structure mapping remains same
        for (const category in teamsByCategoryMap) {
            teamsByCategoryMap[category].sort((a, b) => {
                if (a.value !== b.value) {
                    return a.value - b.value;
                } else {
                    return new Date(a.member?.frontMatter?.date).getTime() - new Date(b.member?.frontMatter?.date).getTime();
                }
            });
            teamsByCategoryMap[category] = teamsByCategoryMap[category].map(item => item.member);
        }
        
        setTeams(teamsByCategoryMap);
        
        // ... (background logic and effect cleanup remain same)
    }, []);

    return (
        <div ref={backgroundImageRef}>
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-8">
                <div className="mt-8">
                    {Object.keys(teams).sort().map((category) => (
                        <div key={category} className="mb-12">
                            {/*Map C1-C5 to labels, defaulting to raw key if not found */}
                            <h3 className="text-2xl mt-4 font-semibold text-indigo-950 mb-2">
                                {categoryLabels[category] || category}
                            </h3>
                            <hr className="mb-6" />
                            
                            <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
                                {teams[category].map((page, idx) => (
                                    <MemberCard
                                        key={idx}
                                        frontMatter={page?.frontMatter}
                                        route={page?.route}
                                        idx={idx + 1}
                                        showImage={!page?.frontMatter?.range}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
});