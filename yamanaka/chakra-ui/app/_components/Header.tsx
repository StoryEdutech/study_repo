import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Header({ title }: { title?: string }) {
  return (
    <Box as='header'>
      <Flex
        bg='white'
        color='gray.600'
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor='gray.200'
        align='center'
      >
        <Flex flex={1} justify='space-between' maxW='6xl' mx='auto'>
          <Heading as='h1' size='lg'>
            <NextLink href='/'>Simple Utilities</NextLink>
          </Heading>
          {title ? (
            <Heading as='h2' size='md' color='gray'>
              {title}
            </Heading>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
