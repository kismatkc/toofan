import React from 'react'
import { Button } from './ui/button'

const PlaidLInk = ({user,variant}: PlaidLinkProps) => {
  return (
  <>
  {
    variant === "primary" ?
    
    <Button className='plaidlink-primary'>
Connect bank

    </Button> : 
    
    variant === "ghost" ? 
    
    <Button>
      Connect bank
    </Button> : (
      <Button>
        Connect bank
      </Button>
    )
  }
  </>
  )
}

export default PlaidLInk
