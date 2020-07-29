package com.bekh.jwt.repository;

import com.bekh.jwt.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;

public interface UserRepository extends CrudRepository<User, Long> {

    User findById(long id);

    @Modifying
    @Query("update User u set u.accountBalance = :accountBalance where u.id = :id")
    void updateAmountByUserId(@Param("accountBalance") BigDecimal accountBalance, @Param("id") long userId);
}
