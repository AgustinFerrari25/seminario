package com.seminario.carpinchoapi.model;

import jakarta.persistence.Entity;

@Entity
public class bono extends Asset{
    private double tasaInteres;
    private int vencimiento; //en años

    public bono() {
    }

    public bono(String name, String type, double refferenceValue, String companyInfo, int volatilidad, int crecimiento, int suseptibilidad,double tasaInteres, int vencimiento) {
        super(name, type, refferenceValue, companyInfo, volatilidad, crecimiento, suseptibilidad);
        this.tasaInteres = tasaInteres;
        this.vencimiento = vencimiento;
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
}
