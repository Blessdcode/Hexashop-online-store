import {ACCESSORIES} from '../../shop-data'

import AccessoriesCard from '../accessories-card/accessories-card'
const Accessories = () =>{
    return (
        <div>
    {ACCESSORIES.map((access)=> (
        <AccessoriesCard key={access.id} data={access}/>
    ))}
        </div>
    )
}

export default Accessories