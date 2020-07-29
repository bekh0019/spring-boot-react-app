package com.bekh.jwt.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason="Current amount is less than credit")
public class ForbiddenException extends RuntimeException {}
