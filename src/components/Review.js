import React, { useState } from 'react';

// Predefined reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo.',
    }
];

const Review = () => {
    const [index, setIndex] = useState(0); // State to manage the current review index
    const { id, name, job, image, text } = reviews[index]; // Destructure current review

    // Function to go to the previous review
    const prevReview = () => {
        setIndex(index === 0 ? reviews.length - 1 : index - 1);
    };

    // Function to go to the next review
    const nextReview = () => {
        setIndex(index === reviews.length - 1 ? 0 : index + 1);
    };

    // Function to display a random review, avoiding the current index
    const randomReview = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * reviews.length);
        } while (randomIndex === index);
        setIndex(randomIndex);
    };

    return (
        <article className="review">
            <img src={image} alt={name} className="person-img" />
            <h4 id={`author-${id}`} className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}>Prev</button>
                <button className="next-btn" onClick={nextReview}>Next</button>
                <button className="random-btn" onClick={randomReview}>surprise me</button>
            </div>
        </article>
    );
};

export default Review;
