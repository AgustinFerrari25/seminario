package com.seminario.carpinchoapi.repository;

import com.seminario.carpinchoapi.model.TradeRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface tradeRepository extends JpaRepository<TradeRequest, Long> {
}
