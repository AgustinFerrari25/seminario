package com.seminario.carpinchoapi.service;

import com.seminario.carpinchoapi.model.Asset;
import com.seminario.carpinchoapi.model.TradeRequest;

import com.seminario.carpinchoapi.repository.AssetRepository;
import com.seminario.carpinchoapi.repository.tradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class tradeService {
    @Autowired
    private AssetRepository assetRepository;

    @Autowired
    private tradeRepository tradeRequestRepository;

    public boolean processTrade(Long assetId, String tradeType, BigDecimal quantity, BigDecimal price) {
        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new IllegalArgumentException("Asset not found"));

        TradeRequest tradeRequest = new TradeRequest(asset, tradeType, quantity, price);

        // Validación del TradeRequest
        if (!tradeRequest.isValid()) {
            throw new IllegalArgumentException("Invalid trade request");
        }

        tradeRequestRepository.save(tradeRequest);
        return true;
    }
}
