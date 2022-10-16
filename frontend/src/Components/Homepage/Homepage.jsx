import { Box, Button, Divider, SimpleGrid, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import './Homepage.css'
import {FiTrendingUp} from "react-icons/fi"
const trending_data =[
    {
        sl:"01",
        name:"Durgashankr pal",
        des:"Hello this is my first blolg so i thik after reding this you gonna like my work"
    },
    {
        sl:"02",
        name:"Durgashankr pal",
        des:"Hello this is my first blolg so i thik after reding this you gonna like my work"
    },
    {
        sl:"03",
        name:"Durgashankr pal",
        des:"Hello this is my first blolg so i thik after reding this you gonna like my work"
    },
    {
        sl:"04",
        name:"Durgashankr pal",
        des:"Hello this is my first blolg so i thik after reding this you gonna like my work"
    },
    {
        sl:"05",
        name:"Durgashankr pal",
        des:"Hello this is my first blolg so i thik after reding this you gonna like my work"
    },
    {
        sl:"06",
        name:"Durgashankr pal",
        des:"Hello this is my first blolg so i thik after reding this you gonna like my work"
    }
]

const Homepage = () => {
  return (
    <div>
        <div class="container">
      <div class="content">
        <div class="heading">
          <h1>Help People To Explore <br />By Exploring Yourself</h1>
        </div>
        <div class="btn">
          <button id="gr">Get Started</button>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
        //   fill="#bf3890"
          fill="#da8cbf"
          fill-opacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/pink-gradient.png"
        alt=""
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/blue-gradient.png"
        class="img2"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/right-round.svg"
        class="img3"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/top-round.png"
        class="img4"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/big-pink-round.png"
        class="img5"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/small-pink-round.png"
        class="img6"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/big-blue-round.png"
        class="img7"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/small-blue-round.png"
        class="img8"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/bottom-round.svg"
        class="img9"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/bottom-right-round.png"
        class="img10"
      />
      <img
        src="https://kissflow.com/hubfs/Kissflow%20Wesbsite%20Lowcode%20Images/Banner%20Animation%20Images/big-blue-round.png"
        class="img11"
      />
    </div>
    <div className='trending'> 
        <Box px={["20px","50px"]}>
            <div className='title_blog'>
            <div className='symbol'><FiTrendingUp/></div>
            <p>Trending in dBlog</p>
            </div>
       
            <SimpleGrid columns={[1,2,3]} spacing='25px' mt={"2rem"} mb={"2rem"}>
                {
                    trending_data.map((el)=>(
                        <Box width={"100%"} className='child'>
                        <div className='child_box'>
                            <div className='number_box'>
                                <h1>{el.sl}</h1>
                            </div>
                            <div className='details_box'>
                                    <div className='creater_details'>
                                        <div className='creater_img'></div>
                                        <div className='creater_name'>{el.name}</div>
                                    </div>
                                    <div>
                                        <h2 className='summery'>{el.des}</h2>
                                    </div>
                                    <div className='creater_date_details'>
                                        <div className='creater_date'>10 Oct</div>
                                        <div className='creater_time'>11 min</div>
                                    </div>
                            </div>
                        </div>
    
                    </Box>
                    ))
                }
            </SimpleGrid>
        </Box>

    </div>
    <Divider mb={"2rem"}/>

    <div className='body_part'>
        <div className='body_details'>

        </div>
        <div className='body_bottom'>
        <div style={{ marginTop: "2rem", margin: "auto" }}>
                <Text fontSize={13} m={"auto"} textAlign={"left"} color={"black"} fontWeight={"600"}>DISCOVER MORE OF WHAT MATTERS TO YOU</Text>
                <div style={{ display: "block", margin: "auto" }}>
                    <Stack
                        direction='row'
                        align='center'
                        colorScheme={"none"}
                        variant={"outline"}
                        borderColor={"blue.400"}
                        w={"100%"}
                        m={"auto"}
                        mt={15}
                        mb={20}
                    >
                        <Wrap spacing={4}>
                            <WrapItem>
                                <Button
                                    variant='outline'
                                    colorScheme={"white"}
                                    color={"black"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    py={"10px"}
                                    borderRadius={"none"}
                                // px={10}
                                >
                                    self
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    borderRadius={"none"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Relationship
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    borderRadius={"none"}
                                    py={"10px"}
                                // px={10}
                                >
                                    Data Science
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    py={"10px"}
                                    borderRadius={"none"}
                                // px={10}
                                >
                                    Programming
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    py={"10px"}
                                    borderRadius={"none"}
                                // px={10}
                                >
                                   Productivity
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    py={"10px"}
                                    borderRadius={"none"}
                                // px={10}
                                >
                                    Javascript
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    py={"10px"}
                                    borderRadius={"none"}
                                // px={10}
                                >
                                    Machine Learning
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    py={"10px"}
                                    borderRadius={"none"}
                                // px={10}
                                >
                                    Politics
                                </Button>
                            </WrapItem>
                            <WrapItem>
                                <Button
                                    color={"black"}
                                    variant='outline'
                                    colorScheme={"white"}
                                    _hover={{ border: "blue.400", color: "#bf3890" }}
                                    h={"30px"}
                                    py={"10px"}
                                    borderRadius={"none"}
                                // px={10}
                                >
                                    Health
                                </Button>
                            </WrapItem>
                        </Wrap>
                    </Stack>
                </div>

        </div>
        <Divider mt={"-2rem"} mb={"2rem"}/>
        <div className='footer'>
                <p>Help</p>
                <p>Status</p>
                <p>Writers</p>
                <p>Blog</p>
                <p>career</p>
                <p>Terms</p>
                <p>About</p>
                <p>Knowable</p>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Homepage