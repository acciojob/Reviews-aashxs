import React, { useState } from 'react'
import Review from './Review';

const App = () => {
    const[current,Next]=useState(1);

    const previous = ()=>{
        if(current>1){
            Next(current-1);
        }
    }

    const next = ()=>{
        if(current<4){
            Next(current+1);
        }
    }

    const random = ()=>{
     
      let num = current;
  while (num === current) {
    num = Math.floor(Math.random() * 4) + 1;
  }
  Next(num);
    }
    
    const reviews =[
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
      ];
  return (
    <div>
        <h1 id="review-heading">Our Reviews</h1>
        {reviews.map((data, index) => ( data.id===current?
        <Review
          key={index} 
          name={data.name}
          id={data.id}
          image={data.image} 
          text={data.text}
          job={data.job}
        />:null
      ))}
       
        <button onClick={previous} className='prev-btn'>Previous</button>
        <button onClick={random} className='random-btn'>surprise me</button>
        <button onClick={next} className='next-btn'>Next</button>
    </div>
  )
}

export default App

