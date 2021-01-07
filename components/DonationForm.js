import {Box, Button, FormControl, Input, Grid, Textarea, Center} from '@chakra-ui/react'

export default function DonationForm() {
    return (
        <Box p={4} backgroundColor='gray.50'>
            <form>
                <FormControl>
                    <Textarea 
                        placeholder='"pesan buat gw"'
                        backgroundColor='gray.200'></Textarea>
                </FormControl>
                <FormControl maxW='200px'>
                    <Input 
                        placeholder='--dari lo'
                        backgroundColor='gray.200'/>
                </FormControl>
                <Grid mt={4} templateColumns="repeat(3, 1fr)" gap={4}>
                    <Button size='sm' borderRadius='0'>2k</Button>
                    <Button size='sm' borderRadius='0'>5k</Button>
                    <Button size='sm' borderRadius='0'>10k</Button>
                </Grid>
                <Center mt={7}>
                    <Button size='lg' borderRadius='0'>kasihin</Button>
                </Center>
                
            </form>
        </Box>
    )
}