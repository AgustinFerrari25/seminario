package com.seminario.carpinchoapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.seminario.carpinchoapi.model.Asset;
import com.seminario.carpinchoapi.model.Event;
import com.seminario.carpinchoapi.model.GameResult;
import com.seminario.carpinchoapi.model.GameState;
import com.seminario.carpinchoapi.model.Market;
import com.seminario.carpinchoapi.model.TradeRequest;
import com.seminario.carpinchoapi.model.WeekSummary;

@Service
public class GameService {
    //private final AssetService assetService;
    //private final EventService eventService;

    

    public GameState startNewGame(int difficulty) {
        
        // Initialize target revenue, starting amount, number of weeks, etc., based on difficulty
        GameState gameState = new GameState();
        calculateStartingConditions(gameState, difficulty);
        
        // Generate assets with initial prices and history
        Market market = generateMarket();
        gameState.setMarket(market);

        // Save or return the initialized game state
        return gameState;
    }

    private Market generateMarket() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'generateMarket'");
    }

    private void calculateStartingConditions(GameState gameState, int difficulty){
        double targetRevenue;
        double startingAmmount;
        int numberOfWeeks;
        switch (difficulty) {
            case 0:
                startingAmmount = 1000.00;
                targetRevenue = 1500.00;
                numberOfWeeks = 4;
                break;
            case 1:
                startingAmmount = 1000.00;
                targetRevenue = 1500.00;
                numberOfWeeks = 4;
                break;
            case 2:
                startingAmmount = 1000.00;
                targetRevenue = 2000.00;
                numberOfWeeks = 10;
                break;
            default:
                startingAmmount = 1000.00;
                targetRevenue = 1500.00;
                numberOfWeeks = 4;
                break;
        }
        gameState.setStartingConditions(startingAmmount, targetRevenue, numberOfWeeks);
    }

    public void executeTurn() {
        // Update assets based on events and other game logic
    }

    public GameState processTrade(TradeRequest tradeRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'processTrade'");
    }

    public List<Asset> getAssetsInPlay() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAssetsInPlay'");
    }

    public List<Event> getCurrentEvents() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCurrentEvents'");
    }

    public double getAccountBalance() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAccountBalance'");
    }

    public WeekSummary startNewWeek() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'startNewWeek'");
    }

    public GameState finalizeWeek() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'finalizeWeek'");
    }

    public GameResult calculateGameResult() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'calculateGameResult'");
    }

    // Methods to retrieve game state information
}