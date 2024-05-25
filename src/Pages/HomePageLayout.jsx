
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { useNavigation } from 'react-router-dom';
const HomePageLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading"
  return (
    
    <>
    <Navbar/>
    <section className='page'>
      {isPageLoading ? <div className='loading'/>: <Outlet/>}
    </section>
    </>
    
  )
}

export default HomePageLayout
