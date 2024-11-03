package com.seminario.carpinchoapi.model;

import java.util.Map;
import java.util.HashMap;

public class Account {
    private double accountBalance;
    private Map<String, Double> portfolio;

    public Account(double startingMoney){
        this.accountBalance = startingMoney;
        this.portfolio = new HashMap<>();
    }

    public double getAccountBalance(){
        return accountBalance;
    }

    // Nuevo método para establecer un nuevo balance
    public void setAccountBalance(double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public Map<String, Double> getPortfolio(){
        return portfolio;
    }

    public double addAsset(String assetId, double quantity){
        if (quantity <= 0) {
            throw new IllegalArgumentException("La cantidad debe ser mayor a cero.");
        }

        portfolio.put(assetId, portfolio.getOrDefault(assetId, 0.0) + quantity);
        return accountBalance;
    }

    public double removeAsset(String assetId, double quantity){
        if (quantity <= 0) {
            throw new IllegalArgumentException("La cantidad debe ser mayor a cero.");
        }

        double currentQuantity = portfolio.getOrDefault(assetId, 0.0);
        if (quantity > currentQuantity){
            throw new IllegalArgumentException("La cantidad vendida supera la cantidad tenida.");
        }

        portfolio.put(assetId, currentQuantity - quantity);
        return accountBalance;
    }
}
