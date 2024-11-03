package com.seminario.carpinchoapi.model;

import java.util.List;
import java.util.LinkedList;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public abstract class Asset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private double currentValue;
    private List<Double> valueHistory;
    private String companyInfo;

    private int volatilidad; // suponiendo que 1 es poco y 5 mucho segun el grafico del figma
    private int crecimiento;
    private int suseptibilidad;


    // Add constructors, getters, setters, and any utility methods.

    public Asset(){}
    public Asset(String name, String type, double refferenceValue, String companyInfo, int volatilidad, int crecimiento, int suseptibilidad){
        this.name = name;
        this.type = type;
        this.currentValue = Math.random() * refferenceValue;
        this.valueHistory = new LinkedList<>();
        for(int week = 0; week < 10; week++){
            valueHistory.add(Math.random() * refferenceValue);
        }
        this.companyInfo = companyInfo;
        this.volatilidad = volatilidad;
        this.crecimiento = crecimiento;
        this.suseptibilidad = suseptibilidad;
    }

    public void setName(String string) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setName'");
    }

    public void setCurrentValue(List<Asset> initialAssets) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setCurrentValue'");
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(double currentValue) {
        this.currentValue = currentValue;
    }

    public List<Double> getValueHistory() {
        return valueHistory;
    }

    public void setValueHistory(List<Double> valueHistory) {
        this.valueHistory = valueHistory;
    }

    public String getCompanyInfo() {
        return companyInfo;
    }

    public void setCompanyInfo(String companyInfo) {
        this.companyInfo = companyInfo;
    }

    public int getVolatilidad() {
        return volatilidad;
    }

    public void setVolatilidad(int volatilidad) {
        this.volatilidad = volatilidad;
    }

    public int getCrecimiento() {
        return crecimiento;
    }

    public void setCrecimiento(int crecimiento) {
        this.crecimiento = crecimiento;
    }

    public int getSuseptibilidad() {
        return suseptibilidad;
    }

    public void setSuseptibilidad(int suseptibilidad) {
        this.suseptibilidad = suseptibilidad;
    }
}
