package com.seminario.carpinchoapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seminario.carpinchoapi.model.Asset;
import com.seminario.carpinchoapi.model.Event;
import com.seminario.carpinchoapi.model.GameResult;
import com.seminario.carpinchoapi.model.GameState;
import com.seminario.carpinchoapi.model.TradeRequest;
import com.seminario.carpinchoapi.model.WeekSummary;
import com.seminario.carpinchoapi.service.GameService;

@RestController
@RequestMapping("/api/game")
public class GameController {
    private final GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping("/start")
    public ResponseEntity<GameState> startNewGame(@RequestParam int difficulty) {
        GameState gameState = gameService.startNewGame(difficulty);
        return ResponseEntity.ok(gameState);
    }

    @PostMapping("/trade")
    public ResponseEntity<GameState> trade(@RequestBody TradeRequest tradeRequest) {
    GameState updatedState = gameService.processTrade(tradeRequest);
    return ResponseEntity.ok(updatedState);
    }

    @GetMapping("/beginWeek")
    public ResponseEntity<WeekSummary> beginWeek() {
    WeekSummary summary = gameService.startNewWeek();
    return ResponseEntity.ok(summary);
    }

    @PostMapping("/endWeek")
    public ResponseEntity<GameState> endWeek() {
    GameState updatedState = gameService.finalizeWeek();
    return ResponseEntity.ok(updatedState);
    }

    @GetMapping("/gameOver")
    public ResponseEntity<GameResult> gameOver() {
    GameResult result = gameService.calculateGameResult();
    return ResponseEntity.ok(result);
}


    @GetMapping("/assets")
    public List<Asset> getAssetsInPlay() {
        return gameService.getAssetsInPlay();
    }

    @GetMapping("/events")
    public List<Event> getCurrentEvents() {
        return gameService.getCurrentEvents();
    }

    @GetMapping("/balance")
    public double getAccountBalance() {
        return gameService.getAccountBalance();
    }

    @PostMapping("/turn")
    public ResponseEntity<?> executeTurn() {
        gameService.executeTurn();
        return ResponseEntity.ok().build();
    }
}