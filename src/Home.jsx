import Section1 from "./Components/Section1"
import Services from "./Components/Services"
import Subservices from "./Components/Subservices"
import AboutUs from "./Components/AboutUs"
import ClientReview from "./Components/ClientReview"

const Home = () => {
  return (
    <div>
        <Section1/>
        <Subservices/>
        <Services/>
        <AboutUs/>
        <ClientReview/>
        {/* "homepage": "{Tiwa4all}.github.io/{torun}", */}
    </div>
  )
}

export default Home
