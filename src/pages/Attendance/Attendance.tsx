import {
  Avatar,
  Box,
  Flex,
  Spacer,
  Switch,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Nav from "../../components/Nav";
import { useState } from "react";

const Attendance = () => {
  const childrenData = [
    {
      id: 1,
      name: "Jan",
      lastname: "Kowalski",
      group: "Grupa A",
      imageUrl: "",
      isPresent: false,
      plannedAbsence: false,
    },
    {
      id: 2,
      name: "Ola",
      lastname: "Nowak",
      group: "Grupa B",
      imageUrl: "",
      isPresent: false,
      plannedAbsence: false,
    },
    {
      id: 3,
      name: "Zofia",
      lastname: "Krawczyk",
      group: "Grupa A",
      imageUrl: "",
      isPresent: true,
      plannedAbsence: false,
    },
    {
      id: 4,
      name: "Sonia",
      lastname: "Muzyk",
      group: "Grupa B",
      imageUrl: "",
      isPresent: false,
      plannedAbsence: true,
    },
  ];

  const [filter, setFilter] = useState("ALL");
  const [children, setChildren] = useState(childrenData);

  const name = "Dan";

  const filteredChildren = childrenData.filter(
    (child) => filter === "ALL" || child.group === filter
  );

  const togglePresence = (id: number) => {
    const newChildren = childrenData.map((child) =>
      child.id === id ? { ...child, isPresent: !child.isPresent } : child
    );
    setChildren(newChildren);
  };

  return (
    <Box p="10" position="relative" width="100vw">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box>
          <Nav />
        </Box>
        <Spacer />
        <Box gap="2">
          <Flex alignItems="center" gap="10">
            <Text fontSize="sm">
              Witaj, <strong>{name}</strong>
            </Text>
            <Avatar size="sm" name="Dan Abrahmov" />
          </Flex>
        </Box>
      </Flex>
      <Box p="10" width="full">
        <Tabs
          onChange={(index) => setFilter(["ALL", "Grupa A", "Grupa B"][index])}
        >
          <TabList>
            <Tab>ALL</Tab>
            <Tab>Grupa A</Tab>
            <Tab>Grupa B</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Image</Th>
                    <Th>Name</Th>
                    <Th>Last Name</Th>
                    <Th>Presence</Th>
                    <Th>Planned Absence</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredChildren.map((child) => (
                    <Tr key={child.id}>
                      <Td>photo</Td>
                      <Td>{child.name}</Td>
                      <Td>{child.lastname}</Td>
                      <Td>
                        <Switch
                          isChecked={child.isPresent}
                          onChange={() => togglePresence(child.id)}
                        />
                      </Td>
                      <Td>
                        {child.plannedAbsence ? (
                          <Text color="red">Yes</Text>
                        ) : (
                          <Text>No</Text>
                        )}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Attendance;