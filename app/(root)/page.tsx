import Header from "@/components/Header"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import RightSidebar from "@/components/RightSidebar"

const Home = ()=>{

  const loggedIn = {firstName: "kismat",lastName:"k c",email: "kismatkc28@gmail.com"}
  return (
<section className="home">
<div className="home-content">
<header className="home-header">
<Header type="greeting" title="Welcome" user={loggedIn?.firstName || "guest"} subtext="Access and amanage your account and transcations efficiently" />

</header>

  <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={123433.56} />

</div>
  <RightSidebar
    user={loggedIn}
    transactions={[]}
    banks={[{currentBalance: 154.45},{currentBalance: 234.23}]}
    />
</section>
    
  )
}


export default Home