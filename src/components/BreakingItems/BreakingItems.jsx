import React from 'react';
import ReactImageFallback from 'react-image-fallback';
import noImage from '../../assets/img/no-image.png';

export const BreakingItems = ( { item } ) => {
    return (
        <div className="wrap">
            <div className="card">
                <div className="front">
                    <ReactImageFallback 
                        src={item.img}
                        fallbackImage={noImage}
                        initialImage={item.img}
                        alt={item.name}
                        className="img"
                    />
                </div>
                <div className="back">
                    <h2 className="text-black font-semibold text-center text-2xl text-blue-100"> {item.name} </h2>
                    <ul className="ml-3 text-base text-white mt-5">
                        <li> <strong className="">Nickname:</strong>  { item.nickname } </li>
                        <li> <strong className="">Birthday:</strong>  { item.birthday } </li>
                        <li> <strong className="">Occupation:</strong> 
                            <ul className="list-disc text-white ml-6 text-base">
                                {
                                    item.occupation.map( oc => {
                                        return( <li> { oc } </li> )
                                        
                                    } )
                                }
                            </ul>
                        </li>
                        <li> <strong className="">Status:</strong> { item.status } </li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
