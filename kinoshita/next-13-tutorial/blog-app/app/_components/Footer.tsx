import { Container, Box, Text } from "@/lib/components"

const Footer = () => {
  return (
    <Box bg="gray.100" color="gray.700" as="footer">
      <Container maxW="5xl" py={4}>
        <Text as="small">© 2023 azukiazusa</Text>
      </Container>
    </Box>
  )
}

export default Footer
