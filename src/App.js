import React, {Component} from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./index.css";

class App extends Component {
    state = {
        cards,
        score: 0,
        highscore: 0,
        clicked: []
    };


    clickCount = id => {
        if(this.state.clicked.indexOf(id) > -1 ){
            alert("Sorry, try again.")
            this.setState({ clicked: [] })
            
            if (this.state.score > this.state.highscore) {
                this.setState({ highscore : this.state.score })
            }
            this.setState({ score: 0 })
            return;
        } else {
            var score = this.state.score;
            score++;

            if(score > this.state.highscore){
                this.setState({ highscore : score })
            }
            this.setState({ score : score })
        }

        let clicked = this.state.clicked
        clicked.push(id)
        this.setState({ clicked })    
    }

    moveCard = () => {
        const newArray = [];
            while(newArray.length !== cards.length){
                let card = cards[Math.floor(Math.random() * cards.length)];
                if (newArray.indexOf(card)<0) {
                    newArray.push(card)
                }
            }
            return newArray
    };

    render() {
        return (
            <Wrapper>
                <Header score={this.state.score} highscore={this.state.highscore}>DIGITAL ART GALLERY</Header>
                {this.moveCard().map( art => (
                    <GameCard
                        clickCount={this.clickCount}
                        id = {art.id}
                        key = {art.id}
                        image={art.image}
                        />
                ))}
            </Wrapper>
        );
    }
}

export default App;