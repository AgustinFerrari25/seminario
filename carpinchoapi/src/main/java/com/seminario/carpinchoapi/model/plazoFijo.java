package com.seminario.carpinchoapi.model;

import jakarta.persistence.Entity;

@Entity
public class plazoFijo extends Asset{
    private double tasaInteres;
    private int duracion;

    public plazoFijo(){
    }

    public plazoFijo(String name, String type, double refferenceValue, String companyInfo, int volatilidad, int crecimiento, int suseptibilidad,double tasaInteres, int duracion) {
        super(name, type, refferenceValue, companyInfo, volatilidad, crecimiento, suseptibilidad);
        this.tasaInteres = tasaInteres;
        this.duracion = duracion;
    }

    public double getTasaInteres() {
        return tasaInteres;
    }

    public void setTasaInteres(double tasaInteres) {
        this.tasaInteres = tasaInteres;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }
}
