package com.bekh.jwt.service;

import com.bekh.jwt.entity.HistoryItem;
import com.bekh.jwt.entity.User;
import com.bekh.jwt.enums.OperationType;
import com.bekh.jwt.repository.HistoryRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
public class HistoryService {
    private final HistoryRepository historyRepository;

    private final UserService userService;

    public HistoryService(HistoryRepository repository, UserService userService) {
        this.historyRepository = repository;
        this.userService = userService;
    }

    public HistoryItem findHistoryItemById(long id) {
       return historyRepository.findHistoryItemById(id);
    }

    @Transactional(value = Transactional.TxType.SUPPORTS)
  public List<HistoryItem> findItemsByUserId(long id){
        return historyRepository.findAllItemsByUserId(id);
    }

    @Transactional
  public HistoryItem saveHistoryItem(HistoryItem historyItem){
      final User currentUser = userService.findUserById(historyItem.getUser().getId());
      final BigDecimal accountBalance = currentUser.getAccountBalance();
      boolean isCredit = Objects.equals(historyItem.getType(), OperationType.CREDIT);
      if (isCredit && accountBalance.subtract(historyItem.getAmount()).compareTo(BigDecimal.ZERO) <= 0){
              return null;
      }
      BigDecimal newBalance = isCredit ?
              accountBalance.subtract(historyItem.getAmount()) : accountBalance.add(historyItem.getAmount());
      userService.updateAmountByUserId(newBalance, currentUser.getId());
      return historyRepository.save(historyItem);
  }
}
