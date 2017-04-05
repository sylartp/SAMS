package cn.tp.web.contorller;

import cn.tp.domain.pojo.User;
import cn.tp.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by tppppp on 2017/3/9.
 */
@RestController
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserService userService;

    public ModelAndView index() {
        return new ModelAndView("index");
    }


    @RequestMapping(value = "/register", method = RequestMethod.POST, consumes = "application/json")
    public String register(@RequestBody User user) {
        int change = userService.addUser(user);
        if (change > 0) {
            return "true";
        }
        return "false";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
    public boolean login(@RequestBody User user) {
        User realUser = userService.findUserByEmail(user.getEmail());
        logger.info("{}",user.getPassword());
        if(realUser!=null && realUser.getPassword().equals(user.getPassword())){
            logger.info("{}",realUser.getPassword());
            return true;
        }
        return false;
    }
}
