package com.seminario.carpinchoapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seminario.carpinchoapi.model.Event;

public interface EventRepository extends JpaRepository<Event, Long> {}