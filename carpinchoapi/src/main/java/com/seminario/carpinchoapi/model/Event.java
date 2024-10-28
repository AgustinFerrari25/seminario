package com.seminario.carpinchoapi.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;
    private double modifier; // Represents the effect on an asset's value

    // Add constructors, getters, setters, and utility methods.
}
