import React from 'react';
import { Avatar, Box, Container, Typography, Rating, Divider } from '@mui/material';

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4,
    feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
    avatarUrl: "https://i.pravatar.cc/300?img=1"
  },
  {
    name: "Dianne Russell",
    rating: 5,
    feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatarUrl: "https://i.pravatar.cc/300?img=2"
  },
  {
    name: "Devon Lane",
    rating: 4,
    feedback: "Normally wings are wings, but theirs are lean meaty and tender, and full of flavor.",
    avatarUrl: "https://i.pravatar.cc/300?img=3"
  }
];

const FeedbackCard = ({ name, rating, feedback, avatarUrl }) => (
  <Box display="flex" mb={2} p={2} border={1} borderRadius={2} borderColor="black" bgcolor="black" color="white" fontSize={10}>
    <Avatar alt={name} src={avatarUrl} sx={{ width: 56, height: 56, mr: 2 }} />
    <Box>
      <Typography variant="h6">{name}</Typography>
      <Rating value={rating} readOnly />
      <Typography variant="body2">{feedback}</Typography>
    </Box>
  </Box>
);

const CustomerRating = () => (
  <Container className='ratings'>
    {feedbacks.map((feedback, index) => (
      <React.Fragment key={index}>
        <FeedbackCard {...feedback} />
        {index < feedbacks.length - 1 && <Divider sx={{ backgroundColor:'white' }} />}
      </React.Fragment>
    ))}
  </Container>
);
export default CustomerRating;
