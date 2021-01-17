import React from 'react';
import "../index.css";
import { Grid, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const HomePage = () => {
        
    return(
        
        <>
        
        <div className="fullbg">

            <Grid  columns={3} padded>
                <Grid.Column >
                <Image
                src='https://res.cloudinary.com/a20085909/image/upload/v1610845950/Discover-Logo_wytdgp.png'
                as={Link} 
                to='/u/movies' />
                
                </Grid.Column>
                <Grid.Column >
                <Image 
                src='https://res.cloudinary.com/a20085909/image/upload/v1610844479/seesee_npb3sa.jpg'
                href = "https://www.themoviedb.org/" />
                </Grid.Column>
                <Grid.Column >
                <Image 
                src='https://res.cloudinary.com/a20085909/image/upload/v1610846121/Upcoming-Logo_te5awn.png'
                as={Link} 
                to='/u/upcoming'
                />
                </Grid.Column>
            </Grid>

        </div>

        </>

    );
};

export default HomePage;
