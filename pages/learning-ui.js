import DonationForm from '../components/DonationForm'
import {Flex, Heading, Box} from '@chakra-ui/react'


export default function LearnUI() {
  return (
    <Flex justifyContent='center'>
        <Box mt={20} maxW='400px'>
        <Box>
            <Heading size='2xl' textAlign='center'>
                kasih gw duit yuk, 
            </Heading>
            <Heading size='3xl' textAlign='center'>
                makasih
            </Heading>
        </Box>
        <Box mt={4}>
            <DonationForm/>
        </Box>
        
        
        </Box>
        
    </Flex>
    
  )
}
