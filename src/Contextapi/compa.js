import React, {useContext} from 'react'
import { UseContext } from './UseContext'

export default function Compa() {
  
    const users = useContext(UseContext)
  
    return (
    <div>
        This is Component A
        <UseContext.Consumer>
            {
                user =>{
                    return <div>This is grand child</div>
                }
            }
        </UseContext.Consumer>
    </div>
  )
}
