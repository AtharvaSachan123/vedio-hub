import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
       
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>VEDIO HUB</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose}    variant={"ghost"}  colorScheme={'purple'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"}  colorScheme={'purple'}>
                        <Link to={'/vedios'}>Vedios</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"}  colorScheme={'purple'}>
                        <Link to={'/vedios?category=free'}>Free Vedios</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"}  colorScheme={'purple'}>
                        <Link to={'/upload'}>Upload Vedio</Link>
                    </Button>
                </VStack>
                <HStack pos={'absolute'} bottom={'10'} left={0} w={'full'} justifyContent={'space-evenly'}>
                    <Button  colorScheme={'purple'} variant={'outline'}>
                        <Link to={'/login'} >Log In</Link>
                    </Button>
                    <Button  colorScheme="purple"  variant={'outline'}>
                        <Link to={'/signup'}>SignUP</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
