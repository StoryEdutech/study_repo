import { useState, useEffect } from 'react'

type CounterType = {
  name: string
  count: number
}
const initialCounter: CounterType = { name: 'counter', count: 0 }

export default function useCounters() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([initialCounter])

  const load = () => {
    const storedCounters = localStorage.getItem('counters')
    try {
      const counters: CounterType[] = storedCounters ? JSON.parse(storedCounters) : [initialCounter]
      return counters
    } catch (error) {
      console.log('error occured when loading counter data in local storage')
      console.log(error)
      localStorage.setItem('counters', JSON.stringify([initialCounter]))
      return [initialCounter]
    }
  }

  useEffect(() => {
    setData(load())
    setLoading(false)
  }, [])
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('counters', JSON.stringify(data))
    }
  }, [data, loading])

  const nameUpdater = (key: number) => {
    return (name: string) => {
      if (data[key]) {
        let change = data[key]
        change.name = name
        const newData = data.map((value, index) => {
          return index == key ? change : value
        })
        setData(newData)
      } else {
        console.log('non existing counter is updated')
      }
    }
  }

  const countUpdater = (key: number) => {
    return (count: number) => {
      if (data[key]) {
        let change = data[key]
        change.count = count
        const newData = data.map((value, index) => {
          return index == key ? change : value
        })
        setData(newData)
      } else {
        console.log('non existing counter is updated')
      }
    }
  }

  const counterDeleter = (key: number) => {
    return () => {
      if (data[key]) {
        const newData = data.filter((_, index) => index !== key)
        setData(newData)
      } else {
        console.log('try to delete non exisiting counter')
      }
    }
  }

  const createCounter = () => {
    const newData = data.concat(initialCounter)
    setData(newData)
  }

  return { loading, data, nameUpdater, countUpdater, counterDeleter, createCounter }
}
