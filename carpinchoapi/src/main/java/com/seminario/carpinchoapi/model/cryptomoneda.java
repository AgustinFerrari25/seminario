package com.seminario.carpinchoapi.model;

import jakarta.persistence.Entity;

@Entity
public class cryptomoneda  extends Asset{
    private String blockChain;

    public cryptomoneda(){
    }
    public cryptomoneda(String name, String type, double refferenceValue, String companyInfo, int volatilidad, int crecimiento, int suseptibilidad,String blockChain) {
        super(name, type, refferenceValue, companyInfo, volatilidad, crecimiento, suseptibilidad);
        this.blockChain = blockChain;
    }

    public String getBlockChain() {
        return blockChain;
    }

    public void setBlockChain(String blockChain) {
        this.blockChain = blockChain;
    }
}
