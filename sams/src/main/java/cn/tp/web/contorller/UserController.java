package cn.tp.web.contorller;

import cn.tp.domain.pojo.User;
import cn.tp.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by tppppp on 2017/3/9.
 */
@RestController
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    //注册 && 判断email账号是否已经存在
    @RequestMapping(value = "/register", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public boolean register(@RequestBody User user) {
        User checkUser = userService.findUserByEmail(user.getEmail());
        if(checkUser==null){
            int change = userService.addUser(user);
            if(change>0)
            return true;
        }
        return false;
    }

    //登录
    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
    public boolean login(@RequestBody User user) {
        User realUser = userService.findUserByEmail(user.getEmail());
        logger.info("{}", user.getPassword());
        if (realUser != null) {
            if (realUser.getPassword().equals(user.getPassword())) {
                logger.info("{}", realUser.getPassword());
                return true;
            }
        }
        return false;
    }
}
