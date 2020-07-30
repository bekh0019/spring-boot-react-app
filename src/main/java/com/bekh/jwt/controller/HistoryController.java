package com.bekh.jwt.controller;

import com.bekh.jwt.entity.HistoryItem;
import com.bekh.jwt.exception.ForbiddenException;
import com.bekh.jwt.service.HistoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class HistoryController {
    private final HistoryService historyService;

    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @GetMapping("/history/user/{id}")
    public List<HistoryItem> getHistoryForUser(@PathVariable long id) {
        return historyService.findItemsByUserId(id);
    }

    @GetMapping("/historyItem/{id}")
    public HistoryItem getHistoryItem(@PathVariable long id){
        return historyService.findHistoryItemById(id);
    }

    @PostMapping("/history")
    public ResponseEntity<Void> createHistoryItem(@RequestBody HistoryItem historyItem) {

        HistoryItem itemCreated = historyService.saveHistoryItem(historyItem);

        if (itemCreated == null){
            throw new ForbiddenException();
        }

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(itemCreated.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }
}
