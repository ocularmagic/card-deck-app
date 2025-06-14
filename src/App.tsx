import { useState } from 'react';
import styled from 'styled-components';

// Define card type
interface Card {
  suit: string;
  value: string;
}

// Generate a standard deck of 52 cards
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const deck: Card[] = suits.flatMap(suit => values.map(value => ({ suit, value })));

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5; /* Telegram-like background */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Deck = styled.div`
  width: 120px;
  height: 180px;
  background: url('https://via.placeholder.com/120x180/ccc/000?text=Deck') no-repeat center;
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Card = styled.div`
  width: 120px;
  height: 180px;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
  transform: translateY(20px);
`;

const App: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  const handleClick = () => {
    if (currentCard) {
      // Return card to deck
      setCurrentCard(null);
    } else {
      // Draw a random card
      const randomIndex = Math.floor(Math.random() * deck.length);
      setCurrentCard(deck[randomIndex]);
    }
  };

  return (
    <Container>
      {currentCard ? (
        <Card onClick={handleClick}>
          {currentCard.value} of {currentCard.suit}
        </Card>
      ) : (
        <Deck onClick={handleClick} />
      )}
    </Container>
  );
};

export default App;
