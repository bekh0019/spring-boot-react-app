package com.bekh.jwt.service;

import com.bekh.jwt.entity.User;
import com.bekh.jwt.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserById(long id) {
       return userRepository.findById(id);
    }

    @Transactional
    public void updateAmountByUserId(BigDecimal newAmount, long id){
        userRepository.updateAmountByUserId(newAmount, id);
    }
}
