package cn.tp.web.contorller;

import cn.tp.domain.dao.UserMapper;
import cn.tp.domain.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by tppppp on 2017/3/9.
 */
@RestController
public class UserController {

    @Autowired
    UserMapper userMapper;

    @RequestMapping("/user")
    @ResponseBody
    public String user() {
        User user = userMapper.findUserByName("tp");
        return user.getName() + "-----" + user.getPassword();
    }
}
