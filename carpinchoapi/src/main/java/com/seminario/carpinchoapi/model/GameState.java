package com.seminario.carpinchoapi.model;

import java.util.List;
import java.util.Map;

public class GameState {
    private Account playerAccount;
    private Market market;
    private List<Event> news;
    private double targetRevenue;
    private int currentWeek;
    private int numberOfWeeks;

    public void setStartingConditions(double startingAmmount, double targetRevenue, int numberOfWeeks) {
        this.playerAccount = new Account(startingAmmount);
        this.targetRevenue = targetRevenue;
        this.numberOfWeeks = numberOfWeeks;
        this.currentWeek = 0;
    }

    public void setMarket(Market market) {
        this.market = market;
    }

    public void setNews(List<Event> news){
        this.news = news;
    }

    public GameState getCurrentGameState() {
        return this;
    }

    // Obtener el balance de la cuenta del jugador
    public double getAccountBalance() {
        return playerAccount.getAccountBalance();
    }

    // Actualizar el balance en la cuenta del jugador
    public void updateBalance(double newBalance) {
        playerAccount.setAccountBalance(newBalance);  // Ajustado para usar setAccountBalance()
    }

    // Añadir a las tenencias de activos del jugador
    public void addAssetHoldings(String assetId, double quantity) {
        playerAccount.addAsset(assetId, quantity);
    }

    // Quitar de las tenencias de activos del jugador
    public void removeAssetHoldings(String assetId, double quantity) {
        playerAccount.removeAsset(assetId, quantity);
    }

    // Obtener el portafolio actual del jugador
    public Map<String, Double> getAssetHoldings() {
        return playerAccount.getPortfolio();
    }

}
