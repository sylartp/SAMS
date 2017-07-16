package cn.tp.web.contorller;

import cn.tp.domain.dao.UserMapper;
import cn.tp.domain.pojo.Club;
import cn.tp.domain.pojo.LoginInfo;
import cn.tp.domain.pojo.Temp;
import cn.tp.domain.pojo.User;
import cn.tp.service.ClubService;
import cn.tp.service.UserService;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by tppppp on 2017/3/9.
 */
@RestController
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private ClubService clubService;

    //注册 && 判断email账号是否已经存在
    @RequestMapping(value = "/register", method = RequestMethod.POST, consumes = "application/json")
    public boolean register(@RequestBody User user) {
        User checkUser = userService.findUserByEmail(user.getEmail());
        if (checkUser == null) {
            int change = userService.addUser(user);
            if (change > 0)
                return true;
        }
        return false;
    }

    //登录
    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    public LoginInfo login(@RequestBody User user) {
        User realUser = userService.findUserByEmail(user.getEmail());
        logger.info("输入密码: {}", user.getPassword());
        if (realUser != null) {
            if (realUser.getPassword().equals(user.getPassword())) {
                logger.info("实际密码: {}", realUser.getPassword());
                return new LoginInfo(true, realUser.getName());
            }
        }
        return new LoginInfo(false, realUser.getName());
    }

    //根据名字查用户信息
    @RequestMapping(value = "/userInfo", method = RequestMethod.GET, produces = "application/json")
    public User findStuInfoByName(@RequestParam("username") String username) {
        logger.info("开始查询");
        User user = userService.findUserByUsername(username);
        logger.info(user.getName());
        if (StringUtils.isBlank(user.getImage())) {
            user.setImage("../image/userImg/default.png");
        }
        logger.info("{},{}", user.getClubId(), user.getEmail());
        String clubName = clubService.findClubInfo(user.getClubId());
        logger.info("社团名称 {}", clubName);
        user.setClubName(clubName);
        return user;
    }

    //修改用户信息
    @RequestMapping(value = "/editStuInfo", method = RequestMethod.POST, consumes = "application/json")
    public boolean editStuInfo(@RequestBody User user) {
        logger.info("{}", user.getGender());
        int change = userService.editUser(user);
        if (change > 0) {
            return true;
        }
        return false;
    }

    //加入社团
    @RequestMapping(value = "/addClub",method = RequestMethod.POST,consumes = "application/json")
    public boolean addClub(@RequestBody Temp temp){
                logger.info("{},{},{}",temp.getClubId(),temp.getUsername(),temp.getPresentNum());
                if(userService.addClub(temp)>0){
                    return true;
                }
                return false;
    }
}