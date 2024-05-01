import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  SimpleGrid,
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Nav from "components/Nav";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const attendanceData = [
  { name: "Mon", Present: 22, Absent: 3 },
  { name: "Tue", Present: 20, Absent: 5 },
  { name: "Wed", Present: 23, Absent: 2 },
  { name: "Thu", Present: 19, Absent: 6 },
  { name: "Fri", Present: 21, Absent: 4 },
];

const events = [
  { day: "Poniedziałek", event: "Wyjście do kina" },
  { day: "Wtorek", event: "Zawody biegowe" },
  { day: "Czwartek", event: "Wycieczka do ZOO" },
];

const Dashboard = () => {
  const name = "Dan";

  return (
    <Box display="flex" flexDirection="column">
      <Box p="10" position="relative" width="100vw">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box>
            <Nav />
          </Box>
          <Spacer />
          <Box gap="2">
            <Flex alignItems="center" gap="10">
              <Text fontSize="sm">
                Hello, <strong>{name}</strong>
              </Text>
              <Avatar size="sm" name="Dan Abrahmov" />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box p="10">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Box
            p="6"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Heading size="md" mb="4">
              Daily Abssence
            </Heading>
            <Flex p="6" justifyContent="space-between">
              <Box
                p="2"
                borderRadius="lg"
                flex="1"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="green.300"
              >
                <Heading as="h3" size="lg" color="whitesmoke">
                  21
                </Heading>
                <Heading as="h5" size="sm" color="whitesmoke">
                  PRESENT
                </Heading>
              </Box>
              <Box
                p="2"
                borderRadius="lg"
                flex="1"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="red.300"
              >
                <Heading as="h3" size="lg" color="whitesmoke">
                  5
                </Heading>
                <Heading as="h5" size="sm" color="whitesmoke">
                  ABSENT
                </Heading>
              </Box>
            </Flex>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
            <Heading size="md" mb="4">
              Important Events This Week
            </Heading>
            <List spacing={3}>
              {events.map((event, index) => (
                <ListItem key={index}>
                  <ListIcon color="green.500" />
                  {event.day}: {event.event}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6" display="flex" flexDirection="column">
              <Heading size="md" mb="4">
                Daily Schedule
              </Heading>
              <Text fontSize="sm">
                <Badge colorScheme="purple" mr="2">
                  9:00 AM
                </Badge>
                Morning Circle Time
              </Text>
              <Text fontSize="sm">
                <Badge colorScheme="purple" mr="2">
                  10:00 AM
                </Badge>
                Art & Craft
              </Text>
              <Text fontSize="sm">
                <Badge colorScheme="purple" mr="2">
                  11:00 AM
                </Badge>
                Outdoor Play
              </Text>
              <Text fontSize="sm">
                <Badge colorScheme="purple" mr="2">
                  12:00 PM
                </Badge>
                Lunch
              </Text>
              <Text fontSize="sm">
                <Badge colorScheme="purple" mr="2">
                  1:00 PM
                </Badge>
                Nap Time
              </Text>
              <Text fontSize="sm">
                <Badge colorScheme="purple" mr="2">
                  3:00 PM
                </Badge>
                Story Time
              </Text>
              <Text fontSize="sm">
                <Badge colorScheme="purple" mr="2">
                  4:00 PM
                </Badge>
                Snack & Free Play
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box p="10">
        <Heading size="md" mb="4">
          Attendance Statistics
        </Heading>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Present" stroke="green" />
            <Line type="monotone" dataKey="Absent" stroke="red" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
