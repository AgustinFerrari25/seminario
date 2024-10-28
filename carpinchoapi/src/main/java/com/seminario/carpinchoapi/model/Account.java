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

    public Map<String, Double> getPortfolio(){
        return portfolio;
    }

    public double addAsset(String assetId, double quantity){
            if (quantity <= 0) {
                throw new IllegalArgumentException("La cantidad debe ser mayor a cero.");
            }
    
            if (portfolio.containsKey(assetId)) {
                double currentQuantity = portfolio.get(assetId);
                portfolio.put(assetId, currentQuantity + quantity);
            } else {
                portfolio.put(assetId, quantity);
            }
        return accountBalance;
    }

    public double removeAsset(String assetId, double quantity){
        if (quantity <= 0) {
            throw new IllegalArgumentException("La cantidad debe ser mayor a cero.");
        }

        if (portfolio.containsKey(assetId)) {
            double currentQuantity = portfolio.get(assetId);
            if (quantity > currentQuantity){
                throw new IllegalArgumentException("La cantidad vendida supera la cantidad tenida.");
            } else {
                portfolio.put(assetId, currentQuantity - quantity);
            }
        } else {
            throw new IllegalArgumentException("El activo propuesto no existe en el portfolio,");
        }
    return accountBalance;
}

    // Borrar este método, sólo para debug
    public void displayPortfolio() {
        System.out.println("Portfolio:");
        for (Map.Entry<String, Double> entry : portfolio.entrySet()) {
            System.out.println("Asset ID: " + entry.getKey() + ", Amount: " + entry.getValue());
        }
    }
    
}
