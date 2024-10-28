package com.seminario.carpinchoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seminario.carpinchoapi.model.Asset;

public interface AssetRepository extends JpaRepository<Asset, Long> {}