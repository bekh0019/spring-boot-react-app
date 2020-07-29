package com.bekh.jwt.repository;

import com.bekh.jwt.entity.HistoryItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepository extends CrudRepository<HistoryItem, Long> {

    @Query(value = "select * from history_item h where h.user_id = (SELECT u.id FROM user u)", nativeQuery = true)
    List<HistoryItem> findAllItemsByUserId(@Param("id") long userId);

    HistoryItem findHistoryItemById(long id);
}
