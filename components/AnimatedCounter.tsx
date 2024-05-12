"use client"

import Countup from "react-countup"

const AnimatedCounter = ({amount}: {amount:number})=>{
  return (
<div className="w-full total-balance-amount flex-center gap-2">
<Countup end={amount} decimal="." prefix="$" decimals={2}/>
</div>
  )
}


export default AnimatedCounter 

// const x = ()=>{
//   return (

//   )
// }


// export default x 