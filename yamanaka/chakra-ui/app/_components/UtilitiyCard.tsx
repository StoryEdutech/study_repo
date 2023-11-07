import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function UtilityCard({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) {
  return (
    <Card maxW='md'>
      <CardHeader>
        <NextLink href={link}>
          <Heading>{title}</Heading>
        </NextLink>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
    </Card>
  )
}
