import React from "react";
import Slider from "react-slick";
import { Box, Button, Text, Link } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type EventType = {
  id: number;
  url: string;
  title: string;
  day: string;
  month_and_year: string;
  place: string;
  concert_type: string;
};

const Carousel = ({ events }: { events: EventType[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box width="100%" overflow="hidden">
      <Slider {...settings}>
        {events.map((event) => (
          <Box
            key={event.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            width="100%"
            height="350px"
            maxWidth="300px"
            mx="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text mt={2} fontSize="l" fontWeight="bold" textAlign="center">
              {event.title}
            </Text>
            <Box bg="teal" color="white" borderRadius="md" p={3} m={3}>
              <Text mt={2} fontSize="35px" fontWeight="bold" textAlign="center">
                {event.day}
              </Text>
              <Text mt={2} textAlign="center">
                {event.month_and_year}
              </Text>
            </Box>
            <Text mt={2} textAlign="center">
              {event.place}
            </Text>
            <Text mt={2} textAlign="center">
              {event.concert_type}
            </Text>
            <Link
              href={event.url}
              mt={4}
              width="100%"
              textAlign="center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colorScheme="teal" width="100%">
                Więcej
              </Button>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
