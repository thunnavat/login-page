import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'

const Home: NextPage = () => {
  return (
    <div className="w-fit md:w-full">
      <Navbar />
      <SignIn />
    </div>
  )
}

export default Home
