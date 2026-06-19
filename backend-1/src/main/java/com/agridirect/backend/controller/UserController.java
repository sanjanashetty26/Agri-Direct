package com.agridirect.backend.controller;
import java.util.List;
import com.agridirect.backend.entity.User;
import com.agridirect.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import com.agridirect.backend.dto.LoginRequest;
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
@GetMapping
public List<User> getAllUsers() {
    return userRepository.findAll();
}
@PostMapping("/login")
public String login(@RequestBody LoginRequest request) {

    User user = userRepository.findByEmail(request.getEmail());

    if(user == null) {
        return "User Not Found";
    }

    if(user.getPassword().equals(request.getPassword())) {
       return user.getRole();
    }

    return "Invalid Password";
}@DeleteMapping("/{id}")
public String deleteUser(
        @PathVariable Integer id) {

    userRepository.deleteById(id);

    return "User Deleted";
}
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepository.save(user);
    }
}