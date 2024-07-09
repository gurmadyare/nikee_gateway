import {
  Navbar,
  Reviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import CustomerReviews from "./sections/CustomerReviews";


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
