package com.seminario.carpinchoapi.service;

import java.util.List;
import java.util.Map;

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
    private GameState currentGameState;


    public GameState getCurrentGameState() {
        if (currentGameState == null) {
            throw new IllegalStateException("El juego no ha comenzado aún.");
        }
        return currentGameState;
    }
    

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

        GameState currentState = getCurrentGameState(); // obtiene el juego actual

        double accountBalance = currentState.getAccountBalance();  //  el balance de cuenta del usuario


        // Validar la solicitud de TradeRequest
        if (!tradeRequest.isValid()) {
            throw new IllegalArgumentException("Trade request no válida");
        }

        // Obtener el activo desde el Market en el GameState
        Asset asset = tradeRequest.getAsset();
        double tradeAmount = tradeRequest.getQuantity().doubleValue() * tradeRequest.getPrice().doubleValue();

        switch (tradeRequest.getTradeType().toUpperCase()) {
            case "BUY":

                if (accountBalance < tradeAmount) { // valida si tiene suficiente balance para comprar
                    throw new IllegalArgumentException("Balance insuficiente para realizar la compra");
                }

                // Actualizar el balance y las tenencias de activos en el GameState
                currentState.updateBalance(accountBalance - tradeAmount);
                currentState.addAssetHoldings(asset.getId().toString(), tradeRequest.getQuantity().doubleValue());
                break;

            case "SELL":

                Map<String, Double> currentHoldings = currentState.getAssetHoldings(); // valida si tiene suficiente balance para vender
                String assetId = asset.getId().toString(); // el id del activo que se quiere vender

                Double currentQuantity = currentHoldings.get(assetId); //la cantidad actual del activo


                // Validar que el activo existe en las tenencias y que la cantidad es suficiente
                if (currentQuantity == null || currentQuantity < tradeRequest.getQuantity().doubleValue()) {
                    throw new IllegalArgumentException("Cantidad insuficiente del activo para vender");
                }

                // Actualizar el balance y las tenencias de activos en el GameState
                currentState.updateBalance(accountBalance + tradeAmount);
                currentState.removeAssetHoldings(assetId, tradeRequest.getQuantity().doubleValue());
                break;

            default:
                throw new IllegalArgumentException("Tipo de comercio no reconocido: " + tradeRequest.getTradeType());
        }

        // Regresar el nuevo estado del juego después de procesar la transacción
        return currentState;
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