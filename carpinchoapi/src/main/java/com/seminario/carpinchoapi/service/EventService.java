package com.seminario.carpinchoapi.service;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.LinkedList;

import com.seminario.carpinchoapi.model.Event;
import com.seminario.carpinchoapi.repository.EventRepository;;

@Service
public class EventService {
    private EventRepository eventRepository;

    public List<Event> getCurrentEvents() {
        return eventRepository.findAll();
    }

    // Other methods for event creation and removal.
}
