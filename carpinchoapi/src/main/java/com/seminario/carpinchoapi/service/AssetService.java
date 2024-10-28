package com.seminario.carpinchoapi.service;

import org.springframework.stereotype.Service;

import com.seminario.carpinchoapi.repository.AssetRepository;
import com.seminario.carpinchoapi.model.Asset;

import java.util.List;
import java.util.LinkedList;

@Service
public class AssetService {
    private final AssetRepository assetRepository;

    public List<Asset> getAssetsInPlay() {
        return assetRepository.findAll();
    }

    // Additional methods to fetch, update assets, etc.
}