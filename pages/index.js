import Head from 'next/head'
import {Container, Heading, Text, Box, Stack, Button, Textarea, Input} from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>bagi duit dong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container centerContent='true'>
        <Box w='90%'>
          <Heading size='2xl' mt='20'>
            Bagi gw duit, makasih
          </Heading>
          <Text fontSize='2xl'>
            tempat orang bagi duit ke gw
          </Text>
          
          <Box mt='10px' w='90%'>
            <Text mb="8px">Pesan:</Text>
            <Textarea placeholder="buat jajan indomie" />
            <Text mb="8px">dari:</Text>
            <Input placeholder="neneng" />
            <Text mt='2px' mb="8px">sebanyak:</Text>
            <Stack spacing={4} direction="row" align="center">
              <Button colorScheme="teal" size="sm">
                Rp 2.000
              </Button>
              <Button colorScheme="teal" size="sm">
                Rp 5.000
              </Button>
              <Button colorScheme="teal" size="sm">
                Rp 10.000
              </Button>
            </Stack>
            

          </Box>

          

          
          
        </Box>
        
          

        
          
      </Container>


 
    </div>
  )
}
