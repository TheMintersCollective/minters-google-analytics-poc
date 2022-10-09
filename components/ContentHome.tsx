import {
    Box,
    BoxProps,
    Button,
    Center,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    propNames,
    SimpleGrid,
    Stack,
    VStack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
    LinkBox,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { useState, useEffect, useRef } from 'react'
  import { useRouter } from 'next/router'
  
  
  export const ContentHome = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const googleCard = {color: '#EF931D', authLink:'', src:'', alt:'Google Analytics'}
    const [userGoogleAnalytics, setUserGoogleAnalytics] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [phylloConnectSDK, setPhylloConnectSDK] = useState({});
    
  
    const Card = (props: BoxProps) => (
      <Box
        minH="60"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        {...props}
      >
        <Stack spacing="2" textAlign="center"justifyContent="center" alignItems="center" py={20}>
          <Text fontSize="lg" fontWeight="medium" textColor={'gray.500'}>There’s nothing here yet</Text>
        </Stack>
      </Box>
    )
    const CardButton = (props: BoxProps) => (
      <Box
        minH="40"
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        {...props}
      >
  
        <Stack spacing="2" textAlign="center"justifyContent="center" alignItems="center" p={16}>
          <Text fontSize="lg" fontWeight="medium">You haven’t added analtyics data.</Text>
          <Text fontSize="sm">Welcome 👋 Let’s get started.</Text>
        </Stack>
            
      </Box>
    )

    return (
        <Box as="section" height="100vh"  maxW="100%" >
            <Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }} maxW={{ base:"95%", sm: "100%", md: "100%"}}>
                <Stack spacing={{ base: '8', lg: '6' }} >
                    <Stack spacing="4" direction={{ base: 'column', lg: 'row' }} justify="space-between">
                        <Stack spacing="1">
                            {/* <Heading size={useBreakpointValue({ base: 'xs', lg: 'sm' })} fontWeight="medium"> */}
                            <Heading size='sm' fontWeight="medium">
                            Charts POC
                            </Heading>
                            <Text color="muted">Connect to display your analytics data</Text>
                            <Text pl={{ base: '1', md: '6' }} pb={2} textAlign="left" justifyContent="left" fontWeight="medium">Google Analytics Sign In</Text>
                            <Box pb={3} as="button" onClick={() => {}}>
                            <Image
                            htmlWidth='175px'
                            objectFit='cover'
                            boxShadow='sm-dark'
                            src='https://developers.google.com/static/identity/images/btn_google_signin_dark_normal_web.png'
                            alt='Sign in with Google Analytics'
                            /></Box>
                        </Stack>
                    </Stack>
                    <CardButton minH="xs" />
                </Stack>
            </Container>
        </Box>
    )
  }