package com.seminario.carpinchoapi.model;

import jakarta.persistence.Entity;

@Entity
public class obligacionesNeg extends Asset{
    private double tasaInteres;
    private int vencimiento;
    private String mercado; //mercado en el opera

    public obligacionesNeg(){
    }

    public obligacionesNeg(String name, String type, double refferenceValue, String companyInfo, int volatilidad, int crecimiento, int suseptibilidad,double tasaInteres, int vencimiento, String mercado) {
        super(name, type, refferenceValue, companyInfo, volatilidad, crecimiento, suseptibilidad);
        this.tasaInteres = tasaInteres;
        this.vencimiento = vencimiento;
        this.mercado = mercado;
    }

    public double getTasaInteres() {
        return tasaInteres;
    }

    public void setTasaInteres(double tasaInteres) {
        this.tasaInteres = tasaInteres;
    }

    public int getVencimiento() {
        return vencimiento;
    }

    public void setVencimiento(int vencimiento) {
        this.vencimiento = vencimiento;
    }

    public String getMercado() {
        return mercado;
    }

    public void setMercado(String mercado) {
        this.mercado = mercado;
    }
}
