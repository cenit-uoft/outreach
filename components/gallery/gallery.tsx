import React, { useState } from 'react';
import { Galleria } from 'primereact/galleria';

const ALBUMS_DATA = [
    {
        id: 'cenit-team',
        albumName: 'CENIT Team Gathering - July 2026',
        items: [
            {
                filename: '1.jpg',
                description: 'CENIT group photo taken in front of the Bahen Center for Information Technology entrance on St. Geroge street.'
            },
            {
                filename: '2.jpg',
                description: 'CENIT group photo taken in front of the King\'s College Cir at the Univesity of Toronto St. George campus.'
            },
            {
                filename: '3.jpg',
                description: 'CENIT group photo taken at the Unviersity of Toronto St. George campus, featuring CN Tower in the background.'
            },
            {
                filename: '4.jpg',
                description: 'CENIT group photo taken in front of the Convocation Hall located at the Universtiy of Toronto St.George campus.'
            },
            {
                filename: '5.jpg',
                description: 'CENIT group photo taken inside the MyHall building at the University of Toronto St. Geroge campus.'
            },
            {
                filename: '6.jpg',
                description: 'CENIT group photo taken inside the Bahen Center for Information Technology at the Univeristy of Toronto St. George campus.'
            },
            {
                filename: '7.jpg',
                description: 'CENIT group photo taken inside the CENIT office at Bahen Center for Information Technology.'
            }
        ]
    },
    {
        id: 'cenit-jj-group',
        albumName: 'Professor JJ Group Members - July 2026',
        items: [
            {
                filename: '8.jpg',
                description: 'Professor JJ\'s research group members photo taken inside the CENIT\'s Office at the  Bahen Center for Information Technology.'
            }
        ]
    }
];

export default function GalleryComponent() {
    // Track the selected album ID in state (defaults to the first album)
    const [selectedAlbumId, setSelectedAlbumId] = useState(ALBUMS_DATA[0]?.id);

    // Find the currently active album object based on the state
    const currentAlbum = ALBUMS_DATA.find(album => album.id === selectedAlbumId);

    // Map only the images belonging to the active album
    const imagesData = (currentAlbum?.items || []).map(item => {
        const cleanTitle = item.filename
            .substring(0, item.filename.lastIndexOf('.'))
            .replace(/[-_]/g, ' ');

        return {
            itemImageSrc: `/gallery/${item.filename}`,
            thumbnailImageSrc: `/gallery/${item.filename}`,
            alt: cleanTitle,
            title: cleanTitle,
            description: item.description
        };
    });

    const responsiveOptions = [
        { breakpoint: '1024px', numVisible: 5 },
        { breakpoint: '768px', numVisible: 3 },
        { breakpoint: '560px', numVisible: 1 }
    ];

    const itemTemplate = (item: any) => {
        return (
            <div className="w-full h-[900px] overflow-hidden flex items-center justify-center bg-black/5 rounded-t-xl">
                <img 
                    src={item.itemImageSrc} 
                    alt={item.alt} 
                    className="w-full h-full object-cover block" 
                />
            </div>
        );
    };

    const thumbnailTemplate = (item: any) => {
        return (
            <div className="p-1">
                <img 
                    src={item.thumbnailImageSrc} 
                    alt={item.alt} 
                    className="w-16 h-14 object-cover rounded-md block hover:opacity-80 transition-opacity" 
                />
            </div>
        );
    };

    const captionTemplate = (item: any) => {
        return (
            <div className="bg-[#0A192F] py-2.5 px-4 text-white rounded-b-xl border-t border-navy-900/50 shadow-inner">
                <h4 className="text-xl font-semibold capitalize tracking-wide text-white">
                    {item.title}
                </h4>
                <p className="text-white/90 text-base mt-1 leading-snug">
                    {item.description}
                </p>
            </div>
        );
    };

    return (
        // Converted layout to a Flex container to hold the side menu and the gallery side-by-side
        <div className="w-screen max-w-[75vw] relative left-1/2 -translate-x-1/2 bg-white p-6 rounded-3xl shadow-lg border-2 border-indigo-950/20 mt-6 flex flex-col md:flex-row gap-6">
            
            {/* Left Segment: Album Selector Navigation */}
            <div className="w-full md:w-[300px] flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                <h3 className="text-lg font-bold text-indigo-950 mb-4 tracking-wide uppercase">
                    Albums
                </h3>
                <ul className="flex flex-row md:flex-col gap-2.5 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                    {ALBUMS_DATA.map((album) => {
                        const isActive = album.id === selectedAlbumId;
                        return (
                            <li key={album.id} className="w-full flex-shrink-0">
                                <button
                                    onClick={() => setSelectedAlbumId(album.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all text-sm md:text-base ${
                                        isActive
                                            ? 'bg-indigo-950 text-white shadow-md'
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    {album.albumName}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Right Segment: PrimeReact Galleria Slider */}
            <div className="flex-1 min-w-0">
                {imagesData.length > 0 ? (
                    <Galleria 
                        // Key property forces PrimeReact to safely reset the slider state whenever the album swaps
                        key={selectedAlbumId}
                        value={imagesData} 
                        responsiveOptions={responsiveOptions} 
                        numVisible={5} 
                        item={itemTemplate} 
                        thumbnail={thumbnailTemplate} 
                        caption={captionTemplate} 
                        circular 
                        autoPlay 
                        transitionInterval={5000}
                        style={{ width: '100%' }} 
                    />
                ) : (
                    <p className="text-center text-gray-500 py-8">
                        No files found in this album.
                    </p>
                )}
            </div>
        </div>
    );
}