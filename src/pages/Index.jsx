import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, IconButton, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {
    if (todoItem.trim() !== "") {
      setTodoList([...todoList, todoItem]);
      setTodoItem("");
    }
  };

  const deleteTodoItem = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <Box maxWidth="400px" margin="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Todo App
      </Heading>
      <Flex mb={8}>
        <Input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} placeholder="Enter a todo item" mr={4} />
        <Button onClick={addTodoItem} colorScheme="blue" leftIcon={<FaPlus />}>
          Add
        </Button>
      </Flex>
      <List spacing={4}>
        {todoList.map((item, index) => (
          <ListItem key={index} p={4} borderRadius="md" boxShadow="md" bg={useColorModeValue("gray.100", "gray.700")}>
            <Flex align="center">
              <Box flex="1">{item}</Box>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => deleteTodoItem(index)} colorScheme="red" size="sm" />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
