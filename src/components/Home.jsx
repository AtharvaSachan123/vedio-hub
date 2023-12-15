import React from 'react'
import { Box, Heading ,Image} from '@chakra-ui/react'
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/3 (1).jpg'
import img4 from '../assests/4 (1).jpg'
import img5 from '../assests/5.png'
const Home = () => {
  return <>
    <Box >
         <MyCarousel/>
    </Box>
  
  </>
};
const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} interval={1000}> 
    <Box w="full" h={'100vh'}>
        <Image src={img1}/>
        <Heading bg={"blackAlpha.600"} color={'white'}>Watch the Future</Heading>
    </Box>
    <Box w="full" h={'100vh'}>
        <Image src={img2}/>
        <Heading bg={"blackAlpha.600"} color={'white'}>Future is Gaming</Heading>
    </Box>
    </Carousel>
)

export default Home
