package com.seminario.carpinchoapi.model;

import java.util.List;

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

}
