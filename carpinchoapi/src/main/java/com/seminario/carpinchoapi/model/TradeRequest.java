package com.seminario.carpinchoapi.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class TradeRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "asset_id", nullable = false)  // deberia haber una foreign key en la tabla trade_request hacia asset_id
    private Asset asset;

    private String tradeType;  // Tipo de operación: "BUY" o "SELL"
    private BigDecimal quantity;  // cantidad de unidades del activo
    private BigDecimal price;

    public TradeRequest() {
    }

    public TradeRequest(Asset asset, String tradeType, BigDecimal quantity, BigDecimal price) {
        this.asset = asset;
        this.tradeType = tradeType;
        this.quantity = quantity;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Asset getAsset() {
        return asset;
    }

    public void setAsset(Asset asset) {
        this.asset = asset;
    }

    public String getTradeType() {
        return tradeType;
    }

    public void setTradeType(String tradeType) {
        this.tradeType = tradeType;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    // Método de validación
    public boolean isValid() {
        return (asset != null && quantity != null && quantity.compareTo(BigDecimal.ZERO) > 0 &&
                (tradeType.equalsIgnoreCase("BUY") || tradeType.equalsIgnoreCase("SELL")));
    }
}
