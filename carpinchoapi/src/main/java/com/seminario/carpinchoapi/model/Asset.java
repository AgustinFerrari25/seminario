package com.seminario.carpinchoapi.model;

import java.util.List;
import java.util.LinkedList;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Asset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private double currentValue;
    private List<Double> valueHistory;
    private String companyInfo;

    // Add constructors, getters, setters, and any utility methods.

    public Asset(String name, String type, double refferenceValue, String companyInfo){
        this.name = name;
        this.type = type;
        this.currentValue = Math.random() * refferenceValue;
        this.valueHistory = new LinkedList<>();
        for(int week = 0; week < 10; week++){
            valueHistory.add(Math.random() * refferenceValue);
        }
        this.companyInfo = companyInfo;
    }

    public void setName(String string) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setName'");
    }

    public void setCurrentValue(List<Asset> initialAssets) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setCurrentValue'");
    }
}
