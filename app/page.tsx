import Navbar from "@/components/navbar/page"
import Hero from "@/components/hero/page"
import ImageSection from "@/components/imagesection/page"
import Achievements from "@/components/courses/page"
import CoursesSection from "@/components/coursesSection/page"
import TeamSection from "@/components/teamSection/page"
import TestimonialsSection from "@/components/testonomial/page"
import Footer from "@/components/footer/page"

 const HomePage = () => {
  return(
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <ImageSection></ImageSection>
      <Achievements></Achievements>
      <CoursesSection></CoursesSection>
      <TeamSection></TeamSection>
      <TestimonialsSection></TestimonialsSection>
      <Footer></Footer>
      






    </div>
  )
}

export default HomePage