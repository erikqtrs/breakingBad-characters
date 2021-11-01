import React from 'react'
import { BreakingItems } from '../BreakingItems/BreakingItems'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
export const BreakingGrid = ( { isLoading, items } ) => {
    return isLoading ? (
        <div className="spinner w-1/3 mt-5 ml-auto mr-auto">
            <FontAwesomeIcon
                icon={faSyncAlt}
                size="4x"
                className="text-green-700 text-center"
                spin
            />   
        </div>
              
        
    ) : (
        <section className="cards mt-12">
            {
                items.map( item => {
                    return( 
                       <BreakingItems 
                        key={item.char_id}
                        item={item}
                       />
                    )
                    
                } )
            }
        </section>
    )
}
